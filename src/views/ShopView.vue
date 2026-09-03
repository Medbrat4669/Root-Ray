<template>
  <div class="shop-page">
    <!-- Шапка (единая для всех страниц) -->
    <AppHeader />

    <!-- Основной блок магазина -->
    <main class="shop-page__main" role="main" aria-label="Страница магазина">
      <div class="shop-page__container">

        <!-- Навигация по категориям -->
        <nav class="shop-nav" aria-label="Категории товаров">
          <a href="#" class="shop-nav__link shop-nav__link--active">Все</a>
          <a href="#" class="shop-nav__link">Авторские</a>
          <a href="#" class="shop-nav__link">Минимализм</a>
          <a href="#" class="shop-nav__link">Монобукеты</a>
          <a href="#" class="shop-nav__link">В корзине</a>
          <a href="#" class="shop-nav__link">В коробке</a>
        </nav>

        <!-- Сетка товаров -->
        <div class="product-grid">
          <article class="product-card">
            <div class="product-card__image-wrap">
              <img src="/img/shop-1.jpg" alt="Рассвет в лесу" class="product-card__image">
            </div>
            <h3 class="product-card__title">Рассвет в лесу</h3>
            <p class="product-card__price">3 000 руб.</p>
          </article>

          <article class="product-card">
            <div class="product-card__image-wrap">
              <img src="/img/shop-2.jpg" alt="Пастельные тона" class="product-card__image">
            </div>
            <h3 class="product-card__title">Пастельные тона</h3>
            <p class="product-card__price">2 700 руб.</p>
          </article>

          <article class="product-card">
            <div class="product-card__image-wrap">
              <img src="/img/shop-3.jpg" alt="Тот самый день" class="product-card__image">
            </div>
            <h3 class="product-card__title">Тот самый день</h3>
            <p class="product-card__price">4 300 руб.</p>
          </article>

          <article class="product-card">
            <div class="product-card__image-wrap">
              <img src="/img/shop-4.jpg" alt="Теплая осень" class="product-card__image">
            </div>
            <h3 class="product-card__title">Теплая осень</h3>
            <p class="product-card__price">2 300 руб.</p>
          </article>
        </div>

      </div>
    </main>

    <!-- Социальный футер (единый для всех страниц) -->
    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

const email = ref('')

const handleSubscribe = () => {
  // TODO: Интеграция с Supabase или email-сервисом
  alert(`Подписка для ${email.value}`)
  email.value = ''
}
</script>

<style scoped>
/* ===== Страница Магазина (Shop) — Flexbox ===== */
.shop-page {
  padding: 180px 20px 120px;
  background-color: var(--color-white, #ffffff);
  font-family: var(--font-serif, Georgia, serif);
  color: var(--color-text, #222222);
}

.shop-page__container {
  max-width: 1200px;
  margin: 0 auto;
}

.shop-page__title {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 400;
  letter-spacing: 4px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 20px;
  color: var(--color-text, #222222);
}

/* Категории товаров */
.shop-nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px 32px;
  margin-bottom: 40px;
}

.shop-nav__link {
  font-family: var(--font-sans, Arial, sans-serif);
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #888;
  text-decoration: none;
  transition: color 0.2s ease;
  padding-bottom: 4px;
  border-bottom: 1px solid transparent;
}

.shop-nav__link:hover {
  color: var(--color-text, #222222);
}

.shop-nav__link--active {
  color: var(--color-text, #222222);
  border-bottom-color: var(--color-text, #222222);
}

/* Хлебные крошки */
.breadcrumbs {
  font-family: var(--font-sans, Arial, sans-serif);
  font-size: 12px;
  color: #aaa;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 40px;
  text-align: center;
}

.breadcrumbs__item {
  color: #aaa;
  text-decoration: none;
  transition: color 0.2s ease;
}

.breadcrumbs__item:hover {
  color: var(--color-text, #222222);
}

.breadcrumbs__item--active {
  color: var(--color-text, #222222);
}

.breadcrumbs__separator {
  margin: 0 8px;
}

/* Сетка товаров */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 40px 30px;
}

.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.product-card__image-wrap {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  margin-bottom: 18px;
  background-color: #f0eee8;
}

.product-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.product-card__image:hover {
  transform: scale(1.04);
}

.product-card__title {
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1px;
  margin: 0 0 6px 0;
  color: var(--color-text, #222222);
}

.product-card__price {
  font-size: 14px;
  color: #666;
  font-family: var(--font-sans, Arial, sans-serif);
  letter-spacing: 1px;
  margin: 0;
}

/* ===== Шапка (общая для всех страниц) ===== */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.header__logo {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.8rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-text, #222222);
}

.nav {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav__link {
  font-size: 0.85rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-text, #222222);
  transition: opacity 0.3s;
}

.nav__link:hover {
  opacity: 0.6;
}

.nav__icon-link {
  display: flex;
  align-items: center;
  color: var(--color-text, #222222);
  text-decoration: none;
}

.nav__icon {
  width: 24px;
  height: 24px;
}

/* ===== Социальный футер (общий для всех страниц) ===== */
.social-footer {
  padding: 60px 20px 40px;
  background-color: #faf8f5;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.social-footer__container {
  max-width: 1200px;
  margin: 0 auto;
}

.social-footer__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  margin-bottom: 40px;
}

.social-footer__title {
  font-size: 0.85rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #666;
}

.social-footer__handle {
  font-size: 1.2rem;
  letter-spacing: 2px;
  color: var(--color-text, #222222);
}

.social-footer__middle {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.social-footer__col p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #666;
  margin: 0 0 8px 0;
}

.social-footer__brand-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 2.5rem;
  font-weight: 400;
  letter-spacing: 6px;
  text-transform: uppercase;
  margin: 0 0 20px 0;
  color: var(--color-text, #222222);
}

.social-footer__form {
  display: flex;
  gap: 12px;
  max-width: 400px;
}

.social-footer__form-input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #ddd;
  background: transparent;
  font-size: 0.85rem;
  letter-spacing: 1px;
  outline: none;
  transition: border-color 0.3s;
}

.social-footer__form-input:focus {
  border-color: var(--color-text, #222222);
}

.social-footer__form-btn {
  padding: 12px 24px;
  background: var(--color-text, #222222);
  color: #fff;
  border: none;
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity 0.3s;
}

.social-footer__form-btn:hover {
  opacity: 0.8;
}

.social-footer__col__links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.social-footer__link {
  font-size: 0.85rem;
  letter-spacing: 2px;
  text-decoration: none;
  color: #666;
  transition: color 0.3s;
}

.social-footer__link:hover {
  color: var(--color-text, #222222);
}

.social-footer__bottom {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.social-footer__bottom p {
  font-size: 0.8rem;
  color: #999;
  letter-spacing: 1px;
  margin: 0;
}

/* Адаптивность */
@media (max-width: 900px) {
  .social-footer__middle {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .social-footer__form {
    max-width: 100%;
  }

  .header {
    padding: 16px 24px;
  }

  .nav {
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .shop-page {
    padding: 140px 16px 80px;
  }

  .shop-nav {
    gap: 14px 20px;
  }

  .shop-nav__link {
    font-size: 10px;
  }

  .product-grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 24px 16px;
  }

  .product-card__title {
    font-size: 14px;
  }

  .product-card__price {
    font-size: 13px;
  }
}

@media (max-width: 600px) {
  .header {
    padding: 12px 16px;
    flex-wrap: wrap;
  }

  .nav {
    gap: 12px;
  }

  .nav__link {
    font-size: 0.65rem;
  }

  .header__logo {
    font-size: 1.2rem;
  }

  .social-footer {
    padding: 40px 16px 30px;
  }

  .social-footer__form {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .shop-page {
    padding: 120px 12px 60px;
  }

  .shop-nav {
    gap: 10px 14px;
  }

  .shop-nav__link {
    font-size: 9px;
    letter-spacing: 1px;
  }

  .breadcrumbs {
    font-size: 10px;
  }

  .product-grid {
    grid-template-columns: 1fr 1fr;
    gap: 20px 12px;
  }

  .product-card__title {
    font-size: 13px;
  }

  .product-card__price {
    font-size: 12px;
  }
}
</style>