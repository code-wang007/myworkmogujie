$(function(){
	$(".content").children(".conlis").hover(function(){
		if($(this).has(".sameul")){
			$(this).children(".sameul").slideDown();
		}
	},function(){
		$(this).children(".sameul").slideUp();
	});
	
	var str = location.search;
	var arr = str.split("=");
	if(arr[1] == "true"){
		$(".regi_succ").text("");
		$(".regi_succ").text("用户已登录").css({"color":"red"});
		//$(".topcon").css({"width":"425px"});
	}
	
	if(getCookie("shopCart")){
		var objCookie = JSON.parse(getCookie("shopCart"));
	}else{
		var objCookie = {};
	}
	var num = 0;
	for(var i in objCookie){
		num++;
	}
	if(num > 0){
		console.log(num);
		$(".carShowTitle").children("i").text(num);
		$(".carShowTitle").css({"display":"inline-block"})
	}
	
});
