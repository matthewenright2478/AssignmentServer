exports.updateDocument = function(collection,queryJSON,updateJSON,callback) {
    collection.updateOne(queryJSON, {$set: updateJSON},function(err, result){
        console.log("For the documents with");
        console.log(queryJSON);
        console.log("SET: ");
        console.log("updateJSON");
        callback(result);
    });
};