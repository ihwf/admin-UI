window.onload = function () {
	//设置动态背景图
	var ajax = new XMLHttpRequest;
	ajax.onreadystatechange = function () {
		if(ajax.readyState == 4 && ajax.status ==200){
			var bingImg = ajax.responseText;
			document.querySelector("body").style.backgroundImage = "url("+bingImg+")";
		}
	}
	ajax.open("GET","https://heweifeng.cn/bing.php");
	ajax.send();
	
	var account = document.getElementById('account');
	var password = document.getElementById('password');
	var code = document.getElementById('code');
	var login = document.getElementById('login');
	var valid = /^\w{6,}$/;
	var codeValid = /\w{4}/;
	//定义函数 - 检查输入框是否符合指定规则
	function check($ele,$tip,$valid) {
		if($valid.exec($ele.value)){
			document.getElementById($tip).style.display = "none";
		}else{
			document.getElementById($tip).style.display = "inline-block";
			document.getElementById($tip).style.animation = "tip 300ms";
			document.getElementById($tip).style.MozAnimation = "tip 300ms";
			document.getElementById($tip).style.WebkitAnimation = "tip 300ms";
		}
	}
	
	account.oninput = function () {
		check(this,"tip1",valid);
	}
	
	password.oninput = function () {
		check(this,"tip2",valid);
	}
	
	code.oninput = function () {
		check(this,"tip3",codeValid);
	}
	//定义函数 - 提交表单时检查输入框是否符合指定规则
	function checkSubmit ($ele,$tip,$valid) {
			if($valid.exec($ele.value)){
				return true;
			}else{
				document.getElementById($tip).style.display = "inline-block";
				document.getElementById($tip).style.animation = "tip 300ms";
				document.getElementById($tip).style.MozAnimation = "tip 300ms";
				document.getElementById($tip).style.WebkitAnimation = "tip 300ms";
				return false;
			}
		}
	
	document.getElementById('form').onsubmit = function(){
		if(checkSubmit(account,"tip1",valid) && checkSubmit(password,"tip2",valid) && checkSubmit(code,"tip3",codeValid)){
			this.submit();
		}else{
			document.getElementById('login').style.animation = "error 500ms";
			document.getElementById('login').style.WebkitAnimation = "error 500ms";
			
			checkSubmit(account,"tip1",valid);
			checkSubmit(password,"tip2",valid);
			checkSubmit(code,"tip3",codeValid);
			return false;
		}
	}
}