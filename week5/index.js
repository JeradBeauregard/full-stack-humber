
const express = require("express"); // imports express modules
const path = require("path"); // imports node.js pathing modules
//set up Express object and port

const app = express(); // creates express application, allows us to use http requests within app
const port = process.env.PORT || "8888"; // sets up default port for localhost, if a service uses its own itll use that instead
//test message

/* app.get("/", (req, res) => {  // app.get is a get request to app which represents our express application
res.status(200).send("Test page"); // asks for request status, prints test page
}); */

//set up server listening
app.listen(port, () => { // listens for server 
console.log(`Listening on http://localhost:${port}`); // when server runs callback function console.log executes
});




app.set("views", path.join(__dirname, "views")); //Specifies the views folder where Pug template files are stored.
                                                  //Express will look in this folder when rendering templates.
app.set("view engine", "pug"); // Sets Pug as the template engine.
                                //This allows Express to automatically convert .pug files into HTML when using res.render().

//__dirname: This is a built-in Node.js variable that gives the absolute path of the current directory (where your script is running).

app.use(express.static(path.join(__dirname, "public"))); // connects public folder


//--------------------------------------------------------------------------------------------------------------------------

const router = require("./modules/menuLinks/router");
app.use('/', router);