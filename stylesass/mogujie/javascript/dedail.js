$(function(){
	var str = location.search;
	var arr = str.split("=");
	var Id = arr[1].slice(3,10);
	
	$.getJSON("json/guessLikes.json",function(data){
		//console.log(data[Id][0].image);
		var $data = data[Id][0];
		
		$(".mDlfContent .detailName").text("");
		$(".mDlfContent .detailName").append($data.title);
		
		$(".mDlfContent .detailPrice .noThrough").text("");
		$(".mDlfContent .detailPrice .noThrough").append($data.price);
		
		$(".mDlfContent .detailPrice .through").text("");
		$(".mDlfContent .detailPrice .through").append($data.orgPrice);
		
		$(".mDlfContent .detailPrice .salemore").text("");
		$(".mDlfContent .detailPrice .salemore").append($data.sale);
		
		$(".mDlfContent .detailPrice .p_num").text("");
		$(".mDlfContent .detailPrice .p_num").append($data.appraise);
		
		$(".mDlfContent .detailShare .de_collect").text("");
		$(".mDlfContent .detailShare .de_collect").append($data.coll);
		
		$(".mDlfContent .wearNumber .has").text("");
		$(".mDlfContent .wearNumber .has").append($data.has);
		
		$("#bgTab").css({"background":"url('"+$data.bgImg+"')"})
		
		$(".WearColor dd").children().remove();
		$(".mDlfImg .goodsImg ul").children().remove();
		$(".mDlfImg .big_img").attr("src",$data.img["img1"]);
		
		
		$.each($data.img, function(index) {
			var $ol = $("<ol><span class='iconfont'></span><img src='"+$data.img[index]+"' alt=''></ol>");
			var $li = $("<li><img src='"+$data.img[index]+"' alt=''></li>");
			$(".WearColor dd").append($ol);
			$(".mDlfImg .goodsImg ul").append($li);
		});
		
		$.each($(".mDlfImg .goodsImg ul li"), function(index) {
			$(".mDlfImg .goodsImg ul li").eq(index).hover(function(){
				var $src = $(this).children("img").attr("src");
				$(".mDlfImg .big_img").attr("src",$src);
			})
		});
		
		$(".mDrg ul").children().remove();
		$.each($data.rgImg, function(index) {
			var $li = $("<li><a href=''><img src='"+$data.rgImg[index]+"' alt=''><p>￥54.00</p></a></li>");
			$(".mDrg ul").append($li);
		});
		
		
		function changeBorder(ele,clas){
			$.each($(ele),function(index){
				$(ele).eq(index).click(function(){
					/*if($(this).hasClass("icon-duihao")){
						$(".icon-duihao").css({"display":"block"}).siblings().css({"display":"none"});
					}*/
						$(this).toggleClass(clas).siblings().removeClass(clas);
						$(this).children("span").toggleClass("icon-duihao").parent().siblings().children("span").removeClass("icon-duihao");
				})
			});
		};
		changeBorder(".wearSize dd span","active");
		changeBorder(".WearColor dd ol","acShow");
		
		//var num = 1;
		$(".wearNumber .add").click(function(){
			var value = $("#changeNumber").val();
			value++;
			$("#changeNumber").val(value);
		});
		
		$(".wearNumber .subtract").click(function(){
			var value = $("#changeNumber").val();
			value--;
			if(value < 1){
				value = 1;
			}
			$("#changeNumber").val(value);
		})
	});
})
