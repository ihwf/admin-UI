window.onload = function(){
	//展开用户管理菜单
	document.getElementById('userManage').addEventListener("click",function(){
		if(document.getElementById('users').style.display == "none"){
			document.getElementById('users').style.display = "block";
			document.getElementById('users').style.animation = "fadeInDown 200ms";
			document.getElementById('users').style.webkitAnimation = "fadeInDown 200ms";
			
		}else{
			document.getElementById('users').style.display = "none";
		}
		
	});
	document.getElementById('userManage').click();
	
	//定义函数 - ajax获取aticle内容
	function goUrl($ele) {
		var uri = $ele.getAttribute("title");
		var ajax = new XMLHttpRequest;
		ajax.onreadystatechange = function () {
			if(ajax.readyState == 4 && ajax.status == 200){
				//获取主要内容加载进article里
				document.getElementById("temp").innerHTML = ajax.responseText;
				var title = document.getElementsByTagName("title")[1].innerHTML;
				var content = document.getElementsByTagName("article")[1].innerHTML;
				document.title = title;//修改浏览器标题
     			window.history.pushState({},"",uri);//修改地址栏url
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
				$ele.parentNode.style.backgroundColor = "rgba(255,255,255,.3)";
			}
		}
		ajax.open("GET",uri);
		ajax.send();
	}
	
	
	document.getElementById('user').onclick = function () {
		goUrl(this);
	}
	document.getElementById('admin').onclick = function () {
		goUrl(this);
	}
	document.getElementById('art').onclick = function () {
		goUrl(this);
	}
	document.getElementById('per').onclick = function () {
		goUrl(this);
	}
	document.getElementById('person').onclick = function () {
		goUrl(this);
	}
	document.getElementById('sys').onclick = function () {
		goUrl(this);
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