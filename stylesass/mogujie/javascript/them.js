$(function(){
	/*$("#chooseThem .themlt").hover(function(){
		$("#chooseThem .btn").css({"display":"block"});
	},function(){
		$("#chooseThem .btn").css({"display":"none"});
	});*/
	$.get("json/meizhuang.json",function(data){
		//console.log(data.data["32255"].list);
		var num1 = 0;
		var num2 = 0;
		$.each(data.data["32255"].list, function(index) {
			var $data = data.data["32255"].list[index];
			var $unname = $("<p><img src='' alt='' class='logo'><span></span></p>");
			//console.log($data.list);
			if(num2 > 2){
				num2 = 0;
			}
			if(index%3 == 0){
				if(index == 0){
					num1 = 0;
				}else{
					num1++;
				}
			}
	
			$unname.children("img").attr("src",$data.avatar);
			$unname.children("span").append($data.uname);
			$(".themlt").eq(num1).children(".bannerone").eq(num2).append($unname);
			
			$(".themlt").eq(num1).children(".bannerone").eq(num2).children(".content1").children("a").children("img").attr("src",$data.cover);

			for(var i = 0; i < 4; i++){
				$(".themlt").eq(num1).children(".bannerone").eq(num2).children(".content2").children("a").eq(i).children("img").attr("src",$data.list[i].image);
				
				var $price = $("<p></p>");
				$price.append("￥"+ $data.list[i].discountPrice);
				$(".themlt").eq(num1).children(".bannerone").eq(num2).children(".content2").children("a").eq(i).append($price);
				$price.css({"text-align":"center","margin-top":5});
			};
			
			num2++;			
			
		});
		
		
		$.each(data.data["32259"].list, function(index) {
			var $data = data.data["32259"].list;
			var $child = $("<img src='' alt=''><p></p>")
			$(".themrt .thembottom").children("a").eq(index).append($child);
			$(".themrt .thembottom").children("a").eq(index).children("img").attr("src", $data[index].image)
			$(".themrt .thembottom").children("a").eq(index).children("p").append($data[index].title);
			
		});
		
		
	});
});
