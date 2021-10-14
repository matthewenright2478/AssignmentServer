

module.exports = function(client,col) {

    exports.findDocuments = function (collection, queryJSON, callback) {
//find some Documentation

        collection.find(queryJSON).toArray(function (err, docs) {
            console.log("Found the following records");
            console.log(docs);
            callback(docs);
        });
    };
}


exports.removeDocument = function(collection,queryJSON,callback) {
    collection.deleteOne(queryJSON, function (err, result) {
        console.log("REmvoe the documentation with");
        console.log(queryJSON);
        callback(result)

    })
}



exports.updateDocument = function(collection,queryJSON,updateJSON,callback) {
    collection.updateOne(queryJSON, {$set: updateJSON},function(err, result){
        console.log("For the documents with");
        console.log(queryJSON);
        console.log("SET: ");
        console.log("updateJSON");
        callback(result);
    });
};





exports.insertDocuments = function(collection,docArray, callback) {
    console.log(collection)
    collection.insertOne(docArray, function (err, result) {
            console.log("Inserted the following documents into the collection");
            console.log(docArray)
            callback(result)

        }
    )
}