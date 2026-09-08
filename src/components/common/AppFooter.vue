<template>
  <footer class="footer" aria-label="Подвал сайта">
    <div class="container">
      <!-- Галерея (опционально) -->
      <div v-if="showGallery" class="footer__gallery">
        <div v-for="i in 5" :key="i" class="footer__gallery-item">
          <img :src="'/img/footer-' + i + '.jpg'" :alt="'Gallery image ' + i" loading="lazy">
        </div>
      </div>

      <div class="footer__main">
        <!-- Контакты -->
        <div class="footer__col">
          <p>Цветочная мастерская</p>
          <address class="footer__address">
            Проезд Пушкина, 2/3<br>
            Москва
          </address>
        </div>

        <!-- Центр: Лого и Подписка -->
        <div class="footer__col footer__col--center">
          <h2 class="footer__brand">Root Ray</h2>
          <form class="footer__subscribe" @submit.prevent="handleSubscribe">
            <input 
              v-model="email"
              type="email" 
              placeholder="ЭЛ. ПОЧТА" 
              required 
              class="footer__input"
            >
            <AppButton type="submit" variant="primary">ПОДПИСАТЬСЯ</AppButton>
          </form>
        </div>

        <!-- Соцсети -->
        <div class="footer__col footer__col--right">
          <nav class="footer__social" aria-label="Социальные сети">
            <a href="https://vk.com/rootray" target="_blank" rel="noopener noreferrer" class="footer__link">VKONTAKTE</a>
            <a href="https://t.me/rootray" target="_blank" rel="noopener noreferrer" class="footer__link">TELEGRAM</a>
            <a href="https://pinterest.com/rootray" target="_blank" rel="noopener noreferrer" class="footer__link">PINTEREST</a>
          </nav>
        </div>
      </div>

      <div class="footer__bottom">
        <p>&copy; {{ new Date().getFullYear() }} Root Ray. Все права защищены.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import AppButton from '@/components/ui/AppButton.vue'

defineProps({
  showGallery: {
    type: Boolean,
    default: false
  }
})

const email = ref('')

const handleSubscribe = () => {
  if (email.value) {
    console.log('Subscribing:', email.value)
    alert('Спасибо за подписку, ' + email.value + '!')
    email.value = ''
  }
}
</script>

<style scoped>
.footer {
  background-color: var(--color-accent);
  padding: 80px 0 40px;
  border-top: 1px solid var(--color-border);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer__gallery {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin-bottom: 80px;
}

.footer__gallery-item {
  aspect-ratio: 1;
  overflow: hidden;
}

.footer__gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.footer__gallery-item:hover img {
  transform: scale(1.1);
}

.footer__main {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 40px;
  align-items: flex-start;
  margin-bottom: 60px;
}

.footer__brand {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  letter-spacing: 6px;
  text-transform: uppercase;
  margin-bottom: 30px;
}

.footer__col--center {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer__col--right {
  display: flex;
  justify-content: flex-end;
}

.footer__address {
  font-style: normal;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-top: 10px;
}

.footer__subscribe {
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 450px;
}

.footer__input {
  flex: 1;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--color-text-light);
  padding: 10px 0;
  font-family: inherit;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.3s;
}

.footer__input:focus {
  border-bottom-color: var(--color-text);
}

.footer__social {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-end;
}

.footer__link {
  font-size: 0.75rem;
  letter-spacing: 2px;
  color: var(--color-text-muted);
  transition: var(--transition-base);
}

.footer__link:hover {
  color: var(--color-text);
}

.footer__bottom {
  text-align: center;
  padding-top: 40px;
  border-top: 1px solid rgba(0,0,0,0.05);
  font-size: 0.8rem;
  color: var(--color-text-light);
  letter-spacing: 1px;
}

@media (max-width: 900px) {
  .footer__main {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 50px;
  }
  .footer__col--right, .footer__social {
    justify-content: center;
    align-items: center;
  }
  .footer__gallery {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 600px) {
  .footer__gallery {
    grid-template-columns: repeat(2, 1fr);
  }
  .footer__brand {
    font-size: 1.8rem;
  }
  .footer__subscribe {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
