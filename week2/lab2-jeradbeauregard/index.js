

//import required modules
const express = require("express");
const path = require("path");
// import client and ObjectId Class
const { MongoClient, ObjectId } = require("mongodb");

//connect to db
const dbUrl = "mongodb://127.0.0.1:27017/testdb";
const client = new MongoClient(dbUrl); // client for db queries

//set up Express object and port
const app = express();
const port = process.env.PORT || "8888";
//test message
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", async (req, res) => {
    let links = await getLinks();
    res.render("index", { title: "title", menu: links });
});
//set up server listening
app.listen(port, () => {
console.log(`Listening on http://localhost:${port}`);
});

app.use(express.static(path.join(__dirname, "public")));

// mongodb functions
// what is an async function?
// what is await?

async function connection(){

    let db = client.db("testdb"); // you can leave the brackets empty if you specified a default db in the connection string
    return db;
}

// select and return an array of all documents in the test collection
async function getLinks(){

    let db = await connection();
    let results = db.collection("testcollection").find({}); // {} is the query. when its empty, this means there is no filter.
    // so find({}) is the equivalent of SELECT ALL
    let resultArray = await results.toArray();
    return resultArray;

}