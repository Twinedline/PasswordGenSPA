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


document.getElementById('login-form').addEventListener('submit', function (event) {

    event.preventDefault();

    const email = document.getElementById('inputemail').value;
    const password = document.getElementById('inputpassword').value;

    const formData = {
        email: email,
        password: password
    };

});

