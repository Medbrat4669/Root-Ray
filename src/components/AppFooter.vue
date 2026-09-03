<template>
  <section class="social-footer social-footer__flex" aria-label="Социальные сети и подвал">
    <div class="social-footer__container">

      <!-- Верхний заголовок соцсетей -->
      <div class="social-footer__header social-footer__header__flex">
        <span class="social-footer__title">МЫ В СОЦ. СЕТЯХ</span>
        <span class="social-footer__handle">@RootRay</span>
      </div>

      <!-- Галерея из 5 изображений (только для главной страницы) -->
      <div v-if="showGallery" class="social-footer__gallery social-footer__gallery__grid">
        <div class="social-footer__gallery-item"><img src="/img/footer-1.jpg" alt="Цветы 1" class="social-footer__gallery-image"></div>
        <div class="social-footer__gallery-item"><img src="/img/footer-2.jpg" alt="Цветы 2" class="social-footer__gallery-image"></div>
        <div class="social-footer__gallery-item"><img src="/img/footer-3.jpg" alt="Цветы 3" class="social-footer__gallery-image"></div>
        <div class="social-footer__gallery-item"><img src="/img/footer-4.jpg" alt="Цветы 4" class="social-footer__gallery-image"></div>
        <div class="social-footer__gallery-item"><img src="/img/footer-5.jpg" alt="Цветы 5" class="social-footer__gallery-image"></div>
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
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  showGallery: {
    type: Boolean,
    default: false
  }
})

const email = ref('')

const handleSubscribe = () => {
  // TODO: Интеграция с Supabase или email-сервисом
  alert(`Подписка для ${email.value}`)
  email.value = ''
}
</script>

<style scoped>
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

@media (max-width: 900px) {
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
}

@media (max-width: 600px) {
  .social-footer {
    padding: 40px 16px 30px;
  }

  .social-footer__gallery {
    grid-template-columns: repeat(2, 1fr);
  }

  .social-footer__form {
    flex-direction: column;
  }
}
</style>