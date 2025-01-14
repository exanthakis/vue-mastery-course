<script setup>
import { useTodoListStore } from '@/stores/todoList'
import { ref } from 'vue'
// import {useTodoListStore} from '@store'

const todo = ref('')
const store = useTodoListStore()

const addItemAndClear = (item) => {
  if (item.length === 0) {
    return
  }
  store.addTodo(item)
  todo.value = ''
}
</script>

<template>
  <div>
    <form @submit.prevent="addItemAndClear(todo)">
      <input v-model="todo" type="text" />
      <button>Add</button>
    </form>
  </div>
</template>

<style scoped></style>
