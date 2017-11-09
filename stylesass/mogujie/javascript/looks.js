$(function(){
	$.ajax({
		type:"get",
		url:"json/chuanda.json",
		async:true,
		success:function(data){
			var data = data.data.list;
			var $len = data.length;
			console.log(data);
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
	
});
