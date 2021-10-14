

exports.insertDocuments = function(collection,docArray, callback) {
    console.log(collection)
    collection.insertOne(docArray, function (err, result) {
            console.log("Inserted the following documents into the collection");
            console.log(docArray)
            callback(result)

        }
    )
}