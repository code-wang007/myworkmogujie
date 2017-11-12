$(function(){
	var move = $(".choisect");
	//console.log($(".choisect").length);
	$.each(move, function(index) {
		var $a = move.eq(index).children("a");
		for(var i = 0; i < $a.length; i++){
			$a.eq(i).hover(function(){
				$(this).children("img").animate({"bottom":10},200);
			},function(){
				$(this).children("img").animate({"bottom":0},200);
			});
		}
		
	});
	$.each($(".choiselt"), function(index) {
		$(".choiselt").eq(index).children("p").eq(2).hover(function(){
			console.log($(this));
			$(this).animate({"bottom":20},300);
		},function(){
			$(this).animate({"bottom":0},300);
		});
		
		var lis = $(".choiselt").eq(index).children("ul").children("li");
		for(var i = 0; i < lis.length; i++){
			lis.eq(i).hover(function(){
				$(this).children("a").css({"background":"rgba(0,0,0,0.4)"});
			},function(){
				$(this).children("a").css({"background":"rgba(0,0,0,0.2)"});
			})
		}
	});
	
})
