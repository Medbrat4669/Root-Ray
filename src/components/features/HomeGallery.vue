<template>
  <section class="gallery" aria-label="Галерея работ">
    <div class="container">
      <div class="gallery__grid">
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
    </div>
  </section>
</template>

<style scoped>
.gallery {
  padding: var(--section-padding);
  background-color: var(--color-background);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.gallery__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.gallery__item {
  overflow: hidden;
  aspect-ratio: 4/5;
}

.gallery__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
}

.gallery__item:hover .gallery__image {
  transform: scale(1.05);
}

@media (max-width: 900px) {
  .gallery__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .gallery {
    padding: var(--section-padding-mobile);
  }
  .gallery__grid {
    grid-template-columns: 1fr;
  }
}
</style>
