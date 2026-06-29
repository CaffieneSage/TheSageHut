<script setup>
  import Navigation from './components/Navigation.vue'
  import Ads from './components/Ads.vue';
</script>

<template>
  <navigation />
  <main class="content-layer">
    <router-view />
  </main>
  <Ads />
</template>

<style>
body {
  margin: 0;
  background-color: #1a1a1a; /* charcoal grey */
  color: #e0e0e0;
  font-family: sans-serif;
}

.content-layer {
  margin-left: 240px; /* same width as sidebar */
  padding: 20px;
}

</style>
