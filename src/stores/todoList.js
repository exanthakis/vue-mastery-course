import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', {
  state: () => {
    return {
      todoList: [],
    }
  },
})
