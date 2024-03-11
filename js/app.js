$(document).ready(function() {
    // Muestra u oculta la flecha dependiendo de la posición del scroll y aplica la clase "top" según corresponda
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scroll-arrow').fadeIn();
            $('.scroll-arrow').removeClass('top');
        } else {
            $('.scroll-arrow').fadeOut();
            $('.scroll-arrow').addClass('top');
        }
    });

    // Cuando se hace clic en la flecha, lleva al usuario al principio de la página
    $('.scroll-arrow').click(function() {
        $('html, body').animate({scrollTop : 0}, 800);
        return false;
    });
});
