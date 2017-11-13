$(function(){
	$(".regWord .normal").on("click",function(){
		$(this).css({"border-bottom":"solid 2px red"}).siblings().css({"border-bottom":"none"});
		console.log($(".regWord .diff"));
		$(".general").css({"display":"block"});
		$(".diff").css({"display":"none"});
		return false;
	});
	$(".regWord .nopsw").on("click",function(){
		$(this).css({"border-bottom":"solid 2px red"}).siblings().css({"border-bottom":"none"});
		$(".general").css({"display":"none"});
		$(".diff").css({"display":"block"});
		return false;
	});
	$(".regWord .saoImg").click(function(){
		$(".regImg").css({"display":"block"});
		$(".regWord").css({"display":"none"});
	});
	$(".regImg span").click(function(){
		$(".regImg").css({"display":"none"});
		$(".regWord").css({"display":"block"});
	});
	
		var oreg = document.getElementById("btn");
			var ouser = document.getElementById("txt");
			var opsw = document.getElementById("psw");
			var oremb = document.getElementsByClassName("mistake")[0];
			
			console.log(oremb);
			if(getCookie("message")){
				var objCookie = JSON.parse(getCookie("message"));
			}else{
				var objCookie = {};
			}
			console.log(objCookie);
			$("#middle #btn").click(function(){
				validate();
			});
	
	function validate(){
		console.log(111);
				var arr = [];
				var val1 = ouser.value;
				var val2 = opsw.value;
				for(var i in objCookie){
					arr.push(i);
				}
				//console.log(arr);
				for(var j = 0;j < arr.length;j++){
						if(val1 == arr[j]){
						for(var n = 0;n < arr.length;n++){
							if(val2 == arr[n]){
								//alert("登陆成功！");
								oremb.style.display = "none";
								oremb.innerHTML = "";
								ouser.blur();
								location.href = "home.html";
								break;
							}else{
								
								oremb.style.display = "block";
								oremb.innerHTML = "密码错误！请重新输入！";
								opsw.focus();
								opsw.value = "";
						    }
						}
						break;
					}else {
						console.log(222);
						oremb.style.display = "block";
						oremb.innerHTML = "您输入的账号不存在！请注册新账号！";
						ouser.focus();
					}	
				}
			}
	
});
