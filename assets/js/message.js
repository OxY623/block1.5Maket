if (!localStorage.getItem('firstLoad')) {
    window.alert("Переписал js и css. Теперь swiper иниц. " +
        " нормально. И скрипт запускается " +
        "только  после отрисовки html.");
}

localStorage.setItem('firstLoad', true);


