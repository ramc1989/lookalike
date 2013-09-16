
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  /*
  	importing the restservice functions
  */
  , restservice = require('./api/restservice');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//exposing a get rest service
//localhost:3000/getexample?param1=name&param2=age
app.get('/getexample', restservice.getcallbackfn);

//exposing a post rest service
//localhost:3000/postexample
app.post('/postexample', restservice.postcallbackfn);

//exposing a post rest service that returns a json response
//localhost:3000/postjson
app.post('/postjson', restservice.postjsoncallbackfn);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
