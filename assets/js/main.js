document.addEventListener('DOMContentLoaded', function () {
    let swiper;
    let blockServices = document.querySelector('.block-services__cards-list');
    let button = document.querySelector('.button');

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

    // Создание карточек
    function createCard(srcLogo, ariaLabel) {
        let card = document.createElement('li');
        card.classList.add('swiper-slide');
        card.classList.add('block-services__cards-item');
        blockServices.appendChild(card);

        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.setAttribute('aria-label', ariaLabel);
        link.classList.add('block-services__cards-link');
        link.setAttribute('style', `background-image: url(${srcLogo})`);
        card.appendChild(link);

        let img_icon = document.createElement('img');
        img_icon.setAttribute('src', 'assets/images/go.svg');
        img_icon.setAttribute('alt', 'Перейти');
        img_icon.classList.add('block-services__icon');
        link.appendChild(img_icon);
    }

    // Инициализация swiper
    function initSwiper() {
        if (swiper) {
            swiper.destroy();
        }
        swiper = new Swiper(".mySwiper", {
            loop: true,
            slidesPerView: "auto",
            spaceBetween: 16,
            slideToClickedSlides: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            grabCursor: true,
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
                375: { spaceBetween: 18 },
                425: { spaceBetween: 20 },
                500: { spaceBetween: 24 },
                700: { spaceBetween: 24 },
            },
            allowTouchMove: true,
        });
    }

    // Проверка и корректировка поведения swiper в зависимости от ширины экрана
    function handleScreenSize() {
        const screenSize = window.innerWidth;
        if (swiper && screenSize > 767) {
            swiper.allowTouchMove = false;
            swiper.destroy();
            // alert('Testing screen size');
        }
    }

    // Создание карточек при загрузке страницы
    for (let i = 0; i < dataCardList.length; i++) {
        createCard(dataCardList[i].url, dataCardList[i].ariaLabel);
    }

    // Инициализация Swiper при загрузке страницы
    initSwiper();
    handleScreenSize();

    // Обработка изменения размера окна
    window.addEventListener('resize', function() {
        initSwiper();
        handleScreenSize();
    });

    // Обработчик кнопки
    button.addEventListener('click', function () {
        blockServices.classList.toggle('expanded');
        button.textContent = blockServices.classList.contains('expanded') ? 'Скрыть' : 'Показать все';
        button.classList.toggle('expanded');
    });
});
