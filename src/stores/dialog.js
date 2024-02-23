import { defineStore } from 'pinia'

export const useDialogStore = defineStore('dialog', {
  state: () => ({
    dialog: false,
    Component: '',
    Title: '',
    props: {}
  }),
  actions: {
    openDialog(component, title, props) {
      this.dialog = true
      this.Component = component
      this.Title = title
      this.props = props
    },
    closeDialog() {
      this.dialog = false
      this.Component = ''
      this.Title = ''
      this.props = {}
    }
  },
  getters: {
    dialogState: (state) => state.dialog,
    dialogComponent: (state) => state.Component,
    dialogTitle: (state) => state.Title,
    dialogProps: (state) => state.props
  },

  persist: true
})
