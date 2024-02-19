export function board() {
  const boards = []
  const addBoard = (board) => {
    boards.push(board)
  }
  const removeBoard = (board) => {
    const index = boards.indexOf(board)
    if (index > -1) {
      boards.splice(index, 1)
    }
  }
  const updateState = (board, status) => {
    const index = boards.indexOf(board)
    if (index > -1) {
      boards[index].status = status
    }
  }
  return { boards, addBoard, removeBoard, updateState }
}
