<script setup>
import { computed } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
  coverEditionKey: {
    type: String,
    required: false,
    default: '',
  },
  coverId: {
    type: Number,
    required: false,
    default: 0,
  },
})

const coverPath = computed(() => {
  if (props.coverEditionKey)
    return 'https://covers.openlibrary.org/b/olid/' + props.coverEditionKey + '-M.jpg'
  else if (props.coverId) return 'https://covers.openlibrary.org/b/id/' + props.coverId + '-M.jpg'
  else return ''
})

console.log('cover', props.coverId)
</script>

<template>
  <RouterLink class="event-link" :to="{ name: 'event-details', params: { id } }">
    <div class="event-card">
      <h2>{{ title }}</h2>
      <span>{{ authorName }}</span>
      <img :src="coverPath" :alt="title" />
      <!-- <span>@{{ time }} on {{ date }}</span> -->
    </div>
  </RouterLink>
</template>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-link {
  color: #2c3e50;
  text-decoration: none;
  width: fit-content;
}
</style>
