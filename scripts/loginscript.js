
fetch("navbar.html")
	.then((res) => res.text())
	.then((data) => {
		document.getElementById("navbar").innerHTML = data;
	});


document.getElementById('showSignUp').addEventListener('click', function(e) {
    e.preventDefault(); // stop link from redirecting
    document.getElementById('signUpForm').style.display = 'block';
	document.getElementById('loginForm').style.display = 'none'
});

document.getElementById('showLogin').addEventListener('click', function(e) {
    e.preventDefault(); // stop link from redirecting
    document.getElementById('loginForm').style.display = 'block';
	document.getElementById('signUpForm').style.display = 'none'
});