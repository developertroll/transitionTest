import { useDialogStore } from '@/stores/dialog'

export function dialogFunction() {
  const dialogStore = useDialogStore()
  const openDialog = (component, title, props) => {
    dialogStore.openDialog(component, title, props)
    console.log(dialogStore.dialogState)
  }
  const closeDialog = () => {
    dialogStore.closeDialog()
  }

  return { openDialog, closeDialog }
}
