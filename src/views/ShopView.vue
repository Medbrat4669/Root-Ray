<template>
  <div class="shop-page">
    <AppHeader />

    <main class="shop-main">
      <div class="container">
        <h1 class="shop-title">Магазин</h1>

        <!-- Навигация по категориям -->
        <nav class="shop-nav" aria-label="Категории товаров">
          <button 
            v-for="category in categories" 
            :key="category"
            class="shop-nav__btn"
            :class="{ 'shop-nav__btn--active': activeCategory === category }"
            @click="activeCategory = category"
          >
            {{ category }}
          </button>
        </nav>

        <!-- Сетка товаров -->
        <div class="product-grid">
          <ProductCard 
            v-for="product in filteredProducts" 
            :key="product.id"
            v-bind="product"
          />
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import AppHeader from '@/components/common/AppHeader.vue'
import AppFooter from '@/components/common/AppFooter.vue'
import ProductCard from '@/components/cards/ProductCard.vue'

const activeCategory = ref('Все')

const categories = [
  'Все', 'Авторские', 'Минимализм', 'Монобукеты', 'В корзине', 'В коробке'
]

// Mock data (готов к подключению Supabase)
const products = ref([
  { id: 1, title: 'Рассвет в лесу', price: 3000, image: '/img/car.jpg', category: 'Авторские' },
  { id: 2, title: 'Пастельные тона', price: 2700, image: '/img/flower-mini.jpg', category: 'Минимализм' },
  { id: 3, title: 'Тот самый день', price: 4300, image: '/img/wedding-bouquet.jpg', category: 'Монобукеты' },
  { id: 4, title: 'Теплая осень', price: 2300, image: '/img/flower-basket.jpg', category: 'В корзине' },
  { id: 5, title: 'Нежность', price: 3500, image: '/img/flower-mini.jpg', category: 'Минимализм' },
  { id: 6, title: 'Лесная сказка', price: 3200, image: '/img/flower-basket.jpg', category: 'В коробке' },
])

const filteredProducts = computed(() => {
  if (activeCategory.value === 'Все') return products.value
  return products.value.filter(p => p.category === activeCategory.value)
})
</script>

<style scoped>
.shop-page {
  padding-top: 120px;
}

.shop-main {
  padding: 60px 0 100px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.shop-title {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 40px;
  letter-spacing: 4px;
  text-transform: uppercase;
}

.shop-nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px 40px;
  margin-bottom: 60px;
}

.shop-nav__btn {
  background: none;
  border: none;
  font-size: 0.85rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  color: var(--color-text-light);
  transition: var(--transition-base);
  padding-bottom: 4px;
  border-bottom: 1px solid transparent;
}

.shop-nav__btn:hover {
  color: var(--color-text);
}

.shop-nav__btn--active {
  color: var(--color-text);
  border-bottom-color: var(--color-text);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px 40px;
}

@media (max-width: 900px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
  .shop-title {
    font-size: 2rem;
  }
  .shop-nav {
    gap: 15px 25px;
  }
}
</style>
