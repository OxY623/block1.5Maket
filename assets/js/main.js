document.addEventListener('DOMContentLoaded', function () {

    let openSizes = window.matchMedia("(min-width: 768px)").matches;
    let dataCardList = [
        {url: 'assets/images/Bitmap.svg', ariaLabel: 'Выбрать Lenovo'},
        {url: 'assets/images/Bitmap1.svg', ariaLabel: 'Выбрать Sumsung'},
        {url: 'assets/images/Bitmap2.svg', ariaLabel: 'Выбрать Apple'},
        {url: 'assets/images/Bitmap3.svg', ariaLabel: 'Выбрать View-Sonic'},
        {url: 'assets/images/Bitmap4.svg', ariaLabel: 'Выбрать Bosh'},
        {url: 'assets/images/Bitmap5.svg', ariaLabel: 'Выбрать HP'},
        {url: 'assets/images/Bitmap6.svg', ariaLabel: 'Выбрать Acer'},
        {url: 'assets/images/Bitmap7.svg', ariaLabel: 'Выбрать Sony'},
        {url: 'assets/images/Bitmap.svg', ariaLabel: 'Выбрать Lenovo'},
        {url: 'assets/images/Bitmap1.svg', ariaLabel: 'Выбрать Sumsung'},
        {url: 'assets/images/Bitmap2.svg', ariaLabel: 'Выбрать Apple'},

    ];

    let list = document.querySelector('.block-services__cards-list');

    // Создание карточек
    function createCard(srcLogo, ariaLabel) {
        let card = document.createElement('li');
        card.classList.add('swiper-slide');
        card.classList.add('block-services__cards-item');
        list.appendChild(card);

        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.setAttribute('aria-label', ariaLabel);
        link.classList.add('block-services__cards-link');
        // link.style.backgroundColor = 'white';
        // link.style.backgroundImage = `url(${srcLogo})`;
        link.setAttribute('style', `background-image: url(${srcLogo})`);
        card.appendChild(link);

        let img_icon = document.createElement('img');
        img_icon.setAttribute('src', 'assets/images/go.svg');
        img_icon.setAttribute('alt', 'Перейти');
        img_icon.classList.add('block-services__icon');
        link.appendChild(img_icon);
    }

    // Добавляем карточки
    for (let i = 0; i < dataCardList.length; i++) {
        createCard(dataCardList[i].url, dataCardList[i].ariaLabel);
    }


    let swiper = new Swiper(".mySwiper", {
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
    });

    let Button = document.querySelector('.button');
    Button.addEventListener('click', function () {
        let blockServices = document.querySelector('.block-services__cards-list');
        let button = document.querySelector('.button');
        let isExpanded = blockServices.classList.contains('expanded');

        isExpanded = !isExpanded;

        if (isExpanded) {
            blockServices.classList.add('expanded');
            Button.textContent = 'Скрыть';
            Button.classList.add('expanded');
        } else {
            blockServices.classList.remove('expanded');
            Button.textContent = 'Показать все';
            Button.classList.remove('expanded');
        }
    });


    function changingTheScreenSize() {
        if (openSizes) {

                swiper = new Swiper(".mySwiper", {
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


        } else {
            window.location.reload();
            $('.mySwiper .swiper-container .swiper-wrapper .swiper-slide').addClass('swiper-no-swiping');
            swiper.allowTouchMove = false;
            swiper.noSwiping = true;
            swiper.noSwipingClass = 'swiper-slide';
            // swiper.update()


        }
    }

    // if (window.innerWidth < 768) {
    //     openSizes = false;
    //     changingTheScreenSize();
    // } else {
    //     openSizes = true;
    //     changingTheScreenSize();
    // }

    window.addEventListener('resize', changingTheScreenSize);
});

