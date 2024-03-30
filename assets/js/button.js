if (window.matchMedia("(min-width: 767px)").matches){
let Button = document.querySelector('button');
Button.addEventListener('click', function () {
    let blockServices = document.querySelector('.block-services__cards-list');
    let button = document.querySelector('.button');
    let isExpanded = blockServices.classList.contains('expanded');

    // Изменяем состояние при каждом клике на противоположное
    isExpanded = !isExpanded;

    if (isExpanded) {
        // Если состояние - развернуто, показываем все ссылки и меняем текст кнопки на "Скрыть"
        blockServices.classList.add('expanded');
        Button.textContent = 'Скрыть';
        Button.classList.add('expanded');

    } else {
        // Если состояние - свернуто, скрываем ссылки сверху и меняем текст кнопки на "Показать все"
        blockServices.classList.remove('expanded');
        Button.textContent = 'Показать все';
        Button.classList.remove('expanded');

    }
});

}