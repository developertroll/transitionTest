import { defineStore } from 'pinia'

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
        date: value.date,
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
    answerContact(idx, answer) {
      this.contact[idx].answer = answer
    }
  },
  getters: {
    customerGetContact: (state) => {
      return (idx) => state.contact.filter((c) => c.writer === idx && c.status !== '삭제')
    },
    adminGetContact: (state) => {
      return (id) =>
        state.contact.filter(
          (c) => c.allocatedAdmin === id && c.status !== '완료' && c.status !== '삭제'
        )
    },
    customerGetContactHistory: (state) => {
      return (id) => state.contact.filter((c) => c.writer === id && c.status === '완료')
    },
    adminGetContactHistory: (state) => {
      return (id) => state.contact.filter((c) => c.allocatedAdmin === id && c.status === '완료')
    }
  },
  persist: true
})
