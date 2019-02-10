const fetch = require('node-fetch');



var getUser= function(){

	return new Promise((resolve,reject)=>{

	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(json =>resolve(json))
	});
};



module.exports ={
	getUser
};


