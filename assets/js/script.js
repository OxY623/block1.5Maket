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
    {url: 'assets/images/Bitmap2.svg', ariaLabel: 'Выбрать Apple'}
];

let list = document.querySelector('.block-services__cards-list');

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
    // link.style.width = '240px';
    link.style.backgroundImage = `url(${srcLogo})`;
    card.appendChild(link);

    let img_icon = document.createElement('img');
    img_icon.setAttribute('src', 'assets/images/go.svg');
    img_icon.setAttribute('alt', 'Перейти');
    img_icon.classList.add('block-services__icon');
    link.appendChild(img_icon);
}

// Создание 11 карточек
for (let i = 0; i < dataCardList.length; i++) {
    createCard(dataCardList[i].url, dataCardList[i].ariaLabel);
}

// Инициализация Swiper только на устройствах до 768px
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

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const blockServices = document.querySelector('.block-services__cards-list');

    let isExpanded = false; // Переменная для отслеживания текущего состояния (развернуто/свернуто)

    toggleButton.addEventListener('click', function () {
        isExpanded = !isExpanded; // Изменяем состояние при каждом клике

        if (isExpanded) {
            // Если состояние - развернуто, показываем все ссылки и меняем текст кнопки на "Скрыть"
            blockServices.classList.add('expanded');
            toggleButton.textContent = 'Скрыть';
        } else {
            // Если состояние - свернуто, скрываем ссылки сверху и меняем текст кнопки на "Показать все"
            blockServices.classList.remove('expanded');
            toggleButton.textContent = 'Показать все';
        }
    });
});


