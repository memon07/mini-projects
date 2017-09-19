var http=require('http');
var fs=require('fs');
var url=require('url');

var server=http.createServer(function(req,res) {
    var path=req.url;
    var pathWdir=__dirname+path;
    console.log(path)
  if (path=='/'|| path=='/favicon.ico') {
    var read= fs.createReadStream('app.js');
    read.pipe(res); 
  }else{
    var read2= fs.createReadStream(pathWdir);
    read2.pipe(res);   
  }
})
server.listen(5555,function() {
    console.log("listnening @ port 5555");
})
