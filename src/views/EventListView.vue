<script setup>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
import { ref, onMounted, computed, watchEffect } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps(['page'])
const events = ref(null)
const totalEvents = ref(0)

// const { page } = toRefs(props)
const router = useRouter()
const page = computed(() => props.page)
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / 2)
  console.log(totalPages)
  return page.value < totalPages
})

onMounted(() => {
  watchEffect(() => {
    events.value = null
    EventService.getEvents(15, page.value)
      .then((response) => {
        if (response.status === 200) {
          events.value = response.data.docs
          totalEvents.value = response.data.numFound
        } else throw new Error('Could not retrieve data!')
      })
      .catch((error) => {
        router.push({ name: 'network-error' })

        console.error(error)
      })
  })
})
</script>

<template>
  <h1>Events For Good</h1>
  <div class="events" v-if="events">
    <EventCard
      v-for="event in events"
      :key="event.key"
      :id="event.key"
      :title="event.title"
      :author-name="event.author_name && event.author_name.length > 0 ? event.author_name[0] : ''"
      :cover-edition-key="event.cover_edition_key"
      :cover-id="event.cover_i"
    />

    <div class="pagination">
      <RouterLink
        id="page-prev"
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
        >&#60; Previous</RouterLink
      >
      <RouterLink
        id="page-next"
        :to="{ name: 'event-list', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
        >Next &#62;</RouterLink
      >
    </div>
  </div>
</template>

<style scoped>
.events {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
}

.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
