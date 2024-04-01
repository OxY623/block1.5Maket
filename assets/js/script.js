let dataCardList = [
    {url: 'assets/images/Bitmap.svg', ariaLabel: 'Выбрать Lenovo'},
    {url: 'assets/images/Bitmap1.svg', ariaLabel: 'Выбрать Samsung'},
    {url: 'assets/images/Bitmap2.svg', ariaLabel: 'Выбрать Apple'},
    {url: 'assets/images/Bitmap3.svg', ariaLabel: 'Выбрать ViewSonic'},
    {url: 'assets/images/Bitmap4.svg', ariaLabel: 'Выбрать Bosch'},
    {url: 'assets/images/Bitmap5.svg', ariaLabel: 'Выбрать HP'},
    {url: 'assets/images/Bitmap6.svg', ariaLabel: 'Выбрать Acer'},
    {url: 'assets/images/Bitmap7.svg', ariaLabel: 'Выбрать Sony'},
    {url: 'assets/images/Bitmap.svg', ariaLabel: 'Выбрать Lenovo'},
    {url: 'assets/images/Bitmap1.svg', ariaLabel: 'Выбрать Samsung'},
    {url: 'assets/images/Bitmap2.svg', ariaLabel: 'Выбрать Apple'},
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
    link.style.backgroundImage = `url(${srcLogo})`;
    card.appendChild(link);

    let img_icon = document.createElement('img');
    img_icon.setAttribute('src', 'assets/images/go.svg');
    img_icon.setAttribute('alt', 'Перейти');
    img_icon.classList.add('block-services__icon');
    link.appendChild(img_icon);
}

// Создание карточек
for (let i = 0; i < dataCardList.length; i++) {
    createCard(dataCardList[i].url, dataCardList[i].ariaLabel);
}