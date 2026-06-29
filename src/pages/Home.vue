<template>

  <div class="layout">

    <!-- MAIN CONTENT -->
    <main class="content">

      <div>
    <h1>The Sage's Hut</h1>
    <p>Feel free to look around and check out what is on offer, you can look at a selection of videos that 
      got released on the youtube channel recently, or check out the About page to find out more about me!
      You can also support me via the support page if you wish!
    </p>
  </div>

  <FeatureSection
    title="Game Guides"
    description="Guides and builds for Guild Wars Reforged, Enshrouded... ...and more... crafted by The Caffeine Sage."
    :image="Arya"
    :buttons="[
      { text: 'Guild Wars Guides', url: 'https://www.youtube.com/playlist?list=PL_TWCA3cXGiwnqzUiECXnv_ZLqkdhkV0j' },
      { text: 'Enshrouded Guides', url: 'https://www.youtube.com/playlist?list=PL_TWCA3cXGiwMvMXf8P7zAzF5k8LvmTY9' }
    ]"
  />

  <FeatureSection
    title="Epic Playthroughs!"
    description="In depth content playthroughs, mistakes and chaos left in!"
    :reverse="true"
    :image="Warrior2h"
    :buttons="[
      { text: 'Enshrouded', url: 'https://www.youtube.com/playlist?list=PL_TWCA3cXGixdIPnGvmKSncOuI0T60Ojc' },
      { text: 'Guild Wars', url: 'https://www.youtube.com/playlist?list=PL_TWCA3cXGiwp_t_jAEnuMRNyupYkz42M' },
      { text: 'Ark', url: 'https://www.youtube.com/playlist?list=PL_TWCA3cXGiwHTdIzctbDQdp3uiT_pb8u' },
      { text: 'Deep Rock Galactic', url: 'https://www.youtube.com/playlist?list=PL_TWCA3cXGixAwj746ebQvMVNo2glnbaW' },
    ]"
  />
      
    </main>

    
  </div>


  
</template>

<script setup>
  import FeatureSection from '../components/FeatureSection.vue'
  import Arya from "../assets/Arya.png"
  import Warrior2h from "../assets/Warrior2h.png"

</script>

<style scoped>
h1 {
  margin-bottom: 10px;
}

.layout {
  display: grid;
  grid-template-columns: 1fr 240px;
  gap: 20px;
  min-height: 100vh;
}



/* MOBILE: collapse both sidebars */
@media (max-width: 768px) {

  .layout {
    grid-template-columns: 1fr;
  }

  /* Hide both fixed sidebars */
  .sidebar,
  .ads-sidebar {
    display: none;
  }

  /* Remove the forced 240px margins */
  .page-wrapper {
    margin-left: 0;
    margin-right: 0;
    padding: 10px;
    max-width: 100%;
  }

  /* Make the grid behave on mobile */
  .video-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .video-item {
    max-width: 100%;
  }
}



</style>