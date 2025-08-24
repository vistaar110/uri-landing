// Gallery autoplay pause on hover
const galleryCarouselEl = document.getElementById('galleryCarousel');
if (galleryCarouselEl) {
  // Initialize carousel instance manually
  const galleryCarousel = new bootstrap.Carousel(galleryCarouselEl, {
    interval: 3000, // auto slide interval
    ride: 'carousel'
  });

  galleryCarouselEl.addEventListener('mouseenter', () => galleryCarousel.pause());
  galleryCarouselEl.addEventListener('mouseleave', () => galleryCarousel.cycle());
}


