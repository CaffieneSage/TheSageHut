<template>
    <div class="mobile-navigation">
        <button class="hamburger" @click="open = !open">
            ☰
        </button>

        <div v-if="open" class="mobile-menu">
            <ul class="nav-links">
                <li><router-link to="/" @click="open = false">Home</router-link></li>
                <li><router-link to="/youtube" @click="open = false">Youtube</router-link></li>
                <li><router-link to="/about" @click="open = false">About</router-link></li>
                <li><router-link to="/support" @click="open = false">Support Me</router-link></li>
                <li><router-link to="/privacy" @click="open = false">Privacy</router-link></li>

            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

<style scoped>
.mobile-nav {
    display: none;
}

.hamburger {
    font-size: 28px;
    background: none;
    border: none;
    padding: 10px;
    cursor: pointer;
    color: #fff;
}

.mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    height: 100vh;
    background: #111;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-right: 3px solid #ff7a00;
}

.mobile-menu a {
    color: #fff;
    font-size: 20px;
}

@media (max-width: 768px) {
    .mobile-nav {
        display: flex;
        align-items: center;
        padding: 10px;
        background: #111;
        border-bottom: 3px solid #ff7a00;
        position: sticky;
        top: 0;
        z-index: 999;
    }
}
</style>