define(["jquery"],function($){
	function headerBanner(){
		var timer = null;
		var count = 0;
	    setInterval(function(){
			count ++;
			$(".head-ul").stop().animate({
				top:-120 * count
			},function(){
				if (count == 2) {
					$(".head-ul").css("top",0);
					count = 0;
				}
			});
		},5000);
	
	}
	return {
		headerBanner:headerBanner
	}
})