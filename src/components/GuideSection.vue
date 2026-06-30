<template>
  <section class="guide-section">
    <h2>{{ title }}</h2>
    <p v-for="(p, i) in paragraphs" :key="i">{{ p }}</p>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  paragraphs: Array
})
</script>

<style scoped>
.guide-section {
  margin-top: 2rem;
}

.guide-section {
  border-left: 6px solid #ff7a00;
  padding: 20px;
  margin: 30px 0;
  background: #1a1a1a;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(255, 122, 0, 0.2);
}
</style>
