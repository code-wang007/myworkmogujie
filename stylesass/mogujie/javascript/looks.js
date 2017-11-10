$(function(){
	$.ajax({
		type:"get",
		url:"json/chuanda.json",
		async:true,
		success:function(data){
			var data = data.data.list;
			var $len = data.length;
			//console.log(data);
			function show(){
				$(".showRotate a").each(function(index){
					var $img = $(this).children(0);
					var $span = $(this).children(1);
					var num = Math.floor(Math.random()*$len);
					var $imgsrc = data[num].image;
					var $name = data[num].tagName;
					$span.append($name);
					$img.attr("src",$imgsrc);
				});
			};
			show();
			var timer = setInterval(function(){
				
			},2000);
		}
	});
	$.get("json/chuandaright.json",function(data){
		$.each(data.data, function(index) {
			//var data = data.data;
			//console.log($(".showMore a").eq(index).children(1)[0]);
			$(".showMore a").eq(index).children("img").attr("src",data.data[index].image);
			$(".showMore a").eq(index).children("span").append(data.data[index].tagName);
		});
	})
});
