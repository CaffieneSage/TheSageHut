<template>
  <figure class="guide-image">
    <img :src="src" :alt="caption" />
    <figcaption>{{ caption }}</figcaption>
  </figure>
</template>

<script setup>
defineProps({
  src: String,
  caption: String
})
</script>

<style scoped>

.guide-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
}

.guide-image img {
  max-width: 100%;
  border-radius: 8px;
  margin: 1rem 0;
}

.guide-image figcaption {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  text-align: center;
  font-size: 0.9rem;
  opacity: 0.7;
}
</style>
