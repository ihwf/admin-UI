window.onload = function () {
	var account = document.getElementById('account');
	var password = document.getElementById('password');
	var code = document.getElementById('code');
	var login = document.getElementById('login');
	var valid = /^\w{6,}$/;
	var codeValid = /\w{4}/;
	
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
			checkSubmit(account,"tip1",valid);
			checkSubmit(password,"tip2",valid);
			checkSubmit(code,"tip3",codeValid);
			return false;
		}
	}
}