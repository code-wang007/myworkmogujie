function module(url, name, elemlt,elemrt, jsonId) {
	$.get(url, function(data) {
		$.each(data.data, function(index) {
			if(data.data[index].list[0].title == name) {
				var $title = data.data[index].list[0].title;
				var $subtitle = data.data[index].list[0].subTitle;
				var $image = data.data[index].list[0].image;
				$(elemlt).children("p").eq(0).append($title);
				$(elemlt).children("p").eq(1).append($subtitle);
				$(elemlt).children("p").eq(2).children("img").attr("src", $image);
			}
		});
		$.each(data.data[jsonId].list, function(index) {
			var $data = data.data[jsonId].list;
			var $child = $("<p></p><p></p><img src='' alt=''>")
			$(elemrt).children("a").eq(index).append($child);
			$(elemrt).children("a").eq(index).children("img").attr("src", $data[index].image)
			$(elemrt).children("a").eq(index).children("p").eq(0).append($data[index].title);
			$(elemrt).children("a").eq(index).children("p").eq(1).append($data[index].viceTitle);
		});
	})
};

function plate(url,jsonId,element){
	$.get(url,function(data){
		$.each(data.data[jsonId].list, function(index) {
			var $data = data.data[jsonId].list;
			var $ele = $("<a href=''><img src='' alt=''/></a>");
			$ele.children("img").attr("src",$data[index].image);
			$(element).append($ele);
		});
	});
};

function goodsList(data){
			$.each(data.result.wall.docs, function(index) {
			//console.log(data.result.wall.docs.length);
			//console.log(index);
			var $data = data.result.wall.docs;
			var $border = $("<div class='bord'></div>");
			var $hide = $("<div class='hide'>找相似</div>");
			var $div = $("<div class='goodsList'><a href=''><img src='' class='bigimgs'/><img src='' class='toplogo'/><div class='goodsMessage'><p class='word'></p><img src='' class='liangpin'/><p class='price'><span></span><span></span><span><img src='' alt=''></span><span></span></p></div></a></div>");
								
				$div.children("a").children(".bigimgs").attr("src",$data[index].img);
				if($data[index]["lefttop_taglist"].length > 0){
					$div.children("a").children(".toplogo").attr("src",$data[index]["lefttop_taglist"][0].img);
				}else{
					$div.children("a").children(".toplogo").remove();
				}
				if((index+1)%5 == 0){
					$div.css({"margin-right":0});
				}
				
				if($data[index]["leftbottom_taglist"].length > 0){
					$div.children("a").children(".goodsMessage").children(".liangpin").attr("src",$data[index]["leftbottom_taglist"][0]);
					$div.children("a").children(".goodsMessage").children(".word").css({"height":22,"white-space":"nowrap","overflow":"hidden","text-overflow":"ellipsis"});
				}else{
					$div.children("a").children(".goodsMessage").children(".liangpin").remove();
					$div.children("a").children(".goodsMessage").children(".word").css({"height":40,"word-break":"break-all"})
				};
				 
				$div.children("a").children(".goodsMessage").children(".word").append($data[index].title);
				$div.children("a").children(".goodsMessage").children(".price").children("span").eq(0).append("￥"+$data[index].price);
				$div.children("a").children(".goodsMessage").children(".price").children("span").eq(1).append("￥"+$data[index].orgPrice);
				$div.children("a").children(".goodsMessage").children(".price").children("span").eq(2).children("img").attr("src","//s18.mogucdn.com/p2/160908/upload_27g4f1ch6akie83hacb676j622b9l_32x30.png");
				$div.children("a").children(".goodsMessage").children(".price").children("span").eq(3).append($data[index].sale);
				
				$div.append($border);
				$div.append($hide);
				$("#anyGoods").append($div);
				
				$(".goodsList").hover(function(){
					$(this).children(".hide").css({"display":"block"});
					$(this).children(".bord").css({"border":"solid 1px red"});
				},function(){
					$(".hide").css({"display":"none"});
					$(this).children(".bord").css({"border":"none"})
			});
			
		});
};
