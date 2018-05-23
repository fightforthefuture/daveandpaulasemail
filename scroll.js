$(function(){

	var sticky_navigation_offset_top = $('.across').offset().top;
	

	var sticky_navigation = function(){
		var scroll_top = $(window).scrollTop(); // our current vertical position from the top
		
		if (scroll_top > sticky_navigation_offset_top) { 
			$('.across').css({ 'position': 'fixed', 'top':0, 'left':0, 'right':0 });
		  $('#fixiefix').css({'margin-top': 560});
		} else {
			$('.across').css({ 'position': 'relative', 'top':0 }); 
			$('#fixiefix').css({'margin-top': 0});
		}   
	};
	
	sticky_navigation();
	
	$(window).scroll(function() {
		 sticky_navigation();
	});	
});
