var EventEmitter=require('events').EventEmitter;

module.exports=function() {
    var obj={};

    obj.getEventData=function(num){
    var e=new EventEmitter();
    process.nextTick(function() {
        var r=Math.random()*1000;
        if (r>200) {
            e.emit('success',r);
        }else{
            e.emit('err',{message:"number is less than 200"});
        }
    });
    return e;
    }

    return obj;
}();