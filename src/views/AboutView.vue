<template>
  <div class="about-page">
    <!-- Шапка (единая для всех страниц) -->
    <AppHeader />

    <!-- Основной блок "О нас" -->
    <main class="about-page__main" role="main" aria-label="Страница о студии">
      <div class="about-page__container">

        <!-- Текстовая часть -->
        <div class="about-page__content">
          <span class="about-page__subtitle">О СТУДИИ</span>
          <h1 class="about-page__title">Мы — Root Ray</h1>
          <p class="about-page__text">
            Мы влюблены в то, что мы делаем. Флористика для нас — больше, чем профессия.
            Это дело, которому мы отдаём себя целиком и которое никогда не надоест.
            Каждый букет — это история, которую мы рассказываем с помощью цветов.
          </p>
        </div>

        <!-- Изображение -->
        <div class="about-page__image-wrapper">
          <img src="/img/about.jpg" alt="Команда Root Ray" class="about-page__image">
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
/* ===== Страница О нас (About) — Grid ===== */
.about-page {
  padding: 220px 20px 160px;
  background-color: var(--color-white, #ffffff);
  font-family: var(--font-serif, Georgia, serif);
  color: var(--color-text, #222222);
}

.about-page__main {
  display: flex;
  flex-direction: column;
  gap: var(--gap-hero, 40px);
}

.about-page__container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.about-page__content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.about-page__subtitle {
  font-family: var(--font-sans, Arial, sans-serif);
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #888888;
}

.about-page__title {
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  font-weight: 400;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--color-text, #222222);
  margin: 0;
}

.about-page__text {
  font-size: 1rem;
  line-height: 1.8;
  color: #444444;
  max-width: 480px;
}

.about-page__image-wrapper {
  position: relative;
  width: 100%;
}

.about-page__image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
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
  .about-page__container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-page__text {
    max-width: 100%;
  }

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

@media (max-width: 600px) {
  .about-page {
    padding: 120px 16px 60px;
  }

  .about-page__title {
    font-size: 1.8rem;
  }

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
  .about-page {
    padding: 100px 12px 40px;
  }

  .about-page__title {
    font-size: 1.6rem;
  }
}
</style>