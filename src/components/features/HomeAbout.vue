<template>
  <section class="about" aria-label="О студии">
    <div class="about__overlay"></div>
    <div class="about__content">
      <span class="about__subtitle">О СТУДИИ</span>
      <h2 class="about__title">Root Ray — это эстетика в каждой детали</h2>
      <p class="about__text">
        Мы верим, что цветы — это самый простой способ подарить радость и создать особенную атмосферу. Наши флористы тщательно отбирают каждый цветок для ваших букетов.
      </p>
      <AppButton to="/about" variant="outline">
        УЗНАТЬ БОЛЬШЕ
      </AppButton>
    </div>
  </section>
</template>

<script setup>
import AppButton from '@/components/ui/AppButton.vue'
</script>

<style scoped>
.about {
  position: relative;
  padding: 120px 20px;
  background-image: url('/img/pottery.jpeg');
  background-size: cover;
  background-position: center;
  color: var(--color-white);
  text-align: center;
}

.about__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}

.about__content {
  position: relative;
  z-index: 1;
  max-width: 700px;
  margin: 0 auto;
}

.about__subtitle {
  display: block;
  font-size: 0.9rem;
  letter-spacing: 4px;
  margin-bottom: 20px;
}

.about__title {
  font-size: 2.5rem;
  margin-bottom: 30px;
  line-height: 1.2;
}

.about__text {
  font-size: 1.1rem;
  margin-bottom: 40px;
  line-height: 1.8;
  opacity: 0.9;
}

@media (max-width: 600px) {
  .about {
    padding: 80px 20px;
  }
  .about__title {
    font-size: 1.8rem;
  }
}
</style>
