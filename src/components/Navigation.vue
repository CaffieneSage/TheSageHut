<script setup>
  import TCSBanner from '../assets/TCSBanner.png'
</script>

<template>
  <nav class="navigation">
    <div class="logo-area">
        <img class="logo-img" :src="TCSBanner">
    </div>

    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/youtube">Youtube</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/support">Support Me</router-link></li>
      <li><router-link to="/privacy">Privacy</router-link></li>
    </ul>
  </nav>
</template>



<style scoped>
.navigation {
  position: fixed;
  top: 0;
  left: 0;
  width: 240px;
  height: 100vh;
  background: #111;
  border-right: 3px solid #ff7a00;
  padding: 0 0 0 0;
  box-sizing: border-box;
}


.logo-area {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 40px;
  min-height: 250px;
}


.logo-img {
  width: 100%;
  height: auto;
  display: block;
  margin: 0;
  top: 0;
  left: 0;
}

.nav-links {
  list-style: none;
  padding: 0 0 0 20px;
  font-size: larger;
  margin: 0;
}

.nav-links li {
  margin: 12px 0;
}

.nav-links a {
  color: #ccc;
  text-decoration: none;
  font-size: 1rem;
}

.nav-links a:hover {
  color: #fff;
}
</style>
