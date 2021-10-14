var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var add = require('./add.js');
var remove = require('./remove');
var read = require('./read.js');
var update = require('./update');
const dbName = "myproject"
const colName = 'appDocs'
const client = new MongoClient(url)
const collection = "db.new"

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("DatabaseUni");
    var myobj = [

        {Id: '01', Name: 'Iphone', Description: 'Only for rich people', Price: '1600.99', units: "2000"},
        {Id: '02', Name: 'Blue-Shirt', Description: 'Just a boring blue shirt', Price: '3.00', units: "50"},
        {Id: '03', Name: 'RacingCar', Description: 'RacingCar its pretty much in its name', Price: '39.69', units: "20"}

    ];
    add.insertDocuments(collection,myobj,() => {
        client.close();
    })
    })





add.insertDocuments = function(collection,docArray, callback) {

   dbo.collection.insertOne(docArray, function (err, result) {
            console.log("Inserted the following documents into the collection");
            console.log(docArray)
            callback(result)

        }
    )
}


















  // dbo.collection("products",{
     //   #validator: { $jsonSchema: {
       ///         bsonType: "object",
        //    required: [ "Id" ],
            //    properties: {
               //     Id: {
               //         bsonType: "string",
                 //       description: "must be a string and is required"
               //     },
               ///     name: {
                 //       bsonType : "string",
              //          pattern : "@mongodb\.com$",
              //          description: "must be a string and match the regular expression pattern"
               //     },
               //     description: {
               //         bsonType:"string",
              //          description: "Is a general description of the item"
                 //   },
               //     price: {
               //         bsonType:"float",
                //        description: "Is the value within AUD currency"
               //     },
                  //  units: {
                //        bsonType:"int",
               //         description: "Number of total items"
              //      }
             //   }}}}).insertMany(myobj, function(err, res) {
       // if (err) throw err;
      //  console.log("Number of documents inserted: " + res.insertedCount);
      //  db.close();
   // });
//});