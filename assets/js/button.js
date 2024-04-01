if (window.matchMedia("(min-width: 767px)").matches) {
    let button = document.querySelector('.button');
    button.addEventListener('click', function () {
        let blockServices = document.querySelector('.block-services__cards-list');
        let isExpanded = blockServices.classList.toggle('expanded');

        if (isExpanded) {
            button.textContent = 'Скрыть';
            button.classList.add('expanded');
        } else {
            button.textContent = 'Показать все';
            button.classList.remove('expanded');
        }
    });
}