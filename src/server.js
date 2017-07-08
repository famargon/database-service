'use strict'

var express = require("express");
var bodyParser = require('body-parser');
require('dotenv').config();

var mongoDatabaseService = require('./services/mongo.database.service');
var ssidRepositoryService = require('./services/ssid.repository.service');

var app = express();
app.use(bodyParser.json());
const user = process.env.USER;
const pass = process.env.PASSWORD;

app.use(function(req,res,next){
    if(req.headers.user && req.headers.password
        && req.headers.user == user && req.headers.password == pass){
        next();
    }else{
        console.log("Wrong access credentials");
        res.status(403).send("Forbidden");
    }
});

app.post("/log", function(req,res){
    mongoDatabaseService.save("log",req.body, res);
});

app.get("/ssid/:id",function(req,res){
    ssidRepositoryService.saveNewSsid(req,res);
});

app.get("/ssid",function(req,res){
    mongoDatabaseService.listAll("ssid",res);
})

var port = process.env.port || 8888;

app.listen(port,function(){
    console.log("Server bound")
});