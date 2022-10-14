let swiperPopulr = new Swiper(".swap-cont", {
  spaceBetween: 80,
  loop:true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  breakpoints: {
      640: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
        
      },
  },
  });

