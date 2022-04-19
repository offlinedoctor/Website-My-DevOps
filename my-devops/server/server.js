var express = require('express');
const path = require('path');
var app = express();
const fs = require('fs');
let cors = require("cors");
app.use(cors());
var bodyParser = require('body-parser');
app.use(bodyParser());

var sentValue;

var server = app.listen(3001, onServerStart);

function onServerStart()
{
    console.log("Server Started");
}

app.get("/GetJSON", onJSONStart);

function onJSONStart(req, res)
{
	let rawdata = fs.readFileSync('DevOpsTracker.json');
	let data = JSON.parse(rawdata);
	res.send(rawdata);
}

app.post("/RemoveFromJSON", removeFromJSON);

function removeFromJSON(req, res)
{
	sentValue = req.body.heading;
	
	console.log(req.body.heading)
	var rawdata1 = fs.readFileSync('DevOpsTracker.json');
	var data = JSON.parse(rawdata1);
		
	data.List = data.List.filter(RemoveItemFromList);
	
	
	console.log(data);
	
	//console.log(JSON.stringify(appendedString, null, "\t"));
	
	//var o = data.List.filter(x => x!== null);
	//console.log(o);
		
	fs.writeFileSync('DevOpsTracker.json', JSON.stringify(data, null, "\t"));
	//let rawdata2 = fs.readFileSync('DevOpsTracker.json');
	//res.send(rawdata2);
	//res.sendStatus(200);
	res.send({successful: "true"});
}

function RemoveItemFromList(eachValue)
{
	if (eachValue.heading != sentValue)
	{
		return eachValue;
	}
}

app.post("/AddToJSON", AddToJSON);

function AddToJSON(req, res)
{
	var storeValue = req.body;
	
	var newJSON = 
	{
		"heading": req.body.heading,
		"description": req.body.description,
		"link": req.body.link,
		"status": req.body.status,
		"tag": req.body.tag
	};

	var rawdata1 = fs.readFileSync('DevOpsTracker.json');
	var data = JSON.parse(rawdata1);
		
	data.List.push(rawdata1);

	json = JSON.stringify(data, null, "\t");
	fs.writeFile('DevOpsTracker.json', json, function(err, result) 
	{
	     if(err) console.log('error', err);
	});
}