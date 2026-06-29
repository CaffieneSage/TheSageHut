<script setup>
import TCSBanner from '../assets/TCSBanner.png'
</script>

<template>
  <aside class="ads-sidebar">

    <div class="ad-slots">
      <div class="ad-slot">Ad Space</div>
      <div class="ad-slot">Ad Space</div>
      <div class="ad-slot">Ad Space</div>
    </div>
  </aside>
</template>

<style scoped>
.ads-sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 240px;
  height: 100vh;
  background: #111;
  border-left: 3px solid #ff7a00;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}


.ad-logo-img {
  width: 100%;
  height: auto;
  display: block;
  margin: 0;
}

/* Ad slots */
.ad-slots {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px;
}

.ad-slot {
  width: 100%;
  height: 120px;
  background: #1a1a1a;
  border: 1px dashed #444;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #777;
  font-size: 14px;
}

/* Mobile: hide ads sidebar */
@media (max-width: 768px) {
  .ads-sidebar {
    display: none;
  }
}
</style>
