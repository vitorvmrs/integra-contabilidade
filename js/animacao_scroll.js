
	
var item0 = $('.item-servicos').eq(0);
var item1 = $('.item-servicos').eq(1);
var item2 = $('.item-servicos').eq(2);

var posicaoItem0 = Math.round(item0.offset().top);
var posicaoItem1 = Math.round(item1.offset().top);
var posicaoItem2 = Math.round(item2.offset().top);
	

$(document).scroll(function(event) {
	var rolagem = $(window).scrollTop();

	if (rolagem >= (posicaoItem0 - 500)) 
	{
		item0.addClass('surge-de-baixo')
	}
	if (rolagem >= (posicaoItem1 - 500)) 
	{
		item1.addClass('surge-de-baixo')
	}
	if (rolagem >= (posicaoItem2 - 500)) 
	{
		item2.addClass('surge-de-baixo')
	}

});