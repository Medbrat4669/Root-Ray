<template>
  <main class="hero" role="main" aria-label="Главный баннер">
    <div class="hero__content">
      <span class="hero__subtitle">АВТОРСКИЕ БУКЕТЫ</span>
      <h1 class="hero__title">Цветочная студия</h1>
      <AppButton to="/shop" variant="primary">
        ВЫБРАТЬ БУКЕТ
      </AppButton>
    </div>

    <div class="hero__scroll" aria-hidden="true">
      <svg viewBox="0 0 24 24" class="hero__scroll-icon">
        <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
      </svg>
    </div>
  </main>
</template>

<script setup>
import AppButton from '@/components/ui/AppButton.vue'
</script>

<style scoped>
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url('/img/header-background.jpeg');
  background-size: cover;
  background-position: center;
  color: var(--color-white);
  text-align: center;
  position: relative;
}

.hero__content {
  max-width: 800px;
  padding: 0 20px;
}

.hero__subtitle {
  display: block;
  font-size: 0.9rem;
  letter-spacing: 6px;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.hero__title {
  font-size: 4.5rem;
  margin-bottom: 40px;
  letter-spacing: 4px;
}

.hero__scroll {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
}

.hero__scroll-icon {
  width: 32px;
  height: 32px;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
  40% { transform: translateY(-10px) translateX(-50%); }
  60% { transform: translateY(-5px) translateX(-50%); }
}

@media (max-width: 900px) {
  .hero__title {
    font-size: 3.5rem;
  }
}

@media (max-width: 600px) {
  .hero__title {
    font-size: 2.5rem;
  }
  .hero__subtitle {
    font-size: 0.75rem;
    letter-spacing: 4px;
  }
}
</style>
