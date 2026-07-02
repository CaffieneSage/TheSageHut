<script setup>
import AdsNavigation from './components/AdsNavigation.vue';
import MobileNavigation from './components/MobileNavigation.vue';
import Navigation from './components/Navigation.vue';
import { Analytics } from '@vercel/analytics/vue';
</script>

<template>
  <Analytics />
  <mobile-navigation />
  <navigation />
  <ads-navigation />
  <main class="content-layer">
    <router-view />
  </main>
</template>

<style>
body {
  margin: 0;
  background-color: #1a1a1a;
  /* charcoal grey */
  color: #e0e0e0;
  font-family: sans-serif;
}

.content-layer {
  margin-left: 240px;
  margin-right: 240px;
  padding: 20px;
}

@media (max-width: 768px) {
  .content-layer {
    margin-left: 0;
    margin-right: 0;
  }
}

</style>
