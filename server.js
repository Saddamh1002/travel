/**
 * Created by Saddam Hussain on 24-10-2016.
 */
var express=require('express');
var nodemailer = require("nodemailer");
var app=express();
/*
 Here we are configuring our SMTP Server details.
 STMP is mail server which is responsible for sending and recieving email.
 */
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Mandrill",
    auth: {
        user: "sadhus1004@gmail.com",
        pass: "8793600908"
    }
});
/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/


app.get('/send',function(req,res){
    res.header('Access-Control-Allow-Origin', "*");
    var mailOptions={
        to : req.query.to,
        subject : req.query.subject,
        html : req.query.html
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
            res.end("error");
        }else{
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });
});

/*--------------------Routing Over----------------------------*/

app.listen(3000,function(){
    console.log("Express Started on Port 3000");
});