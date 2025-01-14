import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', {
  state: () => {
    return {
      todoList: [],
      id: 0,
    }
  },
  actions: {
    addTodo(item) {
      this.todoList.push({ item, id: this.id++, completed: false })
    },
    deleteTodo(id) {
      this.todoList = this.todoList.filter((todo) => todo.id !== id)
    },
  },
  getters: {
    list() {
      return this.todoList
    },
  },
})
