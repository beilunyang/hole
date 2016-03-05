$(function(){
	var isShow = false,
	    /*h = $('html'),
	    search_input = $('.search-input'),*/
	    brand = $('.brand'),
	    navbar = $('.navbar');/*,
	    s_hints = $('.s-hints');*/

	$('.more').on('click',function(){
		if(isShow){
			navbar.animate({'height':0,'opacity':1},'fast');
			return isShow = false;
		}

		navbar.css({'display':'block'});
		navbar.animate({'height':'100px','opacity':1},'fast');
		isShow = true;
	});

	/*$('.search').on('click',function(){
		search_input.addClass('open');
		h.css('overflow','hidden');
	});
	$('.s-close').on('click',function(){
		search_input.removeClass('open');
		h.css('overflow','auto');
	});*/

	/*$('.input-group input').on('focus',function(){
		s_hints.css({opacity:1});
	});*/

	$(window).on('scroll',function(){
		if($(this).scrollTop()>80){
			brand.addClass('scroll');
			navbar.css('display','block')
				  .animate({'opacity':1},1000);
			$(this).off('scroll');
		}
	});
});
