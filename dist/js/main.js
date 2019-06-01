console.log("加载完成");
require.config({
	paths:{
		"jquery":"jquery-1.10.1.min",
		"jquery-cookie":"jquery.cookie",
		"headerBanner":"headerBanner",
		"bodyBanner":"bodyBanner",
		"index":"index"
	},
	//jquery-cookie模块依赖jquery开发，在这里声明依赖关系
	shim: {
		//配置jquery-cookie依赖于jquery
		"jquery-cookie": ["jquery"]
		//声明不适用AMD规范的模块
	/*	"parabola": {
			exports: "_"
		}*/
	}
});
require(["headerBanner","bodyBanner","index"],
	function(headerBanner,bodyBanner,index){
	headerBanner.headerBanner();
	bodyBanner.bodyBanner();
	index.index();
})