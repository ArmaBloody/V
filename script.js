$(document).ready(function () {
    $('.burger-menu').click(function (event) {
        $('.burger-menu,.menu').toggleClass('active')
        $('body').toggleClass('lock')
    });

    $('a[href*="#"]').click(function (klik) {
        var knopk = $('.burger-menu , .menu , body');
        knopk.removeClass('active');
        knopk.removeClass('lock');
    });
});