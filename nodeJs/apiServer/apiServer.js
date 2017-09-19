var http=require('http');
var fs=require('fs');
var url=require('url');

var server=http.createServer(function(req,resp){
if(req.method=='GET'){
    //process.stdout.write('GET method invoked');
 //   process.stdout.write('GET method invoked');
    console.log('GET method invoked');
//    resp.pipe(process.stdout);
//resp.end();
}
else if(req.method=='POST') {
    console.log('POST method invoked');
}else if(req.method=='DELETE'){
    console.log('DELETE mothod invoked');
}

    resp.write(req.method);
    resp.end();

})
server.listen(5555,function() {
    console.log("listnening @ port 5555");
})
