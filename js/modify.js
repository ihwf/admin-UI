
	var account = document.getElementById('account');
	var old = document.getElementById('old');
	var password = document.getElementById('password');
	var login = document.getElementById('login');
	var valid = /^\w{6,}$/;
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
	
	old.oninput = function () {
		check(this,"tip2",valid);
	}
	
	password.oninput = function () {
		check(this,"tip3",valid);
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
	
	
	//当表单提交是检验规则
	document.getElementById('form').onsubmit = function(){
		if(checkSubmit(account,"tip1",valid) && checkSubmit(old,"tip2",valid) && checkSubmit(password,"tip3",valid)){
			this.submit();
		}else{
			checkSubmit(account,"tip1",valid);
			checkSubmit(old,"tip2",valid);
			checkSubmit(password,"tip3",valid);
			return false;
		}
	}