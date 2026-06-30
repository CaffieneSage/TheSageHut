<template>
  <div class="guide-layout">
    <div class="guide-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.guide-layout {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

.guide-content h1 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
}

.guide-content h2 {
  margin-top: 2rem;
  font-size: 1.6rem;
}

.guide-content p {
  line-height: 1.6;
  margin-bottom: 1rem;
}


</style>
