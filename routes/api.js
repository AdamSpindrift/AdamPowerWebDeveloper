const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const path = require("path");
// Environment Variables
require('dotenv').config();
// Nodemailer
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;


// Setup Express
const app = express();

app.all("*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Credentials", true);
    
    next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));


app.use(express.static("client/build"));

// Nodemailer
const myOAuth2Client = new OAuth2 (
    process.env.ADAM_OAUTH_CLIENT_ID,
    process.env.ADAM_OAUTH_SECRET,
    "https://developers.google.com/oauthplayground"
);

myOAuth2Client.setCredentials({
    refresh_token:process.env.REFRESH_TOKEN
});

const myAccessToken = myOAuth2Client.getAccessToken();

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: "robots@adampower.io",
        clientId: process.env.ADAM_OAUTH_CLIENT_ID,
        clientSecret: process.env.ADAM_OAUTH_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: myAccessToken,
    }
});





// Routes
router.post("/webenquiry", (req, res) => {

    const newRequest = req.body.details;

try {
    const mailOptions = {
        from: "robots@adampower.io",
        to: "adam@adampower.io",
        subject: "Website Enquiry for Adam Power Web Dev from " + newRequest.fName + " " + newRequest.lName,
        html: "<p>Hi Adam</p><p>" + newRequest.fName + " " + newRequest.lName + " has sent you the following message</p><p>" + newRequest.message + "</p><p> Contact email address is " + newRequest.email + "</p>",
        
    };

    transport.sendMail(mailOptions, function(err, result) {
        if(err){
            console.error(err);
            res.status(500).json({
                message: "Request Error"
            });
            throw(err);
        } else {
            transport.close();
            console.log("Email Sent");
            res.status(200).json({
                message: "Request Sent"
            });
        };
    });


} catch(err) {
    console.error(err);
};

});



module.exports = router;




                // loops over properties
            // for(var property in Employees){
            //     console.log(property + " = " + Employees[property]);
                
            // }
