var mongoose=require('mongoose');
mongoose.connect('mongodb://s:12@ds135534.mlab.com:35534/shoyeb_database');

var userSchema=new mongoose.Schema({
    firstname:{type:String},
    lastname:{type:String}
});

var userModel=mongoose.model('user',userSchema);

var user2 = new userModel ({
      firstname:'vimal',
      lastname:'sann'
    });

    user2.save(function (err) 
    {if (err)
         console.log ('Error on save!')
    });

    userModel.find(function(err, user){  
        if (err) {
        console.log(err);
        } else {
        console.log(user);
        }
    });
    

    var id='59bf8ad6cabe09168c9a3749';
    userModel.findById(id,function(err,user) {
        if (err) {
            console.log(err);
        } else {
            console.log(user);
        }
    })
    

   var updateId2='59bf8a389f305011f0acf3a3';
    userModel.findOneAndUpdate({firstname:'vimal'},{$set:{firstname:'padma'}},{new:true},function(err,doc) {
        if (err) {
            console.log(err);
        } else {
            console.log(doc);
        }
    });

    var updateId="59bf8ad6cabe09168c9a3749";
    userModel.findByIdAndUpdate(updateId,{$set:{firstname:'zion'}},{new:true},function(err,doc) {
        if (err) {
            console.log(err);
        } else {
            console.log(doc);
        }
    })