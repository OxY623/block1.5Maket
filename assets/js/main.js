document.addEventListener('DOMContentLoaded', function () {
    let openSises = window.matchMedia("(min-width: 768px)").matches;
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

    // Строим карточки
    function createCard(srcLogo, ariaLabel) {
        let card = document.createElement('li');
        card.classList.add('swiper-slide');
        card.classList.add('block-services__cards-item');
        list.appendChild(card);

        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.setAttribute('aria-label', ariaLabel);
        link.classList.add('block-services__cards-link');
        link.style.backgroundColor = 'white';
        link.style.backgroundImage = `url(${srcLogo})`;
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

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 16,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            // 768: {
            //     slidesPerView: 4,
            //     spaceBetween: 11,
            // },
            // 1024: {
            //     slidesPerView: 5,
            //     spaceBetween: 11,
            // },
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


    function handleResize() {
        if (openSises) {
            swiper.destroy();
        } else {
            swiper.init();
        }
    }

    window.addEventListener('resize', handleResize);
});

