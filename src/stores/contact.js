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
    ],
    reContact: [
      {
        idx: 0,
        refIdx: 0,
        question: '',
        answer: ''
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
      this.contact[idx].status = '답변 대기'
      this.adminOnlyInformation.push({
        idx: this.adminOnlyInformation.length,
        refIdx: idx,
        tag: tag,
        desc: desc
      })
    },
    allocateAdminToContact(idx, adminIdx) {
      this.contact[idx].allocatedAdmin = adminIdx
    },
    finishContact(idx) {
      this.contact[idx].status = '완료'
    },
    createReContact(idx, text) {
      this.contact[idx].status = '재문의 접수'
      this.reContact.push({
        idx: this.reContact.length,
        refIdx: idx,
        question: text,
        answer: ''
      })
    },
    answerReContact(idx, answers) {
      // this.reContact에서 refIdx가 idx인 것을 찾아서 answer 대입
      let contact = this.reContact.find((c) => c.refIdx === parseInt(idx) && c.answer === '')
      if (contact) {
        contact.answer = answers
        this.contact[idx].status = '재답변 대기'
      } else {
        console.error(`No contact found with refIdx ${idx} and empty answer.`)
      }
    },
    finishReContact(idx) {
      this.contact[idx].status = '완료'
    }
  },
  getters: {
    customerGetContact: (state) => {
      return (idx) =>
        state.contact.filter(
          (c) =>
            c.writer === idx &&
            c.status !== '삭제' &&
            c.status !== '완료' &&
            c.status !== '답변 대기'
        )
    },
    customerGetAllContact: (state) => {
      return (idx) => state.contact.filter((c) => c.writer === idx && c.status !== '삭제')
    },
    customerGetAwaitingContact: (state) => {
      return (idx) => {
        return state.contact.filter((c) => c.writer === idx && c.status === '답변 대기')
      }
    },
    customerGetFinishedContact: (state) => {
      return (idx) => {
        return state.contact.filter((c) => c.writer === idx && c.status === '완료')
      }
    },
    adminGetContact: (state) => {
      return (idx) =>
        state.contact.filter(
          (c) =>
            c.allocatedAdmin === idx &&
            c.status !== '완료' &&
            c.status !== '삭제' &&
            c.idx !== 0 &&
            c.status !== '답변 대기' &&
            this.getReContact(c.idx).length === 0
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
    },
    getReContact: (state) => {
      return (idx) => state.reContact.filter((c) => c.refIdx === idx)
    },
    getInfoContact: (state) => {
      return () =>
        state.contact.filter(
          (c) => c.title.includes('회원 정보') && c.status !== '삭제' && c.status !== '완료'
        )
    }
  },
  persist: true
})
