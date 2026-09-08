<template>
  <div class="home-page">
    <AppHeader />
    
    <HomeHero />
    
    <HomeCategories />

    <HomePhilosophy />

    <HomeAbout />

    <HomeGallery />

    <AppFooter :show-gallery="true" />
  </div>
</template>

<script setup>
import AppHeader from '@/components/common/AppHeader.vue'
import AppFooter from '@/components/common/AppFooter.vue'
import HomeHero from '@/components/features/HomeHero.vue'
import HomeCategories from '@/components/features/HomeCategories.vue'
import HomePhilosophy from '@/components/features/HomePhilosophy.vue'
import HomeAbout from '@/components/features/HomeAbout.vue'
import HomeGallery from '@/components/features/HomeGallery.vue'
</script>

<style scoped>
.home-page {
  width: 100%;
}
</style>

