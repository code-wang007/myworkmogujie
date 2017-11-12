$(function(){
	$.get("json/chanlunbo.json",function(data){
		//console.log(data.data.itemList[0]);
		var data = data.data.itemList;
		
		for(var i = 0; i < 15; i++){
			var $divparent = $("<div class='divnum'></div>");
			
			for(var j = i*5; j < i*5+5; j++){
				var $divchild = $("<div><a href='' class='aone'><img src='' alt=''></a><a href='' class='atwo'></a><p><span></span><span></span></p></div>");
				if(j == data.length){
					break
				}
				$divchild.children("a").eq(1).append(data[j].title);
				$divchild.children("p").children("span").eq(0).append("￥"+data[j].salePrice);
				$divchild.children("p").children("span").eq(1).append("￥"+data[j].price);
				$divchild.children("a").children("img").attr("src",data[j].image);
				$($divparent).append($divchild);
				$(".imgrg").append($divparent);
			}
		};
		$(".divnum").eq(0).css({"display":"block"});
		
		var current = 0;
		var flag = true;
		$(".divnum").eq(0).animate({"left":15},800);
		var timer = setInterval(function(){
			move();			
		},3000);
		/*$(".icon-arrow-left1").on("click",function(){
			flag = false;
			clearInterval(timer);
			current -= 2;
			move();
			flag = true;
			timer = setInterval(function(){
				move();			
			},3000);
		});
		*/
		function move(){
			current++;
			/*
			console.log(current);
			if(flag == false){
				if(current == -1){
					current = $(".divnum").length-1;
					//$(".divnum").eq(current).animate({"left":-985});
				}
				
				$(".divnum").eq(current).animate({"display":"none","left":0},function(){
					$(".divnum").eq(current).animate({"display":"block","left":985},600);
					$(".divnum").eq(current-1).animate({"display":"none","left":0},600);
				});
				
			}*/
			
			//if(flag){
				if(current == $(".divnum").length){
					current = 0;
				}
				$(".divnum").eq(current).animate({"display":"block","left":15},600);
				$(".divnum").eq(current-1).animate({"left":-1000},600,function(){
					$(".divnum").eq(current-1).css({"display":"none","left":1010});
				});
			//}
			
		};
		
	});
});
