var express=require('express');
var bodyParser = require('body-parser');

var studentsArray=[{
"id":1,
"name":"raj",
"marks":59
},{
"id":32,
"name":"javeri",
"marks":46
},{
"id":22,
"name":"aman",
"marks":62
}]

var app=express();

app.listen(8080,function() {
    console.log("listening @ 8080");    
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/get',function(req,res) {
    var jsonR=JSON.stringify(studentsArray);
    res.send(jsonR);
});

app.post('/post',function(req,res) {
    res.setHeader('Content-Type', 'application/json');
//    var id,name,marks;
 studentsArray.push({    
     "id":req.body.id,
     "name":req.body.name,
     "marks":req.body.marks
})
//    console.log(id+" "+name+" "+marks);
    var jsonR=JSON.stringify(studentsArray);
    console.log(jsonR);
    res.end();
})