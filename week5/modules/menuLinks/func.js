//-----------------------------------------------------------------------------------------------------------------------

// set up database connection

const { MongoClient } = require("mongodb");
const dbUrl = "mongodb://testdbuser:password@127.0.0.1:27017/"; //default port is 27017
const client = new MongoClient(dbUrl);

async function connection() {
    await client.connect(); // Ensure the connection is established
    const db = client.db("testdb"); // Get the database instance
    return db;
}

// now whenver we use the connection function it will return data from the specified database

//--------------------------

// get information from our database

async function getLinks() { 
    db = await connection();
    var results = db.collection("menuLinks").find({});
    res = await results.toArray();
    return res;
    }

//---------------------------------------------------------------------------------------------------------------------

module.exports = {getLinks};