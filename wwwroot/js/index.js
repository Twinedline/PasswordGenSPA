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

    $('#anotherpage-link').click(function () {
        var timestamp = new Date().getTime();
        $('#page-content-wrapper').load('anotherpage.html')
    });

    $(document).on('click', '#indexPanel-link', function () {
        var timestamp = new Date().getTime();
        $('#page-content-wrapper').load('index-panel.html?' + timestamp);
    });

    $(document).on('click', '#signup-link', function () {
        var timestamp = new Date().getTime();
        $('#page-content-wrapper').load('signup.html?' + timestamp);
    });

});




$(document).ready(function () {
    $(document).on('submit', '#signup-form', function (event) {
        event.preventDefault();


        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;


        localStorage.setItem('email', email);
        localStorage.setItem('password', password);


        const formData = {
            email: email,
            password: password
        };


        fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {

                if (data.message) {
                    alert(data.message);
                }
            })
            .catch(error => {

                console.error('Error:', error);
                alert('There was an error saving the data.');
            });

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



    
