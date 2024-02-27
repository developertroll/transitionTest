import { defineStore } from 'pinia'
import moment from 'moment'
export const useContactStore = defineStore('contact', {
  state: () => ({
    contact: [
      {
        idx: 0,
        title: '',
        content: '',
        tag: '',
        writer: '',
        date: '',
        status: '',
        allocatedAdmin: '',
        answer: ''
      }
    ],
    adminOnlyInformation: [
      {
        idx: 0,
        refIdx: 0,
        tag: [],
        desc: ''
      }
    ]
  }),
  actions: {
    createContact(value) {
      this.contact.push({
        idx: this.contact.length,
        title: value.title,
        content: value.content,
        tag: value.tag,
        writer: value.writer,
        date: value.date ? value.date : moment().format('YYYY-MM-DD HH:mm:ss'),
        status: '접수',
        allocatedAdmin: value.allocatedAdmin ? value.allocatedAdmin : '',
        answer: ''
      })
    },
    resetContact() {
      this.contact = [
        {
          idx: 0,
          title: '',
          content: '',
          tag: '',
          writer: '',
          date: '',
          status: '',
          allocatedAdmin: '',
          answer: ''
        }
      ]
    },
    updateContact(value) {
      this.contact = value
    },
    addContactTag(idx, tag) {
      this.contact[idx].tag = tag
    },
    answerContact(idx, answer, tag, desc) {
      this.contact[idx].answer = answer
      this.adminOnlyInformation.push({
        idx: this.adminOnlyInformation.length,
        refIdx: idx,
        tag: tag,
        desc: desc
      })
    },
    allocateAdminToContact(idx, adminIdx) {
      this.contact[idx].allocatedAdmin = adminIdx
    }
  },
  getters: {
    customerGetContact: (state) => {
      return (idx) => state.contact.filter((c) => c.writer === idx && c.status !== '삭제')
    },
    adminGetContact: (state) => {
      return (id) =>
        state.contact.filter(
          (c) =>
            c.allocatedAdmin === id && c.status !== '완료' && c.status !== '삭제' && c.idx !== 0
        )
    },
    adminGetAllContact: (state) => {
      return () =>
        state.contact.filter(
          (c) =>
            c.status !== '완료' && c.status !== '삭제' && c.idx !== 0 && c.allocatedAdmin === ''
        )
    },
    customerGetContactHistory: (state) => {
      return (id) => state.contact.filter((c) => c.writer === id && c.status === '완료')
    },
    adminGetContactHistory: (state) => {
      return (id) => state.contact.filter((c) => c.allocatedAdmin === id && c.status === '완료')
    },
    getContactByIdx: (state) => {
      return (idx) => state.contact.find((c) => c.idx === idx)
    },
    getAllocatedContact: (state) => {
      return () =>
        state.contact.filter(
          (c) => c.allocatedAdmin !== '' && c.status !== '완료' && c.status !== '삭제'
        )
    }
  },
  persist: true
})
