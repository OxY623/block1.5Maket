if (window.matchMedia("(max-width: 768px)").matches) {
    const swiper = new Swiper(".mySwiper", {
        loop: true,
        // slidesPerView: 1.25,
        slidesPerView: "auto",
        spaceBetween: 16,
        slideToClickedSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        grubCursor: true,
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },
        mousewheel: {
            sensitivity: 1,
        },

        slideOverflow: true,
        breakpoints: {
            375: {
                spaceBetween: 18,
            },
            425: {
                spaceBetween: 20,
            },
            500: {
                spaceBetween: 24,
            },
            700: {
                spaceBetween: 24,
            },

        },
        allowTouchMove: true,

    });
}