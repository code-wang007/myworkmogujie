$(function(){
	$.ajax({
		type:"get",
		url:"json/imgjson.json",
		async:true,
		success:function(data){
			$.each(data.small, function(index) {
				var $a = $("<a href=''></a>");
				var $img = $("<img src='"+data.small[index].image+"' alt=''>");
				$a.append($img);
				$("#meeting").append($a);
			});
			$.each(data.big, function(index) {
				var $abig = $("<a href=''></a>");
				var $imgbig = $("<img src='"+data.big[index].image+"' alt=''>");				
				$abig.append($imgbig);
				$("#metbig").append($abig);
			});
		}
	});
})
