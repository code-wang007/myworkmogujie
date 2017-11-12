$(function() {
	//接口
	var port = [
		"http://mce.mogujie.com/jsonp/makeup/3?pid=18784&callback=?&_=1510454506551",
		"http://mce.mogujie.com/jsonp/makeup/3?pid=18895&callback=?&_=1510454506626",
		"http://mce.mogujie.com/jsonp/makeup/3?pid=18907&callback=?&_=1510454506795",
		"http://mce.mogujie.com/jsonp/makeup/3?pid=18917&callback=?&_=1510454510172",
		"http://mce.mogujie.com/jsonp/makeup/3?pid=18922&callback=?&_=1510454507263",
		"http://mce.mogujie.com/jsonp/makeup/3?pid=18913&callback=?&_=1510454554617",
		"http://mce.mogujie.com/jsonp/makeup/3?pid=18926&callback=?&_=1510454507350",
		"http://mce.mogujie.com/jsonp/makeup/3?pid=18930&callback=?&_=1510454507990",
		"http://mce.mogujie.com/jsonp/makeup/3?pid=18934&callback=?&_=1510454508236",
		"http://mce.mogujie.com/jsonp/makeup/3?pid=18939&callback=?&_=1510454507822",
		"http://mce.mogujie.com/jsonp/makeup/3?pid=18943&callback=?&_=1510454508531",
		"http://mce.mogujie.com/jsonp/makeup/3?pid=18949&callback=?&_=1510454510474",
		"http://mce.mogujie.com/jsonp/makeup/3?pid=18957&callback=?&_=1510454510648",
		"http://mce.mogujie.com/jsonp/makeup/3?pid=18961&callback=?&_=1510454510981"
	]

	$.each(port, function(num) {
			$(".caption").children(".list").eq(num).children("a").eq(0).css({
				"font-weight": 600
			});
			$.getJSON(port[num], function(data) {
						//console.log(data.data);
						
						var dls = $(".caption dl");
						for(var j = 0; j < dls.length; j++){
							dls.eq(j).hover(function() {
								$(this).children(".captionShow").show();
								$(this).children(".recommend").show();	
							}, function() {
								/*$(".captionShow").children().hide();
								$(".recommend").children().hide();*/
								$(this).children(".captionShow").hide();
								$(this).children(".recommend").hide();
							});
						}
						

						navrun(data);
						function navrun(data) {
							var $h2text = $(".caption").children("dl").eq(num).children("a").eq(0).text();
							var $h2ele = $("<h2></h2>");
							$h2ele.css({
								"font-weight": 800
							});
							$h2ele.append($h2text);
							$(".captionShow").eq(num).append($h2ele);

	var attrName = ["topic1", "topic2", "topic3", "brand", "guessLike"];
	for(var i = 0; i < attrName.length; i++) {
		if(i < attrName.length - 1) {
			//var $div = $("<div class='captionShow'></div>")
			var $con = $("<dl><dt><a href=''></a><a href=''></a></dt><dd></dd></dl>");
			$con.children("dt").children("a").eq(0).append(data.data[attrName[i]].info.title);
			$con.children("dt").children("a").eq(0).css({
				"font-weight": "normal"
			});

			$con.children("dt").children("a").eq(1).append("更多" + ">");
			$(".captionShow").eq(num).append($con);
			navShow(attrName[i], i, attrName, $con);
			//$(".classify").append($div);
		} else {
			//var $rec = $("<div class='recommend></div>'")
			var $intro = $("<h2></h2><h3></h3>");
			$intro.eq(0).append("为你推荐");
			$intro.eq(1).append("根据你购买浏览记录专门推荐");
			$(".recommend").eq(num).append($intro);
			navShow(attrName[i], i, attrName, $con);
			//$(".classify").append($rec);
		}
	};
};

			function navShow(attr, i, attrName, $con) {
				$.each(data.data[attr].list, function(index) {
					if(i == attrName.length - 2) {
						var $dda = $("<a href=''><img src='' alt='' class='brand'></a>")
						$dda.children("img").attr("src", data.data[attr].list[index].image);
					} else {
						var $dda = $("<a href=''></a>")
						$dda.append(data.data[attr].list[index].title);
					}
					if(i == attrName.length - 1) {
						var $introimg = $("<a href=''><img src='' alt=''><p></p><p></p></a>");
						$introimg.children("p").eq(0).append(data.data[attr].list[index].title);
						$introimg.children("p").eq(1).append("￥" + data.data[attr].list[index].discountPrice);
						$introimg.children("img").attr("src", data.data[attr].list[index].image);
						$(".recommend").eq(num).append($introimg);
					}
					$con.children("dd").append($dda);

				});
			};

		});
	});

});

/*****************************************接口*****************************************************/
//电器 http://mce.mogujie.com/jsonp/makeup/3?pid=18961&callback=jsonp18961&_=1510454510981
//食品 http://mce.mogujie.com/jsonp/makeup/3?pid=18957&callback=jsonp18957&_=1510454510648
//母婴 http://mce.mogujie.com/jsonp/makeup/3?pid=18949&callback=jsonp18949&_=1510454510474
//女鞋 http://mce.mogujie.com/jsonp/makeup/3?pid=18917&callback=jsonp18917&_=1510454510172
//家居 http://mce.mogujie.com/jsonp/makeup/3?pid=18943&callback=jsonp18943&_=1510454508531
//美妆 http://mce.mogujie.com/jsonp/makeup/3?pid=18934&callback=jsonp18934&_=1510454508236
//运动 http://mce.mogujie.com/jsonp/makeup/3?pid=18930&callback=jsonp18930&_=1510454507990
//配饰 http://mce.mogujie.com/jsonp/makeup/3?pid=18939&callback=jsonp18939&_=1510454507822
//包包 http://mce.mogujie.com/jsonp/makeup/3?pid=18926&callback=jsonp18926&_=1510454507350
//男友 http://mce.mogujie.com/jsonp/makeup/3?pid=18922&callback=jsonp18922&_=1510454507263
//裤子 http://mce.mogujie.com/jsonp/makeup/3?pid=18907&callback=jsonp18907&_=1510454506795
//裙子 http://mce.mogujie.com/jsonp/makeup/3?pid=18895&callback=jsonp18895&_=1510454506626
//上衣 http://mce.mogujie.com/jsonp/makeup/3?pid=18784&callback=jsonp18784&_=1510454506551
//内衣 http://mce.mogujie.com/jsonp/makeup/3?pid=18913&callback=jsonp18913&_=1510454554617

//no  http://qiang.mogujie.com/jsonp/actGroupItem/1?callback=jQuery21105134064026448617_1510454503768&groupKey=11q&_=1510454503769