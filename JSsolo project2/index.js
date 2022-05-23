let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
let passwordLength = 0;
let arrPasswordId = ["password1", "password2", "password3", "password4"]

function generatePassword() {
    passwordLength = document.querySelector(".pw__length--input").value
    if (passwordLength <= 12) {
        for (var i = 0; i < arrPasswordId.length; i++) {
            let password = "";
            for (var j = 0; j < passwordLength; j++) {
                var randomNumber = Math.floor(Math.random() * charset.length);
                password += charset.substring(randomNumber, randomNumber + 1);
            }
            document.getElementById(arrPasswordId[i]).value = password;
        }
    }
}

function copyClipboard(str) {
    var copyText = document.getElementById(str);
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert("Copied password to clipboard.");
}