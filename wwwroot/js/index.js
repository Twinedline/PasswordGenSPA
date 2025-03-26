console.log("JavaScript file loaded!");

$(document).ready(function () {
    $('#password-check-link').click(function () {
        var timestamp = new Date().getTime(); // Get current timestamp
        $('#page-content-wrapper').load('password-check.html?' + timestamp); // Add timestamp as a query string to bust cache
    });

    $('#balls-link').click(function () {
        var timestamp = new Date().getTime();
        $('#page-content-wrapper').load('balls.html')
    });

    $('#index-panel-link').click(function () {
        var timestamp = new Date().getTime();
        $('#page-content-wrapper').load('index-panel.html')
    });

    $('#another-page-link').click(function () {
        var timestamp = new Date().getTime();
        $('#page-content-wrapper').load('another-page.html')
    });

    $(document).on('click', '#login-link', function () {
        var timestamp = new Date().getTime();
        $('#page-content-wrapper').load('login.html?' + timestamp);
    });

    $(document).on('click', '#signup-link', function () {
        var timestamp = new Date().getTime();
        $('#page-content-wrapper').load('signup.html?' + timestamp);
    });

});


$(document).ready(function () {
    $(document).on('submit', '#signup-form', function (event) {
        event.preventDefault();

        if (typeof CryptoJS === 'undefined') {
            console.error('CryptoJS is not loaded');
            return;
        }

        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        const secret_key = "thisisfarlesssecurethanarandomkeybutmorememorable";
        const encrypted_password = CryptoJS.AES.encrypt(password, secret_key).toString();
       
        const user_key = "user_" + email.split('@')[0];

        localStorage.setItem(user_key, JSON.stringify({ email: email, password: encrypted_password }));

        alert("Form submitted and data saved for user: " + email.split('@')[0]);

    });
});

$(document).ready(function () {
    $(document).on('submit', '#login-form', function (event) {
        event.preventDefault();

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        const user_key = "user_" + email.split('@')[0];

        const stored_user = localStorage.getItem(user_key);

        if (!stored_user) {
            alert("user not found!");
            return;
        }

        const user_data = JSON.parse(stored_user);

        if (user_data.email !== email) {
            alert("Incorrect email!");
            return;
        }

        const secret_key = "thisisfarlesssecurethanarandomkeybutmorememorable";
        const decrypted_password = CryptoJS.AES.decrypt(user_data.password, secret_key).toString(CryptoJS.enc.Utf8);

        if (decrypted_password === password) {
            alert("Login Successful for user: " + email.split('@')[0]);
        } else {
            alert("Incorrect Password!")
        }

    });
});


$(document).ready(function () {
    $('#main').on('input', '#password-check', function () {

        console.log("Password input detected");

        const passwordCheck = this.value;
        const strengthMeter = document.getElementById("strength-meter");
        const strengthText = document.getElementById("strength-text");

        const regexLowerCase = /[a-z]/;
        const regexUpperCase = /[A-Z]/;
        const regexNumbers = /[0-9]/;
        const regexSymbols = /[!@#$%^&*(),.?":{}|<>]/;


        let strength = 0; //sets strength to 0 so that we can add to it under certain conditions, these conditions will then determine how strong the password is

        if (passwordCheck.length >= 8) {
            strength++;
        }

        if (passwordCheck.length >= 12) {
            strength++;
        }

        if (passwordCheck.length >= 20) {
            strength++;
        }

        if (regexLowerCase.test(passwordCheck)) {
            strength++;
        }

        if (regexUpperCase.test(passwordCheck)) {
            strength++;
        }

        if (regexNumbers.test(passwordCheck)) {
            strength++;
        }

        if (regexSymbols.test(passwordCheck)) {
            strength++;
        }

        switch (strength) {
            case 0:
            case 1:
                strengthMeter.style.width = "5%";
                strengthMeter.style.backgroundColor = "red";
                strengthText.textContent = "Very Weak";
                break;
            case 2:
                strengthMeter.style.width = "10%";
                strengthMeter.style.backgroundColor = "red";
                strengthText.textContent = "Very Weak";
                break;
            case 3:
                strengthMeter.style.width = "20%";
                strengthMeter.style.backgroundColor = "red";
                strengthText.textContent = "Very Weak";
                break
            case 4:
                strengthMeter.style.width = "40%";
                strengthMeter.style.backgroundColor = "orange";
                strengthText.textContent = "Weak";
                break;
            case 5:
                strengthMeter.style.width = "60%";
                strengthMeter.style.backgroundColor = "yellow";
                strengthText.textContent = "Fair";
                break;
            case 6:
                strengthMeter.style.width = "80%";
                strengthMeter.style.backgroundColor = "lightgreen";
                strengthText.textContent = "Strong";
                break;
            case 7:
                strengthMeter.style.width = "100%";
                strengthMeter.style.backgroundColor = "green";
                strengthText.textContent = "Very Strong";
                break;
            default:
                strengthMeter.style.width = "0%";
                strengthText.textContent = "";
        }
    });
});

$(document).ready(function () {
    const toggleButton = document.getElementById('mode-toggle');

    if (localStorage.getItem('mode') === "light") {
        document.body.classList.add('lightmode');
    } else {
        document.body.classList.remove('lightmode');
    }

    toggleButton.addEventListener('click', () => {
        
        document.body.classList.toggle('lightmode');

        if (document.body.classList.contains('lightmode')) {
            localStorage.setItem('mode', 'light');
        } else {
            localStorage.setItem('mode', 'dark');
        }
    });
});

    
