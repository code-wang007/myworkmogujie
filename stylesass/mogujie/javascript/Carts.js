$(function(){
	
	if(getCookie("shopCart")){
		var objCookie = JSON.parse(getCookie("shopCart"));
	}else{
		var objCookie = {};
	}
	
	var str = location.search;
	var arr = str.split("=");
	//var Id = arr[1].slice(3,10);
	//console.log(Id);
	
	$.get("json/guessLikes.json",function(data){
		
			for(var i in objCookie){
				var ranNum = Math.floor(Math.random()*5);
				var $data = data[i][0];

				console.log(objCookie[i]);
				if(objCookie[i] > 1){
					var $hastotal = ($data.price*objCookie[i]).toFixed(2);
					var $div = $("<div class='shopMessage'><div class='shop_ck'><input type='checkbox' class='cked'/></div><p class='shopName'><img src='"+$data.img["img2"]+"'><a href='#' class='shopTitle'>"+$data.title+"</a></p><ol class='cart_cosize'><p class='cart_col'>颜色：<span>"+$data.clImg['climg'+ranNum]+"</span></p><p class='cart_si'>尺码：<span>"+$data.size["M"]+"</span></p></ol><ol class='cart_price'>"+$data.price+"</ol><ol class='cart_addred'><span class='jian' data-id='"+i+"'>-</span><input type='text' id='shopval' value='"+objCookie[i]+"' /><span class='jia' data-id='"+i+"'>+</span></ol><ol class='smalltotal'>"+$hastotal+"</ol><ol class='cart_delet'>删除</ol></div></div>");
					$("#shopCart_Show").append($div);	
				}else{
					var $hastotal = ($data.price*objCookie[i]).toFixed(2);
					var $div = $("<div class='shopMessage'><div class='shop_ck'><input type='checkbox' class='cked'/></div><p class='shopName'><img src='"+$data.img["img2"]+"'><a href='#' class='shopTitle'>"+$data.title+"</a></p><ol class='cart_cosize'><p class='cart_col'>颜色：<span>"+$data.clImg['climg'+ranNum]+"</span></p><p class='cart_si'>尺码：<span>"+$data.size["M"]+"</span></p></ol><ol class='cart_price'>"+$data.price+"</ol><ol class='cart_addred'><span class='jian' data-id='"+i+"'>-</span><input type='text' id='shopval' value='1' /><span class='jia' data-id='"+i+"'>+</span></ol><ol class='smalltotal'>"+$hastotal+"</ol><ol class='cart_delet'>删除</ol></div></div>");
					$("#shopCart_Show").append($div);
				}
				
			}
			
			
			$(".all_sel").click(function(){
				$(".cked").attr("checked",true);
			})
			$(".pay .pay_del").click(function(){
					$(".shopMessage").remove();
					for(var i in objCookie){
						delete objCookie[i];
					}
					var strCookie = JSON.stringify(objCookie);
					setCookie("shopCart",strCookie,-1);
			})
			
			
			var $totalp = 0
			for(var i = 0; i < $(".shopMessage").length; i++){
				 $totalp = $totalp + Number($(".shopMessage").eq(i).children(".smalltotal").text());
				$(".pay .pay_right .totalPrice").text($totalp);
				
				$(".shopMessage").eq(i).children(".cart_delet").click(function(){
					$(this).parent().remove();
					var $daId = $(this).parent().children(".cart_addred").children(".jian").attr("data-id");
					delete objCookie[$daId];
					var strCookie = JSON.stringify(objCookie);
					setCookie("shopCart",strCookie,7)
				});
				var $jian = $(".shopMessage").eq(i).children(".cart_addred").children(".jian");
				$jian.click(function(){
					var $jianchange = Number($(this).parent().children("#shopval").val());
					
					console.log($(".cart_price").text());
					$(this).parent().children("#shopval").val($jianchange-1);
					if($(this).parent().children("#shopval").val() < 1){
						$(this).parent().children("#shopval").val(1);
					}
					$(".smalltotal").text((Number($(this).parent().children("#shopval").val())*$(".cart_price").text()).toFixed(2));
					var $total_pce = 0;
					
					for(var i = 0 ; i < $(".smalltotal").length; i++){
						var $total_pce = $total_pce + Number($(".smalltotal").eq(i).text());
					}
					$(".pay .totalPrice").text($total_pce);
					
					var $daId = $(this).attr("data-id");
					objCookie[$daId] = Number(objCookie[$daId]) - 1;
					if(objCookie[$daId] < 1){
						delete objCookie[$daId];
					}
					var strCookie = JSON.stringify(objCookie);
					setCookie("shopCart",strCookie,7)
				});
				var $jia = $(".shopMessage").eq(i).children(".cart_addred").children(".jia");
				$jia.click(function(){
					var $jiachange = Number($(this).parent().children("#shopval").val());
					$(this).parent().children("#shopval").val($jiachange+1);
					$(".smalltotal").text((Number($(this).parent().children("#shopval").val())*$(".cart_price").text()).toFixed(2));
					var $total_pce = 0;
					for(var i = 0 ; i < $(".smalltotal").length; i++){
						var $total_pce = $total_pce + Number($(".smalltotal").eq(i).text());
					}
					$(".pay .totalPrice").text($total_pce);
					
					var $daId = $(this).attr("data-id");
					objCookie[$daId] = Number(objCookie[$daId]) + 1;
					
					var strCookie = JSON.stringify(objCookie);
					setCookie("shopCart",strCookie,7)
				});
			}
			
			if($(".totalPrice").text() != ""){
				$(".pay_right a").css({"background":"red"});
			}
			
			
			
			
			//objEach();
		//}
		
		/*function objEach(){
			for(var i in objCookie){
				if(i == "title"){
					$(".shopTitle").text($data.title);
				}
				if(i == "price"){
					$(".cart_price").text($data.price);
				}
				if(i == "1"){
					$(".cart_addred #shopval").val(objCookie["1"]);
				}
				for(var j in $data.img){
					if(i == j){
						$(".shopName").children("img").attr("src",$data.img[j]);
					}
				}
				for(var n in $data.clImg){
					if(i == n){
						$(".cart_cosize .cart_col").children("span").text($data.clImg[n]);
					}
				}
				for(var s in $data.size){
					if(i == s){
						$(".cart_cosize .cart_si").children("span").text($data.size[s]);
					}
				}
			}
		}*/
		
		
	})
	
});
