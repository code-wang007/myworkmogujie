$(function(){
	module("json/pinpai.json","品牌精选","#choiseNess .choiselt","#choiseNess .choisect","65333")
	$.get("json/pinpai.json",function(data){
		$.each(data.data["32484"].list, function(index) {
			var $datart = data.data["32484"].list;
			var $childrt = $("<img src='' alt=''>");
				$("#choiseNess .choisert").children("a").eq(index).append($childrt);
				$("#choiseNess .choisert").children("a").eq(index).children("img").attr("src",$datart[index].image)
		});
	})
});



