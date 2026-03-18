document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector('.menu-icon');
  const navlist = document.querySelector('.nav-list');
  const overlay = document.querySelector('.menu-overlay');
  const carousel = document.getElementById('content-slider');

  const totalImages = 3;
  let currentIndex = 0;

  // =============================
  // SLIDER AUTOMÁTICO
  // =============================
  function showNextImage() {
    if (!carousel) return;

    currentIndex++;

    if (currentIndex === totalImages) {
      carousel.style.transition = "none";
      carousel.style.transform = "translateX(0)";
      currentIndex = 0;

      setTimeout(() => {
        carousel.style.transition = "transform 1s ease-in-out";
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
      }, 20);
    } else {
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }

  setInterval(showNextImage, 6000);

  // =============================
  // MENÚ RESPONSIVE
  // =============================
  if (button && navlist && overlay) {
    button.addEventListener("click", () => {
      navlist.classList.toggle("active");
      overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", () => {
      navlist.classList.remove("active");
      overlay.classList.remove("active");
    });
  }
});