if (window.matchMedia("(max-width: 768px)").matches) {
    const swiper = new Swiper('.block-services__cards', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        }
    });
}