// request 
var request = new XMLHttpRequest();

// open the request port
request.open('GET', 'https://api.github.com/search/repositories?q=stars:%3E1+language:${lang}&sort=stars&order=desc&type=Repositories');


// get the response from this request
request.onload = function() {
	
	const res = request.response;

	const parsed = JSON.parse(res);

	const login = parsed.items[0].owner.login;

	console.log(login);

};

request.send();



