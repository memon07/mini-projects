var EventEmitter=require('events').EventEmitter;

module.exports=function(num) {
    
    var e=new EventEmitter();
    process.nextTick(function() {
        if (num%2==0) {
            var r=num*2;
            e.emit('success',r);
        }else{
            e.emit('err',{message:"number is odd"});
        }
    });
    return e;
};