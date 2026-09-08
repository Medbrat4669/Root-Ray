<template>
  <section class="philosophy" aria-label="Философия студии">
    <span class="philosophy__subtitle">ФИЛОСОФИЯ</span>
    <h2 class="philosophy__title">
      Эстетика момента,<br>стиль и эмоции
    </h2>
    <p class="philosophy__text">
      Сохраняю не только то, как это выглядело, но и то, как это ощущалось.
    </p>
    <AppButton to="/about" variant="text">ПОРТФОЛИО</AppButton>
  </section>
</template>

<script setup>
import AppButton from '@/components/ui/AppButton.vue'
</script>

<style scoped>
.philosophy {
  padding: var(--section-padding);
  text-align: center;
  background-color: var(--color-accent);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.philosophy__subtitle {
  font-size: 0.8rem;
  letter-spacing: 4px;
  color: var(--color-text-light);
  margin-bottom: 24px;
  text-transform: uppercase;
}

.philosophy__title {
  font-size: 2.8rem;
  margin-bottom: 30px;
  line-height: 1.2;
}

.philosophy__text {
  max-width: 500px;
  margin-bottom: 40px;
  color: var(--color-text-muted);
  line-height: 1.6;
}

@media (max-width: 600px) {
  .philosophy {
    padding: var(--section-padding-mobile);
  }
  .philosophy__title {
    font-size: 2rem;
  }
}
</style>
