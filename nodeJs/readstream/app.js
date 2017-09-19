var http=require('http');
var fs=require('fs');
var url=require('url');

var server=http.createServer(function(req,resp){

    var path=url.parse(req.url).pathname;
  //  var subStringPath=path.substring(1);

 //   console.log(subStringPath);
 //console.log(path);
 if(path=='/'){
     fs.readFile('index.html',function(err,data) {
            resp.writeHead(200, {"Content-Type": "text/html"});
            resp.end(data);         
     })

 }else{
        fs.readFile('./'+path,function(err,data) {
            if(err){
                resp.writeHead(404);
                resp.end('Server error');
                console.log(err);
            }else{
            resp.writeHead(200, {"Content-Type": "text/html"});
            resp.end(data);
            }
        });
 }

 })
server.listen(5555,function() {
    console.log("listnening @ port 5555");
})
