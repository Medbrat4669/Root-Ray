<template>
  <section class="categories" aria-label="Категории букетов">
    <div class="categories__container">
      <h2 class="visually-hidden">Категории букетов</h2>
      <div class="categories__grid">
        <CategoryCard
          v-for="category in categories"
          :key="category.title"
          v-bind="category"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import CategoryCard from '@/components/cards/CategoryCard.vue'

const categories = [
  {
    title: 'СВАДЕБНЫЕ',
    image: '/img/wedding-bouquet.jpg',
    price: 3000,
    link: '/shop'
  },
  {
    title: 'МИНИ',
    image: '/img/flower-mini.jpg',
    price: 2000,
    link: '/shop'
  },
  {
    title: 'КОРЗИНКИ',
    image: '/img/flower-basket.jpg',
    price: 2500,
    link: '/shop'
  }
]
</script>

<style scoped>
.categories {
  padding: var(--section-padding);
}

.categories__container {
  max-width: 1200px;
  margin: 0 auto;
}

.categories__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

@media (max-width: 900px) {
  .categories__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .categories__grid {
    grid-template-columns: 1fr;
  }
  .categories {
    padding: var(--section-padding-mobile);
  }
}
</style>
