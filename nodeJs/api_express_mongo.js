var express=require('express');
var bodyParser = require('body-parser');
var path=require('path');
var MongoClient=require('mongodb').MongoClient;
var mongo_uri='mongodb://s:12@ds135534.mlab.com:35534/shoyeb_database';
var fs=require('fs');
var app=express();
app.use(bodyParser.urlencoded({extended: false}));
app.listen(8080,function() {
    console.log("listening @ 8080");    
});

MongoClient.connect(mongo_uri, function(err, db) {  
  if (err) {
 console.log(err);
}else{
    
app.get('/display', function (req, res) {
    db.collection('student').find().toArray(function(err, docs) {    
    console.log(JSON.stringify(docs));
    res.send(JSON.stringify(docs));
    res.end();
    });
});

app.get('/add', function (req, res) {
    db.collection('student').insertOne({      
        "firstname":"dara",
        "lastname":"singh",
    });
    res.end();
});

app.get('/delete',function(req,res) {
    db.collection('student').deleteOne( { "firstname" : "dara" } );
    res.end();
})


app.get('/update', function (req, res) {
    db.collection('student').update({'firstname':"shela"},{$set:{'firstname':"zshela",'lastname':"zpandit"}});   
    res.end();
});

}

});
