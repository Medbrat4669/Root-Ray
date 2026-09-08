<template>
  <header class="header" role="banner">
    <div class="header__container">
      <nav class="nav nav--left" aria-label="Левое меню">
        <button class="nav__icon-btn" aria-label="Поиск">
          <svg class="nav__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
          </svg>
        </button>
        <router-link to="/shop" class="nav__link">МАГАЗИН</router-link>
        <router-link to="/about" class="nav__link">О НАС</router-link>
      </nav>

      <router-link to="/" class="header__logo">Root Ray</router-link>

      <nav class="nav nav--right" aria-label="Правое меню">
        <router-link to="/delivery" class="nav__link">ДОСТАВКА</router-link>
        <router-link to="/contacts" class="nav__link">КОНТАКТЫ</router-link>
        <button class="nav__icon-btn" aria-label="Корзина">
          <svg class="nav__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
        </button>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
}

.header__container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__logo {
  font-family: var(--font-serif);
  font-size: 1.8rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--color-text);
}

.nav {
  display: flex;
  align-items: center;
  gap: 32px;
  flex: 1;
}

.nav--right {
  justify-content: flex-end;
}

.nav__link {
  font-size: 0.8rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-text);
  transition: var(--transition-base);
}

.nav__link:hover {
  color: var(--color-text-light);
}

.nav__icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: var(--color-text);
  display: flex;
  align-items: center;
  transition: var(--transition-base);
}

.nav__icon-btn:hover {
  opacity: 0.6;
}

.nav__icon {
  width: 20px;
  height: 20px;
}

@media (max-width: 900px) {
  .header__container {
    padding: 15px 20px;
  }
  .nav {
    gap: 20px;
  }
}

@media (max-width: 600px) {
  .nav__link {
    display: none;
  }
  .header__logo {
    font-size: 1.4rem;
  }
}
</style>
