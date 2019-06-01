define(["jquery"],function($){
	function bodyBanner(){
		$(function(){
			var oUl = $(".banner-pic").find("ul");
			var aLis = oUl.find("li");
			var aDivs = $(".banner-index").find("div");
			var left = $(".left");
			var right = $(".right");

			var isNow = 0;
			left.click(function(){
				clearInterval(timer);
				isNow--;
				aDivs.attr("class","").eq(isNow).attr("class","active");
				 oUl.stop().animate({
				 	left:- aLis.eq(0).width() * isNow
				 },function(){
				 	 if (isNow < 1) {
					 	isNow = aDivs.size();
					 	left:- aLis.eq(0).width() * isNow;
					 	aDivs.attr("class","").eq(0).attr("class","active");
					 }
				 });
			})
			right.click(function(){
				clearInterval(timer);
				isNow++;
				 aDivs.attr("class","").eq(isNow).attr("class","active");
				 oUl.stop().animate({
				 	left:- aLis.eq(0).width() * isNow
				 },function(){
				 	 if (isNow == aDivs.size()) {
					 	isNow = 0
					 	aDivs.eq(0).attr("class","active");
					 	oUl.css("left",0);
					 }
				 });
			})
			function tab(){
				aDivs.attr("class","").eq(isNow).attr("class","active");
				if (isNow == aDivs.size()) {
					aDivs.eq(0).attr("class","active");
				}
				oUl.stop().animate({
					left:- aLis.eq(0).width() * isNow
				},function(){
					if (isNow == aDivs.size()) {
						oUl.css("left",0);
						isNow = 0;
					}
				})
			}
			clearInterval(timer);
			var timer = setInterval(function(){
				isNow++;
				tab();
			},5000);


			oUl.mouseenter(function(){
				clearInterval(timer);
			})

			oUl.mouseleave(function(){
				timer = setInterval(function(){
					isNow++;
					tab();
				}, 2000);
			});
			aDivs.mouseover(function(){
				isNow = $(this).index();
				tab();
			});
		})
	}
	return {
		bodyBanner: bodyBanner
	}
});