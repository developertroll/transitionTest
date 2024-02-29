import { defineStore } from 'pinia'
import moment from 'moment'

export const useAdminBoardStore = defineStore('adminBoard', {
  state: () => ({
    adminBoard: [],
    adminBoardLoading: false
  }),
  actions: {
    setAdminBoard(adminBoard) {
      this.adminBoard = adminBoard
    },
    setAdminBoardLoading(loading) {
      this.adminBoardLoading = loading
    },
    createBoard(board) {
      this.adminBoard.push({
        idx: this.adminBoard.length,
        title: board.title,
        content: board.content,
        writer: board.writer,
        createAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        files: board.file,
        views: 0
      })
    },
    updateBoard(board) {
      const idx = this.adminBoard.findIndex((b) => b.idx === board.idx)
      this.adminBoard[idx] = board
    },
    addView(idx) {
      const board = this.adminBoard.find((b) => b.idx === idx)
      board.views++
    }
  },
  getters: {
    adminBoardState: (state) => state.adminBoard,
    adminBoardLoadingState: (state) => state.adminBoardLoading,
    searchBoard: (state) => (search, rule) => {
      // rule이 title, content, writer, titleContent 중 하나에서 맞춰서 검색
      if (rule === 'title') {
        return state.adminBoard.filter((board) => board.title.includes(search))
      } else if (rule === 'content') {
        return state.adminBoard.filter((board) => board.content.includes(search))
      } else if (rule === 'writer') {
        return state.adminBoard.filter((board) => board.writer.includes(search))
      } else if (rule === 'titleContent') {
        return state.adminBoard.filter(
          (board) => board.title.includes(search) || board.content.includes(search)
        )
      }
    },
    getBoard: (state) => (idx) => {
      return state.adminBoard.find((board) => board.idx === idx)
    }
  },
  persist: true
})
