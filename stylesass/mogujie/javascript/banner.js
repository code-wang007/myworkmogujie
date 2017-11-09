$(function(){
	var bgdata = ["#d2195d","#fb4b4c","#f93f99","#ff6ca6","#ff00e9","#b747f2","#ffefc3"];
	var bgdatacome = ["#fee0f0","#fedbdb","#fee0f0","#fed9ea","#fee0f0","#f0dafc","#fffcf3"]
	var $lis = $("#bannerwrap .banner .bannermove li");
	var index = 0;
	var timer = setInterval(banner,3000);
	$(".bannerRounds li").eq(0).css({"background":"#ff3366"});
	$("#bannerwrap").css({"background":bgdata[0]});
	$(".welcome div").css({"background":bgdatacome[0]});
	$("#bannerwrap .classify").css({"background":bgdatacome[0]});
	function banner(){
		index++;
		if(index==$lis.size()){
			index = 0;			
		}
		$(".welcome div").css({"background":bgdatacome[index]});
		$("#bannerwrap").css({"background":bgdata[index]});
		$("#bannerwrap .classify").css({"background":bgdatacome[index]});
		$lis.eq(index).fadeIn(300).siblings().fadeOut(300);
		$(".bannerRounds li").eq(index).css({"background":"#ff3366"}).siblings().css({"background":"#e7e7e7"});
	}
		$("#bannerwrap .banner").mouseover(function(e){
			/*var e = e || window.event;
			e.stopPropagation();
			e.preventDefault();*/
			clearInterval(timer);
		});	
		$(".banner .bannerRounds li").mouseover(function(){
			clearInterval(timer);
			$(this).css({"background":"#ff3366"}).siblings().css({"background":"#e7e7e7"});
			index = $(this).index()-1;
			banner();
			return false;
		});
		$("#bannerwrap .banner").mouseout(function(){
				clearInterval(timer);
				timer = setInterval(banner,3000);
				return false;
		});
})
