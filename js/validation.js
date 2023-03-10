function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector("small");

    formControl.className = "form-control error";
    errorMessage.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function isEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function isPhoneNumber(phoneNumber) {
    const re = /^[0-9]{3}-[0-9]{3}-[0-9]{3}$/;
    return re.test(phoneNumber);
}

function validateForm() {
    const jmeno = document.getElementById("jmeno");
    const email = document.getElementById("email");
    const telefon = document.getElementById("telefon");
    const birthday = document.getElementById("birthday");
    const zprava = document.getElementById("zprava");

    const jmenoValue = jmeno.value.trim();
    const emailValue = email.value.trim();
    const telefonValue = telefon.value.trim();
    const birthdayValue = birthday.value.trim();
    const zpravaValue = zprava.value.trim();

    let hasErrors = false;

    if (jmenoValue === "") {
        setErrorFor(jmeno, "Jméno nemůže být prázdné");
        hasErrors = true;
    } else if (jmenoValue.length < 2) {
        setErrorFor(jmeno, "Jméno musí být alespoň 2 znaky dlouhé");
        hasErrors = true;
    } else {
        setSuccessFor(jmeno);
    }

    if (emailValue === "") {
        setErrorFor(email, "Email nemůže být prázdný");
        hasErrors = true;
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Zadejte platný email");
        hasErrors = true;
    } else {
        setSuccessFor(email);
    }

    if (telefonValue === "") {
        setErrorFor(telefon, "Telefon nemůže být prázdný");
        hasErrors = true;
    } else if (!isPhoneNumber(telefonValue)) {
        setErrorFor(telefon, "Zadejte platné telefonní číslo");
        hasErrors = true;
    } else {
        setSuccessFor(telefon);
    }

    if (birthdayValue === "") {
        setErrorFor(birthday, "Datum narození nemůže být prázdné");
        hasErrors = true;
    } else {
        setSuccessFor(birthday);
    }

    if (zpravaValue === "") {
        setErrorFor(zprava, "Zpráva nemůže být prázdná");
        hasErrors = true;
    } else {
        setSuccessFor(zprava);
    }

    if (hasErrors) {
        alert("Prosím, vyplňte formulář správně");
    } else {
        alert("Formulář byl úspěšně odeslán");
    }
}
