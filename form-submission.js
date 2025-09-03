let signupForm = document.getElementById("signup-form");

// const regex = /[a-z]\d|\d[a-z]/;
const regex = /^(?=.*[a-z])(?=.*\d).{8,}$/;

function clearForm() {
    username.value = "";
    password.value = "";
    confirmPassword.value = "";
    usernameClear.style.display = "none";
    inputPanelContainer.style.visibility = "hidden";
    inputPanel.style.bottom = "-100%";
}

function checkEmptyField() {
    if (!username.value) {
        alert("Username field cannot be empty.");
    } else if (!password.value) {
        alert("Password field cannot be empty.");
    } else if (!confirmPassword.value) {
        alert("Confirm password field cannot be empty.");
    } else {
        return false;
    }
    return true;
}

function checkLength() {
    console.log(username.value, username.value.length);
    if (username.value.length < 8) {
        alert("Username needs to be at least 8 characters long.");
    } else if (password.value.length < 8) {
        alert("Password needs to be at least 8 characters long.");
    } else {
        return false;
    }
    return true;
}

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let hasFieldEmpty = checkEmptyField();
    if (hasFieldEmpty) {
        clearForm();
        return;
    }

    let shortInput = checkLength();
    if (shortInput) {
        clearForm();
        return;
    }
    
    if (!regex.test(username.value)) {
        alert("Username needs to contain at least 1 letter and 1 number.");
    } else if (!regex.test(password.value)) {
        alert("Password needs to contain at least 1 letter and 1 number.");
    } else if (confirmPassword.value !== password.value) {
        alert("Confirm password does not match with password.");
    } else {
        alert(`Successful login!\nWelcome, ${username.value}!`);
    }

    clearForm();
});