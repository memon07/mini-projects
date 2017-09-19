var ejs = require('ejs');
var nodemailer=require('nodemailer');

var transport=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'memonshoyeb26@gmail.com',
        pass:'Oscar220eWxleo'
    }
});


     var user={firstname:'raja',lastname:'hasan'};
     var subject=ejs.render('Hello <%= firstname %>',user);
     var text=ejs.render('yours full name is <%= firstname %> <%= lastname %> bye ! thanks',user);

    var option={
        from:'memonshoyeb26@gmail.com',
        to:'memonshoyeb26@gmail.com',
        subject:subject,
        text:text
    };

    transport.sendMail(option,function(err,info) {
        if(err){
            console.log(err.toString());
        }else{
            console.log(info.response);
        }
    });
