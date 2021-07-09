var maskIt = (email,symbol) => {
	var name = email.split('@')[0];
	var adress = email.split('@')[1];
	var firstFull = name.slice(0, 2) + '*'.repeat(name.length - 4) + name.slice(-2, name.length);
	var secondFull =
		adress.slice(0, 2) + '*'.repeat(adress.length - 5) + adress.slice(-3, adress.length);
	var full = firstFull + '@' + secondFull;
	return full;
};

exports.maskEmails = maskEmails = (text) => {
	return text.replace(
		/(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g,
		function (x) {
			var masked = maskIt(x);
			return masked;
		}
	);
};

exports.validateEmail = validateEmail = (email) => {
	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}
