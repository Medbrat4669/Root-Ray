<template>
  <div class="delivery-page">
    <AppHeader />

    <main class="delivery-main">
      <div class="container">
        <div class="delivery-sections">
          
          <section class="delivery-row">
            <h1 class="delivery-title">ОПЛАТА</h1>
            <div class="delivery-content">
              <p>Оплата товара производится банковской картой в нашей студии или при оформлении заказа через сайт. Также вы можете оплатить покупку электронными деньгами. Оплата наличными возможна через курьера при получении заказа или через администратора при самовывозе заказа из нашей студии по адресу: проезд Аэропорта, 8/4 (м. Сокол, 5 мин пешком). Также доступна безналичная оплата на расчетный счет юридического лица.</p>
            </div>
          </section>

          <section class="delivery-row">
            <h2 class="delivery-title">ДОСТАВКА</h2>
            <div class="delivery-content">
              <p>Оптимальный срок заказа — накануне нужной вам даты. Также возможна срочная доставка через 2 часа после оформления и подтверждения заказа. Единственный момент, который стоит учитывать при заказе срочной доставки: мы соберем вам букет или композицию из тех цветов, которые есть в наличии на момент вашего заказа.</p>
              
              <div class="delivery-zones">
                <div class="zone-item">
                  <span class="zone-name">Зона №1 «Москва» (в пределах МКАД)</span>
                  <span class="zone-price">400 руб.</span>
                </div>
                <div class="zone-item">
                  <span class="zone-name">Зона №2 «Подмосковье» (за МКАД)</span>
                  <span class="zone-price">800 руб.</span>
                </div>
                <div class="zone-item">
                  <span class="zone-name">Зона №3 «Область» (за МКАД)</span>
                  <span class="zone-price">1200 руб.</span>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/common/AppHeader.vue'
import AppFooter from '@/components/common/AppFooter.vue'
</script>

<style scoped>
.delivery-page {
  padding-top: 120px;
}

.delivery-main {
  padding: 80px 0 120px;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.delivery-sections {
  display: flex;
  flex-direction: column;
  gap: 100px;
}

.delivery-row {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 40px;
}

.delivery-title {
  font-size: 2.5rem;
  letter-spacing: 4px;
  margin: 0;
  line-height: 1.1;
}

.delivery-content {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-text-muted);
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.delivery-zones {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-top: 1px solid var(--color-border);
  padding-top: 30px;
}

.zone-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(0,0,0,0.03);
}

.zone-name {
  font-size: 1rem;
  color: var(--color-text);
}

.zone-price {
  font-weight: 500;
  color: var(--color-text);
}

@media (max-width: 900px) {
  .delivery-row {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .delivery-title {
    font-size: 2rem;
  }
  .delivery-sections {
    gap: 60px;
  }
}

@media (max-width: 600px) {
  .delivery-main {
    padding: 40px 0 80px;
  }
}
</style>
