var express = require('express');
var app = express();
var path = require('path');

var bodyParser = require("body-parser");
var urlencodedparser = bodyParser.urlencoded({extended:false})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

var url = require('url');



app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/html/indexA.html'));
});

/* app.post("/", function(req,res){
    console.log("Ricevuto una richiesta POST");
    console.log(req);
    // contenuto della richiesta
    console.log(req.body);
    // username
    console.log(req.body.username);
    // password
    console.log(req.body.pass);
    //res.sendFile(path.join(__dirname + '/html/indexA.html'));
}); */

app.post('/ajax', urlencodedparser, function (req, res){  
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    console.log(req);
    console.log('req received');
    console.log(query);
    console.log("Username =" + query.fname);
    console.log("Password =" + query.lname);
    var respondWith = "Il mio user è " + query.fname + " la mia password è " + query.lname ;
    res.send(respondWith)
 });


 app.post('/olo', function (req, res){  
   console.log("ricevuto richiesta ajaxJQ");
   var test = req.body.test;
   var olo = req.body.olo;
   console.log(test);
   console.log(olo);
   res.json({output: test});
 });

 app.post('/jsa', function (req, res){ 
    
    console.log("ricevuto richiesta ajaxJS");
    //console.log(req.body)
    var metodo = req.body.metodo;
    var proprieta = req.body.proprieta;
    console.log(metodo);
    console.log(proprieta);
    res.json({metodo : metodo, proprieta : proprieta});
  })

app.listen(3000);

