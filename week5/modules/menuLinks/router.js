var express = require("express");
var router = express.Router();
const model = require("./func");

//-------------------------------------------------------------------------------------------------------------------------

router.get("/", async (request, response) => {
    let links = await model.getLinks();
    response.render("index", { title: "Home", menu: links }); // render is returned as a respone to our get request
    });
    
    // render containts two paramenters. the first parameter is the templete to be rendered
    // the second parameter is an object that contains information we want to dynamically render on the page
    
    // in this case, the first parameter is a string "Home' under key tittle:
    // the second item in the object is an array of links from our get links function under the key menu:
    
    //req: The request object, containing data from the client (like form inputs, headers, etc.).
    //res: The response object, used to send a response back to the client.

module.exports = router;