var mongo = require("./mongodb.service");
var q2m = require('query-to-mongo');


var save = function(collection, object, res){
    mongo.performOperation(function(db){
        db.collection(collection).insertOne(object,function(err, result){
            if(err){
                console.log(err);
            }else{
                res.send(result.ops[0]);
            }
        })
        console.log("operation finished")
    })
}

var listAll = function(collection,res){
    var listLimit = 50;
    var query = q2m('limit='+listLimit);
    mongo.performOperation(function(db){
        db.collection(collection)
        .find(query.criteria, query.options)
        .sort({date: -1})
        .toArray(function(err, results) {
            if(err){
                console.log(err);
            }else{
                res.send(results);
            }
        })
        console.log("operation finished")
    })
}

module.exports = {
    save,
    listAll
}