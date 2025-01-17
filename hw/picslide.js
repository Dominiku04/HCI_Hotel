$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 3
          },
          1000: {
              items: 4
          }
      }
  });

  const viewGalleryBtn = document.getElementById('viewGalleryBtn');

  viewGalleryBtn.addEventListener('click', function() {
      document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
  });
});

