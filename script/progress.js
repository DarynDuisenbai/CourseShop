function move() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 20);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + "%";
            elem.innerHTML = width + "%";
        }
    }
}