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
		
	});
	
	
	
});
