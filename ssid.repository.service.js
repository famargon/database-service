var database = require("./mongo.database.service");
var utils = require("./utils");

var lastSsid = undefined;

var saveNewSsid = function(request,response){
    var ssid = request.params.id;
    var save = true;
    var object = {}
    object.ssid = ssid;
    object.date = new Date();
    if(lastSsid && lastSsid.ssid==object.ssid && utils.minutesBetween(lastSsid.date, object.date)<20){
        console.log("Not inserting new ssid")
        save = false;
    }
    if(save){
        console.log("Inserting new ssid")
        lastSsid = object;
        database.save("ssid",object, response)
    }
}

module.exports = {saveNewSsid}