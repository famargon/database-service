
var minutesBetween = function(date1, date2){
    var diffMs = (date2 - date1); // milliseconds
    //var diffDays = Math.floor(diffMs / 86400000); // days
    //var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
    return diffMins;
}

module.exports = {minutesBetween}
   