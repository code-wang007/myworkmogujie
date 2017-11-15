$(function(){

		var flag1 = true;
		var flag2 = true;
		$(window).scroll(function(){
			var scrolltop = $(window).scrollTop();
			
			if(scrolltop >= 6000){
				if(flag1){
					$.getJSON("http://list.mogujie.com/search?callback=?&cKey=pc-index&fcid=52014&pid=9750&searchTag=&sort=pop&page=2&ratio=2%3A3&_version=1&cpc_offset=0&offset=&_=1510376027643",function(data){
						goodsList(data);
						console.log(data);
						
						var $lists = $(".goodsList");
						$.each($lists, function(index) {
							$lists.eq(index).click(function(){
								var $ind = index;
								var tradeId = data.result.wall.docs[index].tradeItemId+$ind;
								console.log(tradeId);
				$(this).children("a").attr('href',"details.html?='"+tradeId+"'");
							})
						});
					});
				}
				flag1 = false;
			}
			/*if(scrolltop >= 6000){
				if(flag2){
					$.getJSON("http://list.mogujie.com/search?callback=?&cKey=pc-index&fcid=52014&pid=9750&searchTag=&sort=pop&page=1&ratio=2%3A3&_version=1&cpc_offset=0&offset=&_=1510575076002",function(data){
						console.log(data);
						goodsList(data);
						
						var $lists = $(".goodsList");
						$.each($lists, function(index) {
							$lists.eq(index).click(function(){
								var tradeId = data.result.wall.docs[index].tradeItemId;
								console.log(tradeId);
								$(this).children("a").attr('href',"details.html?hb='"+tradeId+"'");
							})
						});
						
					});
				}
				flag2 = false;
			}*/
			
		});
	
	
	
});

//http://list.mogujie.com/search?callback=jQuery211016008120659849556_1510377060506&cKey=pc-index&fcid=52014&pid=9750&searchTag=&sort=pop&page=2&ratio=2%3A3&_version=1&cpc_offset=0&offset=&_=1510377060508

//http://list.mogujie.com/search?callback=jQuery21104448285462639565_1510575076001&cKey=pc-index&fcid=52014&pid=9750&searchTag=&sort=pop&page=1&ratio=2%3A3&_version=1&cpc_offset=0&offset=&_=1510575076002

//http://list.mogujie.com/search?callback=jQuery21107457240561807938_1510567492429&cKey=pc-index&fcid=52014&pid=9750&searchTag=&sort=pop&page=2&ratio=2%3A3&_version=1&cpc_offset=0&offset=&_=1510567492432