// importing functions from collecion.js file 

import { addCollection, getCollection, lengthCollection } from "./collection.js";

// calling imported functions (they console.log the collection information)

// adding "peaches to collection array"
addCollection("peaches");
// logs collection (with "peaches" added, blocking code)
getCollection();
// logs collection length (after "peaches" is added);
lengthCollection();

// time outs

// first as it executes on page ready, this is blocking code

console.log("this will execute first");

// executes last because its on a timeOut, even though it is second in line. this is non blocking code

setTimeout(function wait(){console.log("this will execute third")}, 5000);

// second as this executes on page ready, but executes after first console.log, this is blocking code

console.log("this will execute second");