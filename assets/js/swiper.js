if (window.matchMedia("(max-width: 767px)").matches) {
    const swiper = new Swiper('.block-services__cards', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        }
    });
}