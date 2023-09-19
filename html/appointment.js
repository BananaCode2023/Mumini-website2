document.getElementById("form_name").addEventListener("keyup", validate_name);
document.getElementById("form_age").addEventListener("keyup", validate_age);
document.getElementById("form_contact_number").addEventListener("keyup", validate_contact_number);
document.getElementById("form_email").addEventListener("blur", validate_email);


function validate_name() {
	document.getElementById("invalid_name").innerText = ""; // Reset

	const form_name = document.getElementById("form_name")
	for (let i =0; i < form_name.value.length; i++) {
		if (!isNaN(form_name.value[i])) {
			document.getElementById("invalid_name").innerText = "Invalid name there should be no number"
		}
	}
	
}

function validate_age() {
	document.getElementById("invalid_age").innerText = ""; // Reset

	const age = Number(document.getElementById("form_age").value);
	if (age >= 70) {
		document.getElementById("invalid_age").innerText = "We dont support this age."
	}
}

function validate_age() {
	document.getElementById("invalid_age").innerText = ""; // Reset

	const age = Number(document.getElementById("form_age").value);
	if (age >= 70) {
		document.getElementById("invalid_age").innerText = "We dont support this age."
	}
}

function validate_contact_number(){
	document.getElementById("invalid_contact_number").innerText = ""; // Reset

	const contact = Number(document.getElementById("form_contact_number").value.length);
	if ( contact > 11) {
		document.getElementById("invalid_contact_number").innerText = "It should be 11 numbers only."
	}
}

function validate_email() {
	document.getElementById("invalid_email").innerText = ""; // Reset
	const validRegex = "[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}";

	var re = /\S+@\S+\.\S+/;
	if(!re.test(document.getElementById("form_email").value)) {
		document.getElementById("invalid_email").innerText = "The email is invalid"
	}
}