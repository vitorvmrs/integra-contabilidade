
var barraNav = $('.barra-nav');
var alturaBarraNav = barraNav.height();
var alturaJanela = $(window).height();
var prim = $(window).scrollTop();
var segu = null;
var barraNavVisivel = true;


$(document).scroll(function(event) {

    segu = $(window).scrollTop();
    if (prim < segu) 
    {
    	// console.log('BAIXO');
    	if(barraNavVisivel == true && $(document).scrollTop() > (alturaJanela/2))
    	{
    		barraNav.css('top', 'calc(-' + alturaBarraNav + 'px - 1.5em)');
    		barraNavVisivel = false;
    	}
        

    	prim = $(window).scrollTop();
    } 
    else 
    {
    	// console.log('CIMA');
    	if(barraNavVisivel == false)
    	{
    		barraNav.css('top', 0);
    		barraNavVisivel = true;
    	}
    	
    	prim = $(window).scrollTop();
    }

});
