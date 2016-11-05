$(function(){

	var isShow = false,
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
		if($(this).scrollTop()>80){
			brand.addClass('scroll');
			triangle.css({'display':'none'});
			navbar.css('display','block')
				  .animate({'opacity':1},1000);
			$(this).off('scroll');
		}
	});


});
