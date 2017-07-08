var MongoClient = require('mongodb').MongoClient;
 
// Connection URL 
const url = process.env.MONGOURL;

var connect = function(operation){
  MongoClient.connect(url, async function(err, db) {
    console.log("Connected correctly to server");
    await operation(db);
    console.log("closing connection")
    db.close();
  });
}

module.exports = {
  connect
}