function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var submitButton = document.querySelector("button[type=submit]");
    
    // Проверка имени (должно быть не пустым)
    if (name.trim() === "") {
        nameError.innerText = "Введите имя";
        return false;
    } else {
        nameError.innerText = "";
    }

    // Проверка email (простейшая проверка на формат email)
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        emailError.innerText = "Введите корректный email";
        return false;
    } else {
        emailError.innerText = "";
    }

    // Проверка пароля (минимум 8 символов)
    if (password.length < 8) {
        passwordError.innerText = "Пароль должен содержать минимум 8 символов";
        return false;
    } else {
        passwordError.innerText = "";
    }

    // Если все проверки прошли, переход на myAkk.html
    window.location.href = "myAkk.html";

    // Отменить отправку формы (чтобы она не отправилась по умолчанию)
    return false;
}