$(function(){
	$.get("json/meizhuang.json",function(data){
		console.log(data.data["32255"]);
		var num1 = 0;
		var num2 = 0;
		$.each(data.data["32255"].list, function(index) {
			var $data = data.data["32255"].list[index];
			if(num2 > 2){
				num = 0;
			}
			if(index%3 == 0){
				num1++;
			}
			$(".themlt").eq(num1).children(".bannerone").eq(num2).children(".content1").children("a").children("img").attr("src",$data.cover);
			
			num2++;
		});
	})
});
