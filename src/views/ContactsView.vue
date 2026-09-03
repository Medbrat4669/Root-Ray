<template>
  <div class="contacts">
    <!-- Шапка (единая для всех страниц) -->
    <AppHeader />

    <!-- Основной блок контактов -->
    <main class="contacts__main" role="main" aria-label="Страница контактов">
      <div class="contacts__container">

        <!-- Левая колонка -->
        <div class="contacts__info">
          <h1>КОНТАКТЫ</h1>
          <p class="contacts__description">
            Мы всегда открыты к новым предложениям, сотрудничеству и конструктивной критике.
            Не стесняйтесь и пишите нам, мы очень дорожим обратной связью от клиентов.
          </p>

          <div class="contacts__details">
            <div class="contacts__item">
              <span class="contacts__label">ЭЛЕКТРОННАЯ ПОЧТА</span>
              <a href="mailto:hello@rootray.com" class="contacts__value">hello@rootray.com</a>
            </div>
            <div class="contacts__item">
              <span class="contacts__label">АДРЕС</span>
              <p class="contacts__value">
                Проезд Аэропорта, 8/4<br>
                Москва
              </p>
            </div>
          </div>
        </div>

        <!-- Правая колонка — форма -->
        <div class="contacts__form">
          <form @submit.prevent="handleSubmit">

            <div class="contacts__checkbox-row">
              <input type="checkbox" id="order-question" name="order-question" v-model="isOrderQuestion">
              <label for="order-question">Вопрос о заказе? *</label>
            </div>

            <div class="contacts__form-grid">
              <div class="contacts__input-fields">
                <div class="contacts__form-group">
                  <label for="name" class="visually-hidden">Имя *</label>
                  <input type="text" id="name" name="name" placeholder="Имя *" required v-model="form.name">
                </div>
                <div class="contacts__form-group">
                  <label for="email" class="visually-hidden">Эл. почта *</label>
                  <input type="email" id="email" name="email" placeholder="Эл. почта *" required v-model="form.email">
                </div>
                <div class="contacts__form-group">
                  <label for="origin" class="visually-hidden">Откуда вы?</label>
                  <input type="text" id="origin" name="origin" placeholder="Откуда вы?" v-model="form.origin">
                </div>
              </div>

              <div class="contacts__textarea-field">
                <div class="contacts__form-group">
                  <label for="message" class="visually-hidden">Сообщение</label>
                  <textarea id="message" name="message" placeholder="Сообщение" v-model="form.message"></textarea>
                </div>
              </div>
            </div>

            <div class="contacts__form-action">
              <button type="submit" class="contacts__submit-btn">ОТПРАВИТЬ</button>
            </div>
          </form>
        </div>

      </div>
    </main>

    <!-- Социальный футер (единый для всех страниц) -->
    <AppFooter />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

const email = ref('')
const isOrderQuestion = ref(false)

const form = reactive({
  name: '',
  email: '',
  origin: '',
  message: ''
})

const handleSubscribe = () => {
  // TODO: Интеграция с Supabase или email-сервисом
  alert(`Подписка для ${email.value}`)
  email.value = ''
}

const handleSubmit = () => {
  // TODO: Отправка формы через Supabase или API
  console.log('Форма отправлена:', {
    ...form,
    isOrderQuestion: isOrderQuestion.value
  })
  alert('Сообщение отправлено!')
  // Очистка формы
  form.name = ''
  form.email = ''
  form.origin = ''
  form.message = ''
  isOrderQuestion.value = false
}
</script>

<style scoped>
/* ===== Страница Контакты (Contacts) — Flexbox ===== */
.contacts {
  padding: 220px 20px 160px;
  background-color: var(--color-white, #ffffff);
  font-family: var(--font-serif, Georgia, serif);
  color: var(--color-text, #222222);
}

.contacts__main {
  display: flex;
  flex-direction: column;
  gap: var(--gap-hero, 40px);
}

.contacts__container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  align-items: stretch;
}

.contacts__info,
.contacts__form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.contacts__form {
  padding-top: 100px;
}

/* Левая колонка */
.contacts__info h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 400;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 24px;
  color: var(--color-text, #222222);
}

.contacts__description {
  font-size: 1rem;
  line-height: 1.8;
  color: #444444;
  margin-bottom: 40px;
  max-width: 440px;
}

.contacts__details {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.contacts__item {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.contacts__label {
  font-family: var(--font-sans, Arial, sans-serif);
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #888888;
}

.contacts__value {
  font-size: 1.1rem;
  color: var(--color-text, #222222);
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.contacts__value:hover {
  opacity: 0.7;
}

/* Правая колонка — форма */
.contacts__form form {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
}

.contacts__checkbox-row {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-sans, Arial, sans-serif);
  font-size: 11px;
  letter-spacing: 1px;
  color: #555555;
}

.contacts__checkbox-row input[type="checkbox"] {
  width: 16px;
  height: 16px;
  accent-color: var(--color-black, #000000);
  cursor: pointer;
}

.contacts__form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;
}

.contacts__input-fields {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contacts__form-group input,
.contacts__form-group textarea {
  width: 100%;
  padding: 14px 16px;
  border: none;
  background-color: #f5f5f5;
  font-family: var(--font-sans, Arial, sans-serif);
  font-size: 11px;
  letter-spacing: 1px;
  color: var(--color-text, #222222);
  outline: none;
  transition: box-shadow 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
}

.contacts__form-group input:focus,
.contacts__form-group textarea:focus {
  box-shadow: 0 0 0 2px var(--color-black, #000000);
}

.contacts__form-group textarea {
  height: 100%;
  min-height: 140px;
  resize: vertical;
}

.contacts__form-action {
  display: flex;
  justify-content: flex-end;
}

.contacts__submit-btn {
  padding: 14px 40px;
  background-color: var(--color-black, #000000);
  color: var(--color-white, #ffffff);
  border: none;
  font-family: var(--font-sans, Arial, sans-serif);
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease, opacity 0.2s ease;
}

.contacts__submit-btn:hover {
  background-color: #333333;
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
  .contacts__container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contacts__description {
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
  .contacts {
    padding: 120px 16px 60px;
  }

  .contacts__form-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .contacts__form-group textarea {
    min-height: 120px;
  }

  .contacts__form-action {
    justify-content: stretch;
  }

  .contacts__submit-btn {
    width: 100%;
    justify-content: center;
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
  .contacts {
    padding: 100px 12px 40px;
  }

  .contacts__info h1 {
    font-size: 1.8rem;
  }

  .contacts__form-group input,
  .contacts__form-group textarea {
    padding: 12px 14px;
    font-size: 10px;
  }

  .contacts__submit-btn {
    padding: 12px 20px;
    font-size: 9px;
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