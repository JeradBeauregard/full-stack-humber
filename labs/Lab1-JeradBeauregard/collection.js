 // var to hold collection array (private)
 
 var collection = ["apples", "oranges", "bananas"];

 // function to log collection
export function getCollection(){
    console.log(collection);
 }

 // function to add an item to the collection
export function addCollection(item){

collection.push(item);

 }

 // function returns the length of the collection

export function lengthCollection(){

    console.log(collection.length);

 }