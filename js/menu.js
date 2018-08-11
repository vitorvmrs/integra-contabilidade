var click = false;

$('.menu-icon').click(function(event) {
	iconeMenu();
	$('.nav-responsivo').slideToggle(300);
});

document.querySelector('.foto').addEventListener('click', function(){

});

$('.foto').on('click', function(event) {
	event.preventDefault();
});


function iconeMenu(){
	$(this).toggleClass('scale-up');
	$(this).toggleClass('scale-down');

	if(click == false)
	{
		click = true;
	}
	else
	{
		click = false;
	}

	if(click == false)
	{	
		$('.bar-menu:nth-child(2)').removeClass('tri-menu');
	}

	$('.bar-menu:nth-child(1)').toggleClass('cima-centro');

	$('.bar-menu:nth-child(3)').toggleClass('baixo-centro');

	if(click == true)
	{		
		$('.bar-menu:nth-child(2)').addClass('tri-menu');
	}
}
