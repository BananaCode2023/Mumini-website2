var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventListener('input',email_Verify);
password.addEventListener('input', pass_Verify);

function validated(){
	if(email.value.length < 9){
		email.style.border = "1px solid red";
		email_error.style.display = "block";
		email_error.style.color = "red";
		email.focus();
		return false
	}
	if(password.value.length < 6){
		password.style.border <= "1px solid red";
		pass_error.style.display = "block";
		pass_error.style.color = "red";
		password.focus();
		return false;
	}

}

function email_Verify(){
	if (email.value.length <= 11){
		email.style.border = "2px solid silver";
		email_error.style.display = "none";
		return true;
	}
}
function pass_Verify(){
	if (password.value.length <= 11){
		password.style.border = "2px solid silver";
		pass_error.style.display = "none";
		return true;
	}
}





