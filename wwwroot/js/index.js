console.log("JavaScript file loaded!");

$(document).ready(function () {
    $('#generator-link').click(function () {
        var timestamp = new Date().getTime(); // Get current timestamp
        $('#page-content-wrapper').load('generator.html?' + timestamp); // Add timestamp as a query string to bust cache
    });

    $('#indexPanel-link').click(function () {
        var timestamp = new Date().getTime();
        $('#page-content-wrapper').load('index-panel.html')
    });

    $('#balls-link').click(function () {
        var timestamp = new Date().getTime();
        $('#page-content-wrapper').load('balls.html')
    });

    $('#anotherpage-link').click(function () {
        var timestamp = new Date().getTime();
        $('#page-content-wrapper').load('anotherpage.html')
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


