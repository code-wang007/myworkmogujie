$(function(){
	var str = location.search;
	var arr = str.split("=");
	var Id = arr[1].slice(3,11);
	var $index = arr[1].charAt(10);

	$.getJSON("json/guessLikes.json",function(data){
		console.log(data)
		/*var newarr = [];
		for(var i in data){
			newarr.push(i);
		}
		for(var j = 0; j < newarr.length; j++){
			if($index == j){
				
			}
		}*/
		var $data = data[$index][0];
		
		
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
			var $ol = $("<ol><span class='iconfont'></span><img src='"+$data.img[index]+"' alt=''><span class='col'>"+("cl"+index)+"</span></ol>");
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
						$(this).toggleClass(clas).siblings().removeClass(clas);
						$(this).children("span").toggleClass("icon-duihao").parent().siblings().children("span").removeClass("icon-duihao");
						
						if($(this).children("span").hasClass("icon-duihao")){
							var $src = $(this).children("img").attr("src");
							$(".mDlfImg .big_img").attr("src",$src);
						}else{
							var $src = $data.img["img1"];
							$(".mDlfImg .big_img").attr("src",$src);
						}
				})
			});
		};
		changeBorder(".wearSize dd span","active");
		changeBorder(".WearColor dd ol","acShow");
		
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
		
		//加入购物车
			$.each($(".wearSize dd span"),function(index){
				$(".wearSize dd span").eq(index).click(function(){
					if($(this).hasClass("active")){
						$(".addCart .tishi").css({"display":"none"});
					}
				})
			});
			$.each($(".WearColor dd ol"),function(index){
				$(".WearColor dd ol").eq(index).click(function(){
					if($(this).hasClass("acShow")){
						$(".addCart .tishi").css({"display":"none"});
					}
				})
			});
		
		var flag1 = false,flag2 = false;
		$(".addCart #cartBtn").click(function(){
			var arr = [];
			var obj = {};
			var priceVal = "price";
			var numberVal = $("#changeNumber").val();
			var titleVal = "title";

			
			for(var i = 0; i <　$(".wearSize dd span").length; i++){
				if($(".wearSize dd span").eq(i).hasClass("active")){
					var $size = $(".wearSize dd span").eq(i).html();
					console.log($size);
					flag1 = true;
					break;
				}
			};
			for(var i = 0; i <　$(".WearColor dd ol").length; i++){
				if($(".WearColor dd ol").eq(i).hasClass("acShow")){
					var $src = "img"+Number(i+1);
					var $col = $(".WearColor dd ol").eq(i).children(".col").html();
					console.log($src);
					flag2 = true;
					break;
				}
			};
			if($size == null){
				var $contxt = "请选择尺寸";
				$(".addCart .tishi").text("");
				$(".addCart .tishi").append($contxt).css({"display":"block"});
			}
			if($col == null){
				var $contxt = "请选择颜色";
				$(".addCart .tishi").text("");
				$(".addCart .tishi").append($contxt).css({"display":"block"});
			}
			
			var colorVal = $col;
			var sizeTxt = $size;
			console.log(sizeTxt);
			var imgSrc = $src;
			
			arr.push(Id);
			console.log(arr);
			
			if(getCookie("shopCart")){
				var obj = JSON.parse(getCookie("shopCart"));
			}else{
				var obj = {};
			}
			var numVal = Number($("#changeNumber").val());
			
			for(var j = 0; j < arr.length; j++){
				if(!obj[arr[j]]){
					obj[arr[j]] = numVal;
				}else{
					obj[arr[j]] = numVal + obj[arr[j]];
				}
			}
			console.log(obj);
			var strCookie = JSON.stringify(obj);
			setCookie("shopCart",strCookie,7);
			
			if($(".regi_succ").html() == "用户已登录"){
				if(flag1&&flag2){
					location.href = "shoppingCart.html?='"+Id+"'";
				}
			}else{
				if(flag1&&flag2){
					$("#pleaseregister").css({"display":"block"});
					$("#pleaseregister div").click(function(){
					$("#pleaseregister").css({"display":"none"});
					});
					$("#pleaseregister a").attr("href","register.html?='"+Id+"'")
				}
				
			}
			
		})
		
	});
})
