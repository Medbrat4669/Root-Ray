<template>
  <div class="about-page">
    <AppHeader />

    <main class="about-main">
      <div class="container">
        <div class="about-grid">
          <!-- Текстовая часть -->
          <div class="about-content">
            <span class="about-subtitle">О СТУДИИ</span>
            <h1 class="about-title">Мы — Root Ray</h1>
            <div class="about-text">
              <p>
                Мы влюблены в то, что мы делаем. Флористика для нас — больше, чем профессия.
                Это дело, которому мы отдаём себя целиком и которое никогда не надоест.
              </p>
              <p>
                Каждый букет — это история, которую мы рассказываем с помощью цветов. 
                Мы верим, что красота кроется в простоте и естественности.
              </p>
            </div>
            <AppButton to="/shop" variant="outline">ПЕРЕЙТИ В МАГАЗИН</AppButton>
          </div>

          <!-- Изображение -->
          <div class="about-image-wrap">
            <img src="/img/about.jpg" alt="Студия Root Ray" class="about-image">
          </div>
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/common/AppHeader.vue'
import AppFooter from '@/components/common/AppFooter.vue'
import AppButton from '@/components/ui/AppButton.vue'
</script>

<style scoped>
.about-page {
  padding-top: 120px;
}

.about-main {
  padding: 80px 0 120px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.about-subtitle {
  font-size: 0.85rem;
  letter-spacing: 4px;
  color: var(--color-text-light);
  text-transform: uppercase;
}

.about-title {
  font-size: 4rem;
  line-height: 1.1;
  margin: 0;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-text-muted);
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.about-image-wrap {
  position: relative;
}

.about-image {
  width: 100%;
  height: auto;
  box-shadow: 20px 20px 0 var(--color-accent);
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  .about-title {
    font-size: 3rem;
  }
  .about-image-wrap {
    order: -1;
  }
}

@media (max-width: 600px) {
  .about-title {
    font-size: 2.5rem;
  }
  .about-main {
    padding: 40px 0 80px;
  }
}
</style>
