$(document).ready(function() {
    $('.more-info').on('click', function() {
        $(this).next('.description').toggle(); // Toggle the visibility of the next description
    });
});

$(document).ready(function() {
    $('.trunk-container').on('mouseenter', function() {
        $(this).find('.trunk-description').fadeIn();
    }).on('mouseleave', function() {
        $(this).find('.trunk-description').fadeOut();
    });
});
