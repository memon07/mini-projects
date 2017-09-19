var http=require('http');
var url=require('url');
var fs=require('fs');

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

var server=http.createServer(function(req,resp) {

    
    var path=req.url;
    
     if (path=='/api/student') {
//         var contents=fs.readFileSync('student.json');
//         var parsedJson=JSON.parse(contents);
        if (req.method=='GET') {
            var jsonR=JSON.stringify(studentsArray);
            resp.write(jsonR);
            resp.end(); 
        }else if(req.method=='POST') {
        //    console.log(req);

            console.log(req.body);
            //studentsArray.push({"id":33,"name":"zan","marks":72});

            resp.end();
        }else{
            resp.end('sorry method not supported');
        }
     } else {
        resp.writeHead(404);
        resp.end('Server error');
    }
})
server.listen(5000,function() {
    console.log('listening to port 5000');
})