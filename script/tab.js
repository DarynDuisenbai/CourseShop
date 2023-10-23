function openTab(evt, category) {
    var i, tabcontent, tablinks;

    // Скрыть все элементы с классом "tabcontent"
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Удалить класс "active" со всех элементов с классом "tablinks"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Отобразить текущую вкладку и добавить класс "active" к кнопке
    document.getElementById(category).style.display = "block";
    evt.currentTarget.className += " active";
}

// По умолчанию, открываем первую вкладку при загрузке страницы
document.getElementById('category1').style.display = 'block';