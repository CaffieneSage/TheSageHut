<template>
    <GuideLayout>
        <h1>Guild Wars Guides</h1>

        <ul>
            <router-link to="/guides/ElementalistStarterElites">
                3 Easy Elementalist Elites (Beginner Guide)
            </router-link>
        </ul>
    </GuideLayout>
</template>

<script setup>
import GuideLayout from '../../components/GuideLayout.vue'
import StarterElementalistElites from './StarterElementalistElites.vue';
</script>
