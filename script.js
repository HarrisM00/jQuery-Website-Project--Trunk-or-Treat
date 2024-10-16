$(document).ready(function() {
    $('.more-info').on('click', function() {
        $(this).next('.description').toggle(); // Toggle the visibility of the next description
    });
});
