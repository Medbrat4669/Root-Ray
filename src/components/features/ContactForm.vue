<template>
  <form class="contact-form" @submit.prevent="handleSubmit">
    <div class="form-checkbox">
      <input type="checkbox" id="order-question" v-model="form.isOrderQuestion">
      <label for="order-question">Вопрос о заказе? *</label>
    </div>

    <div class="form-grid">
      <div class="form-group">
        <input type="text" placeholder="Имя *" required v-model="form.name">
      </div>
      <div class="form-group">
        <input type="email" placeholder="Эл. почта *" required v-model="form.email">
      </div>
      <div class="form-group">
        <input type="text" placeholder="Откуда вы?" v-model="form.origin">
      </div>
      <div class="form-group full-width">
        <textarea placeholder="Сообщение" v-model="form.message"></textarea>
      </div>
    </div>

    <div class="form-action">
      <AppButton type="submit" variant="primary">ОТПРАВИТЬ</AppButton>
    </div>
  </form>
</template>

<script setup>
import { reactive } from 'vue'
import AppButton from '@/components/ui/AppButton.vue'

const form = reactive({
  isOrderQuestion: false,
  name: '',
  email: '',
  origin: '',
  message: ''
})

const emit = defineEmits(['submit'])

const handleSubmit = () => {
  emit('submit', { ...form })
  // Очистка формы
  Object.assign(form, {
    isOrderQuestion: false,
    name: '',
    email: '',
    origin: '',
    message: ''
  })
}
</script>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.form-checkbox {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.9rem;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 16px 0;
  border: none;
  border-bottom: 1px solid #ddd;
  background: transparent;
  font-family: inherit;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  border-bottom-color: var(--color-text);
}

.form-group textarea {
  min-height: 120px;
  resize: vertical;
}

.form-action {
  margin-top: 20px;
}
</style>
