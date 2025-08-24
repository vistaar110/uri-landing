// ==========================
// URI Landing Page Scripts
// ==========================

// Smooth scroll for navbar links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    if (link.hash) {
      e.preventDefault();
      document.querySelector(link.hash).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Page load toast notification (Bootstrap Toast)
window.addEventListener('load', () => {
  var toastEl = document.getElementById('joshToast');
  if (toastEl) {
    var toast = new bootstrap.Toast(toastEl, { delay: 5000 });
    toast.show();
  }

  // Cinematic fade-in animation for hero text
  const heroText = document.querySelector('.hero h1');
  const heroLead = document.querySelector('.hero p');
  if(heroText && heroLead){
    heroText.style.opacity = 0;
    heroLead.style.opacity = 0;
    heroText.style.transition = 'opacity 2s ease-in';
    heroLead.style.transition = 'opacity 2.5s ease-in';
    setTimeout(() => { heroText.style.opacity = 1; heroLead.style.opacity = 1; }, 300);
  }
});

// Cast cards hover effect (zoom + shadow)
document.querySelectorAll('.cast-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 12px 24px rgba(0,0,0,0.5)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '0 0 0 rgba(0,0,0,0)';
  });
});

// Optional: Gallery autoplay pause on hover
const galleryCarousel = document.getElementById('galleryCarousel');
if(galleryCarousel){
  galleryCarousel.addEventListener('mouseenter', () => bootstrap.Carousel.getInstance(galleryCarousel).pause());
  galleryCarousel.addEventListener('mouseleave', () => bootstrap.Carousel.getInstance(galleryCarousel).cycle());
}
