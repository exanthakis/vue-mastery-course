<script setup>
import EventService from '@/services/EventService'
import { onMounted, ref, computed, defineProps } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps(['id'])
const id = computed(() => props.id)
const router = useRouter()

const event = ref(null)

onMounted(() => {
  EventService.getEvent(id.value)
    .then((response) => {
      if (response.status === 200) event.value = response.data
      else throw new Error('Could not retrieve data!')
    })
    .catch((error) => {
      if (error && error.response && error.response.status == 404) {
        router.push({ name: '404-resource', params: { resource: 'event' } })
      } else {
        router.push({ name: 'network-error' })
      }
      console.error(error)
    })
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <RouterLink :to="{ name: 'event-details' }">Details</RouterLink> |
      <RouterLink :to="{ name: 'event-register' }">Register</RouterLink> |
      <RouterLink :to="{ name: 'event-edit' }">Edit</RouterLink>
    </div>
    <RouterView :event="event" />
  </div>
</template>
