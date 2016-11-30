
window.onload = function(){
	//设置动态背景图
//	var ajax = new XMLHttpRequest;
//	ajax.onreadystatechange = function () {
//		if(ajax.readyState == 4 && ajax.status ==200){
//			var bingImg = ajax.responseText;
//			document.querySelector("body").style.backgroundImage = "url("+bingImg+")";
//			document.querySelector("header").style.backgroundImage = "url("+bingImg+")";
//			document.querySelector("footer").style.backgroundImage = "url("+bingImg+")";
//		}
//	}
//	ajax.open("GET","https://heweifeng.cn/bing.php");
//	ajax.send();
	
	//定义函数 - 展开菜单
	function openList($parent,$child) {
		if($parent && $child){
			document.getElementById($parent).addEventListener("click",function(){
			if(document.getElementById($child).style.display == "none"){
				document.getElementById($child).style.display = "block";
				document.getElementById($child).style.animation = "fadeInDown 200ms";
				document.getElementById($child).style.webkitAnimation = "fadeInDown 200ms";
			}else{
				document.getElementById($child).style.display = "none";
			}
		});
		document.getElementById($parent).click();
		}
	}
	openList("userManage","users");
	openList("adminManage","admin");
	
	
	//定义函数 - 点击导航栏a标签调用ajax获取aticle内容
	function goUrl($ele) {
		document.getElementById($ele).onclick = function () {
			var uri = this.title;
			var ajax = new XMLHttpRequest;
			var obj = this;
			ajax.onreadystatechange = function() {
				if(ajax.readyState == 4 && ajax.status == 200){
					//获取主要内容加载进article里
					document.getElementById("temp").innerHTML = ajax.responseText;
					var title = document.getElementsByTagName("title")[1].innerHTML;
					var content = document.getElementsByTagName("article")[1].innerHTML;
					document.title = title;//修改浏览器标题
	     			window.history.pushState({title:title,url:uri},"",uri);//修改地址栏url,将浏览记录添加进历史
	     			document.getElementsByTagName("article")[0].innerHTML = content;
	     			//关闭导航条
	     			document.getElementById('nav').className = "close-nav";
					document.getElementById('header').className = "close-nav-header";
					document.getElementById('article').className = "close-nav-article";
					document.getElementById("article").style.boxShadow = "none";
					//在导航栏中给当前标签页添加背景色
					var li = document.getElementsByTagName("li");
					for (var i = 0;i<li.length;i++) {
						li[i].style.backgroundColor = "transparent";
					}
					obj.parentNode.style.backgroundColor = "rgba(255,255,255,.5)";
				}
			}
			ajax.open("GET",uri);
			ajax.send();
		}
	}
	
	//监听浏览器前进后退,响应浏览器
	window.addEventListener('popstate', function(e){
	  if (history.state){
		var state = e.state;
		window.location = state.url;
	    //do something(state.url, state.title);
	  }
	}, false);
	
	//读取导航栏的a链接,添加点击事件
	var navList = document.querySelector("nav");
	var aList = navList.getElementsByTagName("a");
		for (var i = 0;i < aList.length;i++) {
			if(aList[i].title){
				goUrl(aList[i].id);
			}
		}
	
	//移动端展开和关闭导航条
	document.getElementById('open-nav').addEventListener("click",function(){
		if(document.getElementById('nav').className == "close-nav" || document.getElementById('nav').className == ""){
			document.getElementById('nav').className = "open-nav";
			document.getElementById('header').className = "open-nav-header";
			document.getElementById('article').className = "open-nav-article";
			document.getElementById("article").style.boxShadow = "2px 0px 6px rgba(0,0,0,.5) inset"
		}else{
			document.getElementById('nav').className = "close-nav";
			document.getElementById('header').className = "close-nav-header";
			document.getElementById('article').className = "close-nav-article";
			document.getElementById("article").style.boxShadow = "none";
		}
	});
	//点击内容部分隐藏导航栏
	document.getElementById("article").addEventListener("click",function() {
		if(document.getElementById('nav').className == "open-nav"){
			document.getElementById('nav').className = "close-nav";
			document.getElementById('header').className = "close-nav-header";
			document.getElementById('article').className = "close-nav-article";
			document.getElementById("article").style.boxShadow = "none";
		}
	});
	
}