var dS=module.require('./eventDataService');
//console.log(dS);
 var e =dS.getEventData(5);
 //console.log(e);
e.on('success',function(r){
    console.log(r);
});
e.on('err',function(err){
    console.log(err);
});