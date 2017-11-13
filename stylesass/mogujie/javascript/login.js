$(function(){
	var ouName = document.getElementById("userName");
			var ouMessage = document.getElementsByClassName("userMessage")[0];
			var opsw = document.getElementById("psw");
			var opswMessage = document.getElementsByClassName("pswMessage")[0];
			var oAlign = document.getElementById("align");
			var oaMessage = document.getElementsByClassName("alignMessage")[0];
			var oEmail = document.getElementById("email");
			var oEMessage = document.getElementsByClassName("emailMessage")[0];
			var oPhone = document.getElementById("phone");
			var opMessage = document.getElementsByClassName("phoneMessage")[0];
			var oruo = document.getElementsByClassName("ruo")[0];
			var opd = document.getElementsByClassName("pd")[0];
			var obtn = document.getElementsByClassName("btn")[0];
			var ockbox = document.getElementsByClassName("ckbox")[0];
			var oInput = document.getElementsByTagName("input");
			var odiv = document.getElementsByTagName("div");
			var arr = [];

			for(var i = 0; i < oInput.length; i++) {
				oInput[i].onfocus = fcs;
				oInput[i].onblur = blur;
			}

			function fcs() {
				this.parentNode.parentNode.style.borderColor = "#fff";
				this.parentNode.parentNode.style.boxShadow = "1px 1px 1px #90EE90";
			}

			function blur() {
				this.parentNode.parentNode.style.borderColor = "";
				this.parentNode.parentNode.style.boxShadow = "";
			}

			ouName.onchange = user;

			function user() {
				var regexp = /^[a-zA-Z_]\w{5,14}$/;
				var val = ouName.value;
				if(!regexp.test(val)) {
					ouMessage.style.display = "block";
					ouName.value = "";
				} else {
					ouMessage.style.display = "none";
					return true;
				}
				return false;
			}

			opsw.onchange = password;

			function password() {
				var regexp1 = /^\d{6,20}$/; //纯数字
				var regexp2 = /^[a-zA-Z]{6,20}$/; //纯字母
				var regexp3 = /^[a-zA-Z0-9]{6,20}$/; //字母和数字
				var regexp4 = /^[a-zA-Z0-9_]{5,19}$/; //字母、数字、下划线组合
				var val = opsw.value;
				opswMessage.style.display = "block";
				if(regexp1.test(val) || regexp2.test(val)) {
					oruo.innerHTML = "弱";
					oruo.style.display = "block";
					opd.innerHTML = "密码强度较弱";
					opd.style.color = "limegreen";
					return true;
				} else if(regexp3.test(val)) {
					oruo.style.display = "block";
					oruo.innerHTML = "中";
					opd.innerHTML = "密码强度中等";
					opd.style.color = "limegreen";
					return true;
				} else if(regexp4.test(val)) {
					oruo.style.display = "block";
					oruo.innerHTML = "强";
					opd.innerHTML = "密码强度较高";
					opd.style.color = "limegreen";
					return true;
				} else {
					opd.innerHTML = "密码格式为字母、数字、下划线，且以非数字开头，密码长度在6-20之间";
					opd.style.color = "blue";
					opsw.value = "";
					oruo.style.display = "none";
				}
				return false;
			}
			oAlign.onchange = repetion;

			function repetion() {
				var val1 = opsw.value;
				var val2 = oAlign.value;
				if(val1 != val2) {
					oaMessage.style.display = "block";
				} else {
					oaMessage.style.display = "none";
					return true;
				}
				return false;
			}
			oEmail.onchange = email;

			function email() {
				var regexp = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
				var val = oEmail.value;
				if(!regexp.test(val)) {
					oEMessage.style.display = "block";
					oEmail.value = "";
				} else {
					oEMessage.style.display = "none";
					return true;
				}
				return false;
			}
			oPhone.onchange = phone;

			function phone() {
				var regexp = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
				var val = oPhone.value;
				if(!regexp.test(val)) {
					opMessage.style.display = "block";
					oPhone.value = "";
				} else {
					opMessage.style.display = "none";
					return true;
				}
				return false;
			}
			var obj = {};
			var arr = [];
			obtn.onclick = function() {
				if(user() != true) {
					ouName.focus();
				} else if(password() != true) {
					opsw.focus();
				} else if(repetion() != true) {
					oAlign.focus();
				} else if(email() != true) {
					oEmail.focus();
				} else if(phone() != true) {
					oPhone.focus();
				} else if(ockbox.checked != true) {
					alert("请阅读蘑菇街注册协议，并选中选框！");
				} else {
					arr.push(ouName.value);
					arr.push(opsw.value);
					arr.push(oAlign.value);
					arr.push(oEmail.value);
					arr.push(oPhone.value);
					console.log(arr);
					for(var i = 0; i < arr.length; i++) {
						if(!obj[arr[i]]) {
							obj[arr[i]] = 1;
						}
					}
					var strCookie = JSON.stringify(obj);
					setCookie("message", strCookie, 7);
					obtn.href = "register.html";
				}
			};
});
