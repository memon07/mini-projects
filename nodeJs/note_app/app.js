var express=require('express');
var app=express();

app.listen(5050,function() {
    console.log("listening @ 5050");    
})

app.use('/spa',express.static(__dirname+'/clientSide/'));