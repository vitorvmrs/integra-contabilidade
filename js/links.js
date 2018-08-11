var doc = $('html, body');
$('.ul-nav > a').click(function() {

    doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    iconeMenu();
    $('.nav-responsivo').slideUp(300);
    
});