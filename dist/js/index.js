define(["jquery","jquery-cookie"],function($){
	function index(){
		$(".cart").mouseover(function(){
			$(".cartContainer").css({
				display:"block",
				textAlign:"center",
				lineHeight:10
			});
			if (!($(".cartContainer").children().size())) {
				$(".cartContainer").html("当前购物车没有商品！");
			}
		});
		$(".cartContainer").mouseover(function(){
			$(".cartContainer").css("display","block");
		});
		$(".cart").mouseout(function(){
			$(".cartContainer").css("display","none");
		});
		$(".cartContainer").mouseout(function(){
			$(".cartContainer").css("display","none");
		});
	}

  //选项卡
    function tab(){
    	
    }
	return{
		index : index
	}
})