if (!localStorage.getItem('firstLoad')) {
    window.alert("Переписал js и css. Теперь swiper иниц. " +
        "только на экранах менее 768px. И скрипт запускается " +
        "только  после отрисовки html.");
}

localStorage.setItem('firstLoad', true);


function initSwiper() {
    new Swiper(".mySwiper", {
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
            768: {
                spaceBetween: 24,
                autoplay: false,
            }
        },
    });
}