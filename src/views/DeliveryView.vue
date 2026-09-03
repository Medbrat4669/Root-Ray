<template>
  <div class="delivery-page">
    <!-- Шапка (единая для всех страниц) -->
    <AppHeader />

    <!-- Основной блок Оплата и доставка -->
    <main class="delivery-page__main" role="main" aria-label="Страница оплаты и доставки">
      <div class="delivery-page__container">

        <div class="delivery-page__row">
          <h1 class="delivery-page__title">ОПЛАТА</h1>
          <div class="delivery-page__content">
            <p>Оплата товара производится банковской картой в нашей студии или при оформлении заказа через сайт. Также вы можете оплатить покупку электронными деньгами. Оплата наличными возможна через курьера при получении заказа или через администратора при самовывозе заказа из нашей студии по адресу: проезд Аэропорта, 8/4 (м. Сокол, 5 мин пешком). Также доступна безналичная оплата на расчетный счет юридического лица.</p>
          </div>
        </div>

        <div class="delivery-page__row">
          <h2 class="delivery-page__title">ДОСТАВКА</h2>
          <div class="delivery-page__content">
            <p>Оптимальный срок заказа — накануне нужной вам даты. Также возможна срочная доставка через 2 часа после оформления и подтверждения заказа. Единственный момент, который стоит учитывать при заказе срочной доставки: мы соберем вам букет или композицию из тех цветов, которые есть в наличии на момент вашего заказа.</p>
            <p>Курьерская доставка в пределах МКАД (Зона №1 «Москва») 400 руб. Курьерская доставка за МКАД (Зона №2 «Подмосковье») 800 руб. Курьерская доставка за МКАД (Зона №3 «Область») 1200 руб.</p>
          </div>
        </div>

      </div>
    </main>

    <!-- Социальный футер (единый для всех страниц) -->
    <section class="social-footer social-footer__flex" aria-label="Социальные сети и подвал">
      <div class="social-footer__container">

        <!-- Верхний заголовок соцсетей -->
        <div class="social-footer__header social-footer__header__flex">
          <span class="social-footer__title">МЫ В СОЦ. СЕТЯХ</span>
          <span class="social-footer__handle">@RootRay</span>
        </div>

        <!-- Средний блок: Контакты, Название, Рассылка, Соцсети -->
        <div class="social-footer__middle social-footer__middle__grid">
          <div class="social-footer__col social-footer__col__address">
            <p>Цветочная мастерская</p>
            <p>Проезд Пушкина,<br>дом 2, корпус 3,</p>
            <p>Москва</p>
          </div>

          <div class="social-footer__col social-footer__col__center">
            <h2 class="social-footer__brand-title">Root Ray</h2>
            <form class="social-footer__form social-footer__form__flex" @submit.prevent="handleSubscribe">
              <input type="email" placeholder="ЭЛ. ПОЧТА" required class="social-footer__form-input" v-model="email">
              <button type="submit" class="social-footer__form-btn">ПОДПИСАТЬСЯ</button>
            </form>
          </div>

          <div class="social-footer__col social-footer__col__links">
            <a href="#" class="social-footer__link">VKONTAKTE</a>
            <a href="#" class="social-footer__link">TELEGRAM</a>
            <a href="#" class="social-footer__link">PINTEREST</a>
          </div>
        </div>

        <!-- Нижняя копирайт-информация -->
        <div class="social-footer__bottom">
          <p>© 2026 Root Ray</p>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

const handleSubscribe = () => {
  // TODO: Интеграция с Supabase или email-сервисом
  alert(`Подписка для ${email.value}`)
  email.value = ''
}
</script>

<style scoped>
/* ===== Страница Оплата и доставка (Delivery) — Flexbox ===== */
.delivery-page {
  padding: 220px 20px 160px;
  background-color: var(--color-white, #ffffff);
  font-family: var(--font-serif, Georgia, serif);
  color: var(--color-text, #222222);
}

.delivery-page__main {
  display: flex;
  flex-direction: column;
  gap: var(--gap-hero, 40px);
}

.delivery-page__container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 80px;
}

.delivery-page__row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 60px;
}

.delivery-page__row:last-child {
  margin-bottom: 0;
}

.delivery-page__title {
  flex: 0 0 30%;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 400;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin: 0;
  line-height: 1.2;
  color: var(--color-text, #222222);
}

.delivery-page__content {
  flex: 0 0 60%;
}

.delivery-page__content p {
  font-size: 1rem;
  line-height: 1.8;
  margin: 0 0 24px 0;
  color: #444444;
}

.delivery-page__content p:last-child {
  margin-bottom: 0;
}

/* Адаптивность */
@media (max-width: 900px) {
  .delivery-page {
    padding: 160px 20px 100px;
  }

  .delivery-page__row {
    flex-direction: column;
    gap: 20px;
  }

  .delivery-page__title {
    flex: 0 0 auto;
    font-size: 1.8rem;
  }

  .delivery-page__content {
    flex: 0 0 auto;
    width: 100%;
  }

  .delivery-page__container {
    gap: 50px;
  }
}

@media (max-width: 600px) {
  .delivery-page {
    padding: 120px 16px 60px;
  }

  .delivery-page__title {
    font-size: 1.6rem;
  }

  .delivery-page__content p {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .delivery-page {
    padding: 100px 12px 40px;
  }

  .delivery-page__title {
    font-size: 1.4rem;
    letter-spacing: 2px;
  }

  .delivery-page__content p {
    font-size: 0.9rem;
    line-height: 1.6;
  }

  .delivery-page__container {
    gap: 40px;
  }
}

/* ===== Шапка (общая для всех страниц) ===== */
/* Эти стили должны быть в глобальном style.css, но для автономности продублирую здесь */
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

/* Адаптивность для футера */
@media (max-width: 900px) {
  .social-footer__middle {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .social-footer__form {
    max-width: 100%;
  }
}

@media (max-width: 600px) {
  .header {
    padding: 12px 16px;
    flex-wrap: wrap;
  }

  .nav {
    gap: 16px;
  }

  .nav__link {
    font-size: 0.7rem;
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
</style>