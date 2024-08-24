/*   
A JavaScript array is actually a specialized type of JavaScript object, with the indices
being property names that can be integers used to represent offsets.
*/

let numbers = [1,2,3,4,5,6]; //First way of creating an array. They can be empty.

let array = new Array(1,2,3,4,5,6); //Second way of creating an array. They can be empty too.

//If you call the array constructor with a single argument, 
//it specifies the length of the array.

//Example below:
let x = new Array(7);
console.log("Array 'x' length: ", x.length);


/* 
Unlike many other programming languages, but common for most scripting languages,
JavaScript array elements do not all have to be of the same type. Example below:
*/

let objects = [1, "John", true, null];

//We can verify that an object is an array by calling "Array.isArray()" and inserting
//the array's name in the parenthesis. Example below:
let n = 3;
let set = [7,4,5];

console.log("'set' is an array: ", Array.isArray(set));
console.log("'n' is an array: ", Array.isArray(n));

//Finally, most Javascript experts recommend using the " [  ]" operators, arguing 
//it is more efficient than calling the array constructor.

