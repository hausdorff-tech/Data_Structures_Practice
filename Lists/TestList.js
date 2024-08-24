import List from "./List.js";

//Testing the List function we've just made.
let names = new List();
names.append("Maria");
names.append("Clara");
names.append("Jenn");
names.append("Danny");
names.append("Lizzie");

//Let's display the first element of the list
console.log("Displaying the first element of the list:");
names.front();
console.log(names.getElement());

//Let's move forward one element and display the element's value
console.log("\nMoving forward one element of the list: ");
names.next();
console.log(names.getElement());

//Now, we'll move forward twice and backward once, displaying the current element 
//to demonstrate how the prev() function works.
console.log("Moving forward twice and backward once.");
names.next();
names.next();
names.prev();
console.log(names.getElement());

console.log("\nPrinting all the elements of the list: ");
for(let i = 0; i < names.Length(); i++){
    console.log(names.dataStore[i]);
} 

//names.dataStore.forEach(e => console.log(e)); // ---> This one works too!

