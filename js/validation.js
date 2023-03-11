function isEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function isPhoneNumber(phoneNumber) {
    const re = /^[0-9]{3}-[0-9]{3}-[0-9]{3}$/;
    return re.test(phoneNumber);
}

function isValidDate(dateString) {
    const dateObject = new Date(dateString);
    return !isNaN(dateObject.getTime()) && dateObject <= currDate;
}

const currDate = new Date();
const jmeno = document.getElementById("jmeno");
const email = document.getElementById("email");
const telefon = document.getElementById("telefon");
const birthday = document.getElementById("birthday");
const zprava = document.getElementById("zprava");
const form = document.querySelector("form");
const errorMessage = document.querySelector(".errorMessage");

form.addEventListener("submit", (e) => {
    const errors = [];

    if (jmeno.value.trim() === "") {
        errors.push("Jméno je vyžadováno");
    } else if (jmeno.value.trim().length < 3) {
        errors.push("Jméno musí být delší jak 3 znaky");
    }

    if (!isEmail(email.value)) {
        errors.push("Zadejte platnou e-mailovou adresu.");
    }

    if (!isPhoneNumber(telefon.value)) {
        errors.push("Zadejte platné telefonní číslo ve formátu xxx-xxx-xxx.");
    }

    if (birthday.value.trim() === "") {
        errors.push("Zadejte datum narození.");
    } else if (!isValidDate(birthday.value)) {
        errors.push("Datum narození musí být v platném formátu (yyyy-mm-dd) a musí být v minulosti nebo dnes.");
    }

    if (zprava.value.trim() === "") {
        errors.push("Zadejte prosím zprávu.");
    }

    if (errors.length > 0) {
        e.preventDefault();
        errorMessage.hidden = false;
        errorMessage.innerHTML = errors.join('<br>');
    }
});
