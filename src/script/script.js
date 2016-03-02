$(function(){
	var /*left_navbar = $('.navbar'),*/
	   /* isleft = false,*/
	    h = $('html'),
	    search_input = $('.search-input'),
	    brand = $('.brand'),
	    navbar = $('.navbar'),
	    s_hints = $('.s-hints');
	/*$('.more').on('click',function(){
		if(isleft === true){
			left_navbar.removeClass('open');
			return isleft = false;
		}
		left_navbar.addClass('open');
		isleft = true;
	});*/
	$('.search').on('click',function(){
		search_input.addClass('open');
		h.css('overflow','hidden');
	});
	$('.s-close').on('click',function(){
		search_input.removeClass('open');
		h.css('overflow','auto');
	});
	$('.input-group input').on('focus',function(){
		s_hints.css({opacity:1});
	});
	$(window).on('scroll',function(){
		if($(this).scrollTop()>80){
			brand.addClass('scroll');
			navbar.css('display','block')
				  .animate({'opacity':1},2000);
			$(this).off('scroll');
		}
	});
});
