$(document).ready(function () {
    $('#generator-link').click(function () {
        var timestamp = new Date().getTime(); // Get current timestamp
        $('#page-content-wrapper').load('generator.html?' + timestamp); // Add timestamp as a query string to bust cache
    });

    $('#indexPanel-link').click(function () {
        var timestamp = new Date().getTime();
            $('#page-content-wrapper').load('indexPanel.html');
        })

    $('#balls-link').click(function () {
        var timestamp = new Date().getTime();
            $('#page-content-wrapper').load('balls.html');
        })

    $('#anotherpage-link').click(function () {
        var timestamp = new Date().getTime();
            $('#page-content-wrapper').load('anotherpage.html');
        })
});