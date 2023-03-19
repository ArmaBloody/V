$(document).ready(function () {
    $('.burger-menu').click(function (event) {
        $('.burger-menu,.menu').toggleClass('active')
        $('body').toggleClass('lock')
    });
    $(document).click('on', function (e) {
        var box = $('.burger-menu , .menu ');
        if (!box.is(e.target) && box.has(e.target).
            length === 0) {
            box.removeClass('active');
        }
    });
    $('a[href*="#"]').click(function (klik) {
        var knopk = $('.burger-menu , .menu , body');
        knopk.removeClass('active');
        knopk.removeClass('lock');
    });
});