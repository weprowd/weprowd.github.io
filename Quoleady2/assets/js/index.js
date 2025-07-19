document.addEventListener('DOMContentLoaded', function () {

    // swiper initialize 
    const swiper = new Swiper('.swiper', {
      loop: false,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      spaceBetween: 20,
       on: {
        slideChange: function () {
          updatePagination(swiper.activeIndex);
        },
      },
    });


    // Accordion script 
    const items = document.querySelectorAll('.accordion-item');
    items.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });

    const pagItems = document.querySelectorAll('.pag-item');
    pagItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        swiper.slideTo(index);
        updatePagination(index);
      });
    });

    function updatePagination(activeIndex) {
      pagItems.forEach((item, i) => {
        item.classList.remove('active', 'before-active');
      });

      pagItems[activeIndex].classList.add('active');

      if (activeIndex > 0) {
        pagItems[activeIndex - 1].classList.add('before-active');
      }
    }

    // Initialize first active
    updatePagination(0);

  });