$(function(){

	var isShow = false,
		haveScrollClass = false,
	    brand = $('.brand'),
	    head = $('header'),
	    navbar = $('.navbar'),
	    triangle = $('.triangle');

	$('.more').on('click',function(){
		if(isShow){
			navbar.animate({'height':0,'opacity':1},'fast');
			return isShow = false;
		}

		navbar.css({'display':'block'});
		navbar.animate({'height':40,'opacity':1},'fast');
		isShow = true;
		return false;
	});

	$(window).on('scroll',function(){
		if($(this).scrollTop()>80 && !haveScrollClass){
			brand.addClass('scroll');
			triangle.css({'display':'none','opacity':0});
			navbar.css('display','block')
				  .animate({'opacity':1},1000);
			return haveScrollClass = true;
		}

		if ($(this).scrollTop()<=80 && haveScrollClass){
			brand.removeClass('scroll');
			triangle.css({'display':'block'})
					.delay(800)
					.animate({'opacity':1}, 'fast');
			haveScrollClass = false;
		}

	});


});
