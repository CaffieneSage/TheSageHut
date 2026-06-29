<template>

  <div class="page-wrapper">
    <div class="youtube">
      <h1>Check out my Youtube Channel!</h1>
      <p>Why not dive in and check out some recent videos?</p>
    </div>

    <div class="video-grid">
      <div class="video-item">
        <div class="video-frame">
          <iframe src="https://www.youtube.com/embed/5KBcZXqWzk0" title="Video title" frameborder="0"
            allowfullscreen></iframe>
        </div>
        <p class="video-description">
          A 5 minute Build Breakdown for a mesmer Visions Of Regret build in Guild Wars Reforged!
        </p>
      </div>

      <div class="video-item">
        <div class="video-frame">
          <iframe src="https://www.youtube.com/embed/gBnSebIyFiQ" title="Video title" frameborder="0"
            allowfullscreen></iframe>
        </div>
        <p class="video-description">
          A vanquish video for The Black Curtain Explorable in Guild Wars Reforged!
        </p>
      </div>

      <div class="video-item">
        <div class="video-frame">
          <iframe src="https://www.youtube.com/embed/8dUbaadbNSQ" title="Video title" frameborder="0"
            allowfullscreen></iframe>
        </div>
        <p class="video-description">
          A 5 minute Build Breakdown for a Minion Bomber build in Guild Wars Reforged!
        </p>
      </div>

      <div class="video-item">
        <div class="video-frame">
          <iframe src="https://www.youtube.com/embed/fD1cIBWFj44" title="Video title" frameborder="0"
            allowfullscreen></iframe>
        </div>
        <p class="video-description">
          A 5 minute starter Mage Guide for Enshrouded patch 8!
        </p>
      </div>

      <div class="video-item">
        <div class="video-frame">
          <iframe src="https://www.youtube.com/embed/Mkej6hNq5jg" title="Video title" frameborder="0"
            allowfullscreen></iframe>
        </div>
        <p class="video-description">
          Some EPIC fails and saves in Deep Rock Galactic with Friends!
        </p>
      </div>

      <div class="video-item">
        <div class="video-frame">
          <iframe src="https://www.youtube.com/embed/o0YSsPjzfhM" title="Video title" frameborder="0"
            allowfullscreen></iframe>
        </div>
        <p class="video-description">
          A gameplay video featuring a ruin restoration timelapse and a delve into Mistbury Catacombs!
        </p>
      </div>

      <div class="video-item">
        <div class="video-frame">
          <iframe src="https://www.youtube.com/embed/JFHF1vNMopo" title="Video title" frameborder="0"
            allowfullscreen></iframe>
        </div>
        <p class="video-description">
          A first impression of Cloudheim's Demo version!
        </p>
      </div>

      <div class="video-item">
        <div class="video-frame">
          <iframe src="https://www.youtube.com/embed/wM4T1HExRz8" title="Video title" frameborder="0"
            allowfullscreen></iframe>
        </div>
        <p class="video-description">
          A 5 minute Build Breakdown for a Hundred Blades Warrior build in Guild Wars Reforged!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Youtube'
}
</script>

<style>
.page {
  max-width: 900px;
  padding: 20px;
}

.page-wrapper {
  margin-left: 240px;   /* nav bar width */
  margin-right: 240px;  /* ad bar width */
  padding: 20px;
  flex-direction: column;
  align-items: center;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 20px;
  justify-items: center;
  width: 100%;
  align-items: left;
}

.video-item {
  width: 100%;
  max-width: 360px;
  text-align: center;
}

.video-frame {
  aspect-ratio: 16 / 9;
  /* modern responsive ratio */
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}

.video-frame iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.video-description {
  margin-top: 8px;
  font-size: 0.9rem;
  color: #ccc;
}

@media (max-width: 768px) {
  .page-wrapper,
  .youtube,
  .video-grid {
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding: 10px;
  }
}

</style>