$(document).ready(function () {
    var pagetop = $('.pagetop');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 0);
        return false;
    });
});