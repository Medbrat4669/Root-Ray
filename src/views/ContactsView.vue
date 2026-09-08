<template>
  <div class="contacts-page">
    <AppHeader />

    <main class="contacts-main">
      <div class="container">
        <div class="contacts-grid">
          <!-- Левая колонка: Информация -->
          <div class="contacts-info">
            <h1 class="contacts-title">КОНТАКТЫ</h1>
            <p class="contacts-description">
              Мы всегда открыты к новым предложениям, сотрудничеству и конструктивной критике.
              Не стесняйтесь и пишите нам, мы очень дорожим обратной связью от клиентов.
            </p>

            <div class="contacts-details">
              <div class="contacts-item">
                <span class="contacts-label">ЭЛЕКТРОННАЯ ПОЧТА</span>
                <a href="mailto:hello@rootray.com" class="contacts-link">hello@rootray.com</a>
              </div>
              <div class="contacts-item">
                <span class="contacts-label">АДРЕС</span>
                <address class="contacts-address">
                  Проезд Аэропорта, 8/4<br>
                  Москва
                </address>
              </div>
            </div>
          </div>

          <!-- Правая колонка: Форма -->
          <div class="contacts-form-wrap">
            <ContactForm @submit="handleFormSubmit" />
          </div>
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/common/AppHeader.vue'
import AppFooter from '@/components/common/AppFooter.vue'
import ContactForm from '@/components/features/ContactForm.vue'

const handleFormSubmit = (formData) => {
  // Логика отправки данных (будет интегрирована с Supabase)
  console.log('Received form data:', formData)
  alert('Спасибо за сообщение! Мы свяжемся с вами в ближайшее время.')
}
</script>

<style scoped>
.contacts-page {
  padding-top: 120px;
}

.contacts-main {
  padding: 80px 0 120px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.contacts-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 100px;
}

.contacts-title {
  font-size: 3rem;
  letter-spacing: 4px;
  margin-bottom: 30px;
}

.contacts-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-text-muted);
  margin-bottom: 50px;
  max-width: 450px;
}

.contacts-details {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.contacts-label {
  display: block;
  font-size: 0.75rem;
  letter-spacing: 2px;
  color: var(--color-text-light);
  margin-bottom: 12px;
}

.contacts-link, .contacts-address {
  font-size: 1.2rem;
  font-style: normal;
  color: var(--color-text);
  transition: var(--transition-base);
}

.contacts-link:hover {
  opacity: 0.6;
}

@media (max-width: 900px) {
  .contacts-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  .contacts-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 600px) {
  .contacts-main {
    padding: 40px 0 80px;
  }
}
</style>
