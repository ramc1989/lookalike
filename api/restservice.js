var url = require('url');

//req = request object
//res = response object
exports.getcallbackfn = function(req,res)
{
	// parsing the url to get the query parameters
	// for eg. if we call localhost:3000/getexample?param1=name
	//url_parts.query = {'param1':'name'}
	var url_parts = url.parse(req.url, true); 
	var query = url_parts.query;

	//res send will send a plain text reponse to the user
	res.send('Your GET Request Parameters are : ' + JSON.stringify(query));
}

exports.postcallbackfn = function(req,res)
{
	//req.body contains the data posted
	var post_body = req.body;
	
	//JSON.stringify converts the json object into string
	res.send('Your POST Data is : ' + JSON.stringify(post_body));
	
}

exports.postjsoncallbackfn = function(req,res)
{
	//req.body contains the data posted
	var post_body = {'data' : req.body};

	//res.json method sends the data in json format
	res.json(post_body);
}