document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const block = document.querySelector('.block');

    toggleButton.addEventListener('click', function() {
        if (block.classList.contains('expanded')) {
            block.classList.remove('expanded');
            toggleButton.textContent = 'Показать все';
        } else {
            block.classList.add('expanded');
            toggleButton.textContent = 'Скрыть';
        }
    });
});
