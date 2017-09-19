var http=require('http');
var fs=require('fs');
var url=require('url');
var request=0;

var server=http.createServer(function(req,resp){
console.log("request came from the browser"+request++);
console.log(req.url);
var path=url.parse(req.url).pathname;

//resp.writeHead(200, {"Content-Type": "text/html"});
switch(path){
    case '/contact':
    fs.readFile('/contact.html',function(err,data) {
        if(err){
            console.log(err.toString());
        }else{
            resp.writeHead(200, {"Content-Type": "text/html"});
            resp.write("<h1>Contact Page</h1>");
            resp.end();
        }
    })
    break;
    default:
    resp.writeHead(200, {"Content-Type": "text/html"});
    resp.write("<h1>helloWorld</h1>");
    resp.end();
    break;
}
// resp.write("<h1>helloWorld</h1>");
// resp.end();
});
server.listen(5555,function() {
    console.log("listnening @ port 5555");
})
