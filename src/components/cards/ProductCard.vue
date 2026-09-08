<template>
  <article class="product-card">
    <div class="product-card__image-wrap">
      <img :src="image" :alt="title" class="product-card__image">
      <div class="product-card__overlay">
        <AppButton 
          variant="primary" 
          class="product-card__add-btn"
          @click="handleAddToCart"
        >
          В КОРЗИНУ
        </AppButton>
      </div>
    </div>
    <div class="product-card__info">
      <h3 class="product-card__title">{{ title }}</h3>
      <p class="product-card__price">{{ formatPrice(price) }} руб.</p>
    </div>
  </article>
</template>

<script setup>
import AppButton from '@/components/ui/AppButton.vue'
import { useCart } from '@/composables/useCart'

const props = defineProps({
  id: {
    type: [Number, String],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})

const { addItem } = useCart()

const handleAddToCart = () => {
  addItem({
    id: props.id,
    title: props.title,
    price: props.price,
    image: props.image
  })
}

const formatPrice = (value) => {
  return new Intl.NumberFormat('ru-RU').format(value)
}
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.product-card__image-wrap {
  position: relative;
  aspect-ratio: 3/4;
  overflow: hidden;
  background-color: var(--color-accent);
}

.product-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.product-card:hover .product-card__image {
  transform: scale(1.05);
}

.product-card__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-card:hover .product-card__overlay {
  opacity: 1;
}

.product-card__info {
  text-align: center;
}

.product-card__title {
  font-size: 1rem;
  letter-spacing: 1px;
  margin-bottom: 8px;
  color: var(--color-text);
}

.product-card__price {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  font-family: var(--font-sans);
}

@media (max-width: 768px) {
  .product-card__title {
    font-size: 0.9rem;
  }
}
</style>
