//import required modules
const express = require("express");
const path = require("path");


//set up Express object and port
const app = express();
const port = process.env.PORT || "8888";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//get index page from views at root directory
app.get("/", async (request, response) => {
    let links = await getLinks();
    response.render("index", { title: "Home", menu: links });
    });

// get menu-list from views
app.get("/admin/menu", async (request, response) => {
    let links = await getLinks();
    response.render("menu-list", { title: "Menu links admin", menu: links });
    });

//get menu-edit from views
app.get("/admin/menu/edit", async (request, response) => {
    if (request.query.linkId) {
    let linkToEdit = await getSingleLink(request.query.linkId);
    let links = await getLinks();
    response.render("menu-edit", { title: "Edit menu link", menu: links,
    editLink: linkToEdit });
    } else {
    response.redirect("/admin/menu");
    }
    });

//set up server listening
app.listen(port, () => {
console.log(`Listening on http://localhost:${port}`);
});

//import pug
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// mongo db connection

// get mongo client (localhost in this case)
const { MongoClient, ObjectId } = require("mongodb");
const dbUrl = "mongodb://127.0.0.1:27017/testdb";
const client = new MongoClient(dbUrl);



// connection functions

async function connection(){
    let db = client.db("testdb"); // get the testdb db from the localhost client
    return db; //returns db 
}

async function getLinks(){
    let db = await connection();
    var results = db.collection("menuLinks").find({});
    res = await results.toArray(); // creates an array from the results of the menuLinks collection
    return res; //returns array of information taken from collection
}



// form data handling

app.post("/admin/menu/edit/submit", async (request, response) => {
    //get form data
    let linkId = request.body.linkId;
    let idFilter = {_id: new ObjectId(linkId)};
    let weight = request.body.weight; //get the value for field with 
    let href = request.body.href; //request.body is form POST data
    let name = request.body.name;
    var linkToEdit = { "weight": weight, "path": href, "name": name };
    await editLink(linkToEdit, idFilter);
    response.redirect("/admin/menu"); //redirect back to admin page
    });

// edit link
async function editLink(link, filter){

    db = await connection();
    await db.collection("menuLinks").updateOne(filter, { $set: link});

}

// get menu link id for edit

async function getSingleLink(id){
    db = await connection();
    const editId = {_id: new ObjectId(id) };
    const result = await db.collection("menuLinks").findOne(editId);
    return result;
}




