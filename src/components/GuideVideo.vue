<template>
  <div class="guide-video">
    <iframe 
      :src="src"
      frameborder="0"
      allowfullscreen
    ></iframe>
    <p class="caption">{{ caption }}</p>
  </div>
</template>

<script setup>
defineProps({
  src: String,
  caption: String
})
</script>

<style scoped>
.guide-video {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
}

.guide-video iframe {
  width: 100%;
  max-width: 700px;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
}

.caption {
  text-align: center;
  opacity: 0.7;
  margin-top: 0.5rem;
}
</style>
