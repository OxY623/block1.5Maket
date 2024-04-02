if (!localStorage.getItem('firstLoad')) {
    window.alert("Переписал js и css. Теперь swiper иниц. " +
        "только на экранах менее 768px. И скрипт запускается " +
        "только  после отрисовки html.");
}

localStorage.setItem('firstLoad', true);


