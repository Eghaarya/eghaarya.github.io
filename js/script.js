// event pada saat link di klik
$('.page-scroll').on('click', function(e){


	var tujuan = $(this).attr('href');
	

	var elemenTujuan = $(tujuan);



	$('html').animate({
		scrollTop: elemenTujuan.offset().top -180
	}, 1000, 'easeInOutExpo');

	e.preventDefault();


});





// paralax

//about
$(window).on('load', function(){
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
	$('.smk').addClass('pMuncul');
	$('.nama').addClass('pMuncul');
	$('.keahlian').addClass('pMuncul');
	$('.brand').addClass('pMuncul');
	$('.jumbotron img').addClass('pMuncul');

})

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});
	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});
	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1 +'%)'
	});


	//portfolio
	if(wScroll > $('.portfolio').offset().top -250){
		$('.portfolio .thumbnail').each(function(i){
			setTimeout(function(){
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 400 * (i+1));
		});


		//
	}


});

