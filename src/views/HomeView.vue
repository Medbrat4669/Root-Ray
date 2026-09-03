<template>
  <div class="home-page">
    <!-- Шапка (единая для всех страниц) -->
    <AppHeader />

    <!-- Основной блок (hero) -->
    <main class="hero hero__flex" role="main" aria-label="Главный баннер">
      <div class="hero__content hero__content__flex">
        <span class="hero__subtitle">АВТОРСКИЕ БУКЕТЫ</span>
        <h1 class="hero__title">Цветочная студия</h1>
        <router-link to="/shop" class="hero__btn hero__btn__primary" aria-label="Перейти к выбору букетов">ВЫБРАТЬ БУКЕТ</router-link>
      </div>

      <div class="hero__scroll hero__scroll__absolute" aria-hidden="true">
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true"><path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
      </div>
    </main>

    <!-- Секция категорий -->
    <section class="categories categories__flex" aria-label="Категории букетов">
      <div class="categories__container">
        <h2 class="categories__title visually-hidden">Категории букетов</h2>
        <div class="categories__grid">
          
          <!-- Карточка 1 -->
          <article class="categories__card">
            <h3 class="categories__card-title">СВАДЕБНЫЕ</h3>
            <div class="categories__card-image-wrapper">
              <img src="/img/wedding-bouquet.jpg" alt="Свадебные букеты" class="categories__card-image">
              <span class="categories__card-price">ОТ 3000 РУБ</span>
            </div>
            <router-link to="/shop" class="categories__card-btn">ВЫБРАТЬ <span class="categories__card-arrow" aria-hidden="true">&rarr;</span></router-link>
          </article>

          <!-- Карточка 2 -->
          <article class="categories__card">
            <h3 class="categories__card-title">МИНИ</h3>
            <div class="categories__card-image-wrapper">
              <img src="/img/flower-mini.jpg" alt="Мини букеты" class="categories__card-image">
              <span class="categories__card-price">ОТ 2000 РУБ</span>
            </div>
            <router-link to="/shop" class="categories__card-btn">ВЫБРАТЬ <span class="categories__card-arrow" aria-hidden="true">&rarr;</span></router-link>
          </article>

          <!-- Карточка 3 -->
          <article class="categories__card">
            <h3 class="categories__card-title">КОРЗИНКИ</h3>
            <div class="categories__card-image-wrapper">
              <img src="/img/flower-basket.jpg" alt="Букеты в корзинках" class="categories__card-image">
              <span class="categories__card-price">ОТ 2500 РУБ</span>
            </div>
            <router-link to="/shop" class="categories__card-btn">ВЫБРАТЬ <span class="categories__card-arrow" aria-hidden="true">&rarr;</span></router-link>
          </article>

        </div>
      </div>
    </section>

    <!-- Секция философии -->
    <section class="philosophy philosophy__flex" aria-label="Философия студии">
      <span class="philosophy__subtitle">ФИЛОСОФИЯ</span>
      <h2 class="philosophy__title">
        Эстетика<br>
        момента, стиль<br>
        и эмоции
      </h2>
      <p class="philosophy__text">
        Сохраняю не только то, как это выглядело, но и то, как это ощущалось.
      </p>
      <router-link to="/about" class="philosophy__btn" aria-label="Перейти в портфолио">ПОРТФОЛИО</router-link>
    </section>

    <!-- Секция О нас -->
    <section class="about about__flex" aria-label="О студии">
      <div class="about__overlay"></div>
      <div class="about__content about__content__flex">
        <h2 class="about__title">ПРИСТАНЬ ДЛЯ ДУШИ</h2>
        <p class="about__text">
          В студии мы проводим мастер-классы, учим работать на гончарном круге и расписывать готовые
          изделия. Для того, чтобы создать свое уникальное изделие, не нужно обладать специальными
          навыками — каждый участник мастер-класса создает свою уникальную кружку или тарелку.
        </p>
        <router-link to="/about" class="about__btn" aria-label="Подробнее о студии">ПОДРОБНЕЕ О СТУДИИ</router-link>
      </div>
    </section>

    <!-- Секция галереи -->
    <section class="gallery gallery__flex" aria-label="Галерея работ">
      <div class="gallery__container gallery__container__flex">
        <div class="gallery__item">
          <img src="/img/Marriage-registry.jpg" alt="Интерьер с платьем" class="gallery__image">
        </div>
        <div class="gallery__item">
          <img src="/img/car.jpg" alt="Вид сверху на лабиринт" class="gallery__image">
        </div>
        <div class="gallery__item">
          <img src="/img/girl.jpg" alt="Портрет невесты" class="gallery__image">
        </div>
      </div>
    </section>

    <!-- Социальный футер -->
    <AppFooter :showGallery="true" />
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
/* ===== Герой-секция (Hero) ===== */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px 20px 60px;
  background: url('/img/header-background.jpeg') center/cover no-repeat;
  background-attachment: fixed;
  text-align: center;
  color: #fff;
}

.hero__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  max-width: 800px;
}

.hero__subtitle {
  font-size: 0.85rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  opacity: 0.8;
}

.hero__title {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 400;
  letter-spacing: 6px;
  text-transform: uppercase;
  margin: 0;
  line-height: 1.1;
}

.hero__btn {
  display: inline-block;
  padding: 16px 40px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: #fff;
  font-size: 0.8rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.4s;
  cursor: pointer;
}

.hero__btn:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: #fff;
}

.hero__scroll {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
  width: 32px;
  height: 32px;
}

.hero__scroll svg {
  width: 100%;
  height: 100%;
  color: #fff;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-10px); }
}

/* ===== Секция категорий ===== */
.categories {
  padding: 80px 20px;
  background-color: #faf8f5;
}

.categories__container {
  max-width: 1200px;
  margin: 0 auto;
}

.categories__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.categories__card {
  background: #fff;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s;
}

.categories__card:hover {
  transform: translateY(-4px);
}

.categories__card-title {
  font-size: 0.85rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 400;
  margin: 0 0 16px 0;
  color: #222;
}

.categories__card-image-wrapper {
  position: relative;
  overflow: hidden;
  margin-bottom: 16px;
}

.categories__card-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
}

.categories__card-price {
  position: absolute;
  bottom: 16px;
  right: 16px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 6px 14px;
  font-size: 0.7rem;
  letter-spacing: 1px;
}

.categories__card-btn {
  display: inline-block;
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  color: #222;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s;
}

.categories__card-btn:hover {
  border-color: #222;
}

.categories__card-arrow {
  display: inline-block;
  transition: transform 0.3s;
}

.categories__card-btn:hover .categories__card-arrow {
  transform: translateX(4px);
}

/* ===== Секция философии ===== */
.philosophy {
  padding: 100px 20px;
  background-color: #fff;
  text-align: center;
}

.philosophy__subtitle {
  font-size: 0.8rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #999;
}

.philosophy__title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 400;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin: 20px 0 30px;
  line-height: 1.2;
  color: #222;
}

.philosophy__text {
  max-width: 600px;
  margin: 0 auto 40px;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
}

.philosophy__btn {
  display: inline-block;
  padding: 14px 36px;
  border: 1px solid #222;
  background: transparent;
  color: #222;
  font-size: 0.8rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.4s;
}

.philosophy__btn:hover {
  background: #222;
  color: #fff;
}

/* ===== Секция О нас ===== */
.about {
  position: relative;
  padding: 120px 20px;
  background: url('/img/about.jpg') center/cover no-repeat;
  background-attachment: fixed;
  color: #fff;
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
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.about__title {
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 400;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 30px;
}

.about__text {
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 40px;
  opacity: 0.9;
}

.about__btn {
  display: inline-block;
  padding: 14px 36px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: transparent;
  color: #fff;
  font-size: 0.8rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.4s;
}

.about__btn:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: #fff;
}

/* ===== Секция галереи ===== */
.gallery {
  padding: 80px 20px;
  background-color: #faf8f5;
}

.gallery__container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.gallery__item {
  overflow: hidden;
}

.gallery__image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
  transition: transform 0.5s;
}

.gallery__image:hover {
  transform: scale(1.03);
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

/* ===== Социальный футер ===== */
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
  margin-bottom: 30px;
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

.social-footer__gallery {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin-bottom: 40px;
}

.social-footer__gallery-item {
  overflow: hidden;
}

.social-footer__gallery-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s;
}

.social-footer__gallery-image:hover {
  transform: scale(1.05);
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

/* ===== Адаптивность ===== */
@media (max-width: 900px) {
  .categories__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .gallery__container {
    grid-template-columns: repeat(2, 1fr);
  }

  .social-footer__gallery {
    grid-template-columns: repeat(3, 1fr);
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

  .philosophy {
    padding: 60px 20px;
  }

  .about {
    padding: 80px 20px;
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

  .categories__grid {
    grid-template-columns: 1fr;
  }

  .gallery__container {
    grid-template-columns: 1fr;
  }

  .gallery__image {
    height: 300px;
  }

  .social-footer__gallery {
    grid-template-columns: repeat(2, 1fr);
  }

  .social-footer__form {
    flex-direction: column;
  }

  .hero {
    padding: 100px 16px 40px;
    min-height: 80vh;
  }

  .hero__title {
    font-size: 2.5rem;
  }

  .philosophy__title {
    font-size: 2rem;
  }

  .about__title {
    font-size: 1.8rem;
  }

  .social-footer {
    padding: 40px 16px 30px;
  }
}

/* ===== Утилита ===== */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>