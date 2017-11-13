//动态创建<script>添加到DOM   函数封装
		function loadScript(url){
			//url外部js文件路径
			var script = document.createElement("script");
			script.src = url;
			script.type = "text/javascript";
			document.body.appendChild(script);
		}

//检测屏幕宽度（可视区域）
		function getViewPortWidth(){
			return document.documentElement.clientWidth || document.body.clientWidth; //宽度
		}
		function getViewPortHeight(){
			return document.documentElement.clientHeight || document.body.clientHeight; //高度
		}
//封装浏览器视口获取
    function client() {
        if(window.innerWidth != null)  // ie9 +  最新浏览器
        {
            return {
                width: window.innerWidth,
                height: window.innerHeight
            }
        }
        else if(document.compatMode === "CSS1Compat")  // 标准浏览器
        {
            return {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            }
        }
        return {   // 怪异浏览器
            width: document.body.clientWidth,
            height: document.body.clientHeight

        }
    }
    
  	
//  封装匀速运动
    function animate(obj,target){
        clearInterval(obj.timer);  // 先清除定时器
        var speed = obj.offsetLeft < target ? 5 : -5;  // 用来判断 应该 +  还是 -
        obj.timer = setInterval(function() {
            var result = target - obj.offsetLeft; // 因为他们的差值不会超过5
            obj.style.left = obj.offsetLeft + speed + "px";
            if(Math.abs(result)<=5)  // 如果差值不小于 5 说明到位置了
            {
                clearInterval(obj.timer);
                obj.style.left = target + "px";  // 有5像素差距   我们直接跳转目标位置
            }
        },30)
    }

//获取属性样式  封装方法
		function getStyle(obj,attr){
			if(obj.currentStyle){
				return obj.currentStyle[attr];//IE
			}
			return getComputedStyle(obj,false)[attr];//主流浏览器
		}

//跨浏览器兼容问题封装    event  target  preventDafult  addHandler  removeHandler
			var EventUtil = {
				//event对象
				getEvent: function(event){
					return event ? event : window.event;
				},
				//目标target
				getTarget: function(event){
					return event.target || event.srcElement;
				},
				//阻止默认行为
				preventDefault: function(event){
					if(event.preventDefault){
						event.preventDefault();
					} else{
						event.returnValue = false;
					}
				},
				//阻止事件冒泡
				stopPropagation: function (e){
					window.event? window.event.cancelBubble = true : e.stopPropagation();
				},
				//添加事件处理程序
				addHandler: function(element,type,handler){
					if(element.addEventListener){
						element.addEventListener(type,handler,false);
					}else if(element.attachEvent){
						element.attachEvent("on" + type, handler);
					}else{
						element["on" + type] = handler;
					}
				},
				removeHandler: function(element,type,handler){
					if(element.removeEventListener){
						element.removeEventListener(type,handler,false);
					}else if(element.attachEvent){
						element.detachEvent("on" + type, handler);
					}else{
						element["on" + type] = handler;
					}
				}
			};
			
//cookie封装
			function setCookie(name, value, day) {
				var oDate = new Date();
				oDate.setDate(oDate.getDate() + day);
				document.cookie = name + "=" + value + ";expires=" + oDate;
			
			}
			
			function getCookie(name) {
				var strCookie = document.cookie;
				//需要对字符串进行分割（;）
				var arrCookie = strCookie.split("; ");
				//console.log(arrCookie);
				for(var i = 0; i < arrCookie.length; i++) {
					//把数组中的每一项以=分割，判断形参和分割后的数组中的第一元素是否相等，相等则返回第二个元素
					var arr = arrCookie[i].split("=");
					if(arr[0] == name) {
						return arr[1];
					}
				}
			}
			
			function removeCookie(name) {
				setCookie(name, 1, -1);
			}
			
//Date封装
			var dateUtil = {
	
				isLeapYear:function(year){
					//判断是否为闰年
					if(year%4==0&&year%100!=0 || year%400 == 0){
						return true;
					}
					return false;
				},
				dateFormat:function(date,str){
					//将日期格式化
					//var date = new Date();
					var year = date.getFullYear();
					var month = date.getMonth()+1;
					var day = date.getDate();
					var hour = date.getHours();
					var min = date.getMinutes();
					
					month = month < 10 ? "0"+month : month;
					day = day < 10 ? "0"+day : day;
					var ss = year+str+month+str+day+"　"+hour+":"+min;
					console.log(ss);
					return ss;
					
				},
				getDays:function(date,month){
					//获得某个月份的天数
					var year = date.getFullYear();
					switch(month){
						case 2:
							if(dateUtil.isLeapYear(year)){
								return 29;
							}
							return 28;
						case 4:
						case 6:
						case 9:
						case 11:
							return 30;
						default:
							return 31;
					}	
					
				},
				getDiffDays:function(date1,date2){
					//得到两个日期相差的天数
					var ms = date2-date1;
					var day = Math.floor(ms/1000/3600/24);
					var hour =Math.floor(ms/1000/3600%24);
					var minute = Math.floor(ms/1000/60%60);
					var second = Math.floor(ms/1000%60);
					var str = "相差"+day+"天"+hour+"小时"+minute+"分"+second+"秒";
					return str;
				},
				getNDay:function(date,n){
					//得到n天以后的日期
					 date.setDate(date.getDate()+n);
					 return date;
					
				}
			}

			
						
			