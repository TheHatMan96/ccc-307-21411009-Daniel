var express = require('Express');
var app = express();
var fetch = require('node-fetch');


app.get('/',function(req,res){
	
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response =>response.json())
	.then(json => res.send(json))
});


app.listen(3001,function(){
	console.log('Example app listening on port 3000!');
});