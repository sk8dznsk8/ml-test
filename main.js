//*****HOW TO EXECUTE THIS AT RUNTIME*****

var express = require("express");
var app     = express();
var path    = require("path");

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views/product.html'));
  //__dirname : It will resolve to your project folder.
});

app.use(express.static(__dirname + '/images'));

app.listen(3000, function(){
    console.log("Running at Port 3000...Press CTRL+C to stop.");
});