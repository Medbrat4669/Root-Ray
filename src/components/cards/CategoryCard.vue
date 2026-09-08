<template>
  <article class="category-card">
    <h3 class="category-card__title">{{ title }}</h3>
    <div class="category-card__image-wrapper">
      <img :src="image" :alt="title" class="category-card__image">
      <span class="category-card__price">ОТ {{ price }} РУБ</span>
    </div>
    <router-link :to="link" class="category-card__btn">
      ВЫБРАТЬ <span class="category-card__arrow" aria-hidden="true">&rarr;</span>
    </router-link>
  </article>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: [String, Number],
    required: true
  },
  link: {
    type: String,
    default: '/shop'
  }
})
</script>

<style scoped>
.category-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.category-card__title {
  font-size: 1.1rem;
  letter-spacing: 4px;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.category-card__image-wrapper {
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  overflow: hidden;
}

.category-card__image {
  width: 100%;
  height: 450px;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.category-card:hover .category-card__image {
  transform: scale(1.03);
}

.category-card__price {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.9);
  padding: 8px 12px;
  font-size: 0.75rem;
  letter-spacing: 1px;
}

.category-card__btn {
  font-size: 0.8rem;
  letter-spacing: 2px;
  text-decoration: none;
  color: var(--color-text);
  display: flex;
  align-items: center;
  gap: 8px;
  transition: opacity 0.3s;
}

.category-card__btn:hover {
  opacity: 0.6;
}

@media (max-width: 600px) {
  .category-card__image {
    height: 350px;
  }
}
</style>
