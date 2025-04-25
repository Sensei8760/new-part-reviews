// Автослайдер для екранів до 375px
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".rev-list");
  const slides = document.querySelectorAll(".rev-item");
  let index = 0;
  const totalSlides = slides.length;

  function showSlide(i) {
    slider.style.transform = `translateX(-${i * 100}%)`;
  }

  function autoSlide() {
    index = (index + 1) % totalSlides;
    showSlide(index);
  }

  // Запускаємо слайдер тільки для вузьких екранів
  if (window.innerWidth <= 375) {
    setInterval(autoSlide, 3000); // кожні 3 секунди
  }
});