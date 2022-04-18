var express = require('express');
const path = require('path');
var app = express();
const fs = require('fs');
let cors = require("cors");
app.use(cors());

var server = app.listen(3001, onServerStart);

function onServerStart()
{
    console.log("Server Started");
}

let rawdata = fs.readFileSync('DevOpsTracker.json');
let data = JSON.parse(rawdata);
console.log(data.List);

app.get("/GetJSON", onJSONStart);

function onJSONStart(req, res)
{
	res.send(rawdata);
}