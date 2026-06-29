<template>
  <div class="feature-section" :class="{ reverse: reverse }">
    <div class="feature-image">
      <img :src="image" :alt="title" />
    </div>

    <div class="feature-text">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>

    <div class="feature-buttons" v-if="buttons.length">
  <a
    v-for="btn in buttons"
    :key="btn.text"
    :href="btn.url"
    target="_blank"
    rel="noopener"
    class="feature-button"
  >
    {{ btn.text }}
  </a>
</div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  reverse: {
    type: Boolean,
    default: false
  },
  link: {
    type: String,
    default: null
  },
  buttons: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.feature-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  border: 2px solid #ff7a00;
  border-radius: 12px;
  margin-bottom: 30px;
  background: #111;
}

.feature-image img {
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
}

.feature-text {
  flex: 1;
  color: #ccc;
}

.feature-text h2 {
  margin-bottom: 10px;
  color: #ff7a00;
}

.reverse {
  flex-direction: row-reverse;
}

@media (max-width: 768px) {
  .feature-section,
  .reverse {
    flex-direction: column;
    text-align: center;
  }

  .feature-image img {
    max-width: 100%;
  }
}

.feature-buttons {
  margin-top: 15px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.feature-button {
  padding: 10px 16px;
  background: #ff7a00;
  color: #111;
  border-radius: 6px;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease;
}

.feature-button:hover {
  background: #ffa64d;
  transform: translateY(-3px);
}
</style>
