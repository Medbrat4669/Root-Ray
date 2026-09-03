<template>
  <header class="header header__flex" role="banner" aria-label="Основная навигация">
    <nav class="nav nav__flex nav__left" aria-label="Левое меню">
      <a href="#" class="nav__icon-link" aria-label="Поиск">
        <svg class="nav__icon" viewBox="0 0 24 24" role="img" aria-hidden="true"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
      </a>
      <router-link to="/shop" class="nav__link">МАГАЗИН</router-link>
      <router-link to="/about" class="nav__link">О НАС</router-link>
    </nav>

    <router-link to="/" class="header__logo">Root Ray</router-link>

    <nav class="nav nav__flex nav__right" aria-label="Правое меню">
      <router-link to="/delivery" class="nav__link">ДОСТАВКА</router-link>
      <router-link to="/contacts" class="nav__link">КОНТАКТЫ</router-link>
      <a href="#" class="nav__icon-link" aria-label="Корзина">
        <svg class="nav__icon" viewBox="0 0 24 24" role="img" aria-hidden="true"><path fill="currentColor" d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z"/></svg>
      </a>
    </nav>
  </header>
</template>

<script setup>
// Компонент шапки
</script>

<style scoped>
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

@media (max-width: 900px) {
  .header {
    padding: 16px 24px;
  }

  .nav {
    gap: 20px;
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
}
</style>