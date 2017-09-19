var doubleEvenNumber=module.require('./evenDoubler');

var e=doubleEvenNumber(5);

e.on('success',function(z) {
    console.log(z);
});
e.on('err',function(y) {
    console.log(y);
});
