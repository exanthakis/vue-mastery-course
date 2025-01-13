<script setup>
import EventService from '@/services/EventService'
import { onMounted, ref } from 'vue'

const { id } = defineProps({
  id: {
    required: true,
  },
})

const event = ref(null)

onMounted(() => {
  EventService.getEvent(id)
    .then((response) => {
      if (response.status === 200) event.value = response.data
      else throw new Error('Could not retrieve data!')
    })
    .catch((error) => {
      console.error(error)
    })
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>
