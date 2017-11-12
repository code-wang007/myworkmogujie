$(function(){
	$.get("json/foot.json",function(data){
		
		for(var i = 32260; i <= 32263; i++){
			var $data = data.data[i].list;
			var $div = $("<div><h4></h4><ul></ul></div>");
			
			$div.children("h4").append($data[0].title);
			for(var j = 1; j < $data.length; j++){
				if(i == 32260){
					var $li = $("<li><a href=''></a></li>");
					$li.children("a").append($data[j].title);
					$div.children("ul").append($li);
				}else{
					var $li = $("<li><em></em></li>");
					$li.children("em").append($data[j].title);
					$div.children("ul").append($li);
				}
			}
			$(".help").append($div);
		};
		
		$.each(data.data["32159"].list, function(index) {
			var $data = data.data["32159"].list;
			var $con = $("<a href=''></a><span>|</span>");
			
			$con.eq(0).append($data[index].title);
			$("#foot p").eq(0).append($con);
		});
		
		$.each(data.data["32163"].list, function(index) {
			var $data = data.data["32163"].list;
			var $con = $("<li><a href=''></a></li>");
			
			$con.children("a").append($data[index].title);
			if(index == $data.length-1){
				$con.children("a").css({"color":"#999"});
			}
			$("#foot p").eq(1).append($con);
		});
		
		$.each(data.data["32170"].list, function(index) {
			var $data = data.data["32170"].list;
			var $con = $("<b></b><a href=''></a><span>|</span>");
			
			$con.eq(0).append($data[index].title);
			$con.eq(1).append($data[index].subTitle);
			$("#foot p").eq(2).append($con);
		});
		
	});
});
