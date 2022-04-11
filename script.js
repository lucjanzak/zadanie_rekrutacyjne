
function validate() {
    let pesel = document.querySelector("#pesel");
    let value = pesel.value;
    let correct = true;

    if (!(/\d{11}/.test(value))) {
        correct = false;
    }

    const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3, 1];
    let sum = 0;
    for (let i = 0; i < value.length; i++) {
        let digit = parseInt(value.charAt(i));
        sum += digit * weights[i];
    }

    if (sum % 10 != 0) {
        correct = false;
    }

    if (correct) {
        alert("Sukces");
    } else {
        alert("Błąd");
    }
}

function updatePesel() {
    let pesel = document.querySelector("#pesel");
    let value = pesel.value;

    let monthRaw = parseInt(value.slice(2, 4));

    let year  = parseInt(value.slice(0, 2)) + 1900 + (100 * Math.floor(monthRaw / 20));
    let month = monthRaw % 20;
    let day   = parseInt(value.slice(4, 6));

    month = ("0" + month).slice(-2);
    day   = ("0" + day)  .slice(-2);

    let date = document.querySelector("#date");
    date.value = `${year}-${month}-${day}`
}

function init() {
    let pesel = document.querySelector("#pesel");
    pesel.addEventListener("change", updatePesel);

    let submit = document.querySelector("#submit");
    submit.addEventListener("click", validate);
}

init();
