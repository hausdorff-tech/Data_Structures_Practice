//THIS FILE INDICATES THE AGGREGATE OPERATIONS YOU CAN PERFORM ON AN ARRAY.

import readline from "node:readline";
//the import can also look like CommonJS: "const x = require('node:readline')"

//First, you can assign an array to another array:

//SHALLOW COPY
let nums = [];
for(let i = 0; i < 10; i++){
    nums[i] = i + 1;
}

let samenums = nums;

/* 
However, when you assign one array to another array, you are assigning a reference to
the assigned array. When you make a change to the original array, that change is reflected
in the other array as well. When a new array simply points to the original array's elements 
we call it a "SHALLOW COPY". A better alternative is to make a "DEEP COPY", so that each
of the original array's elements is actually copied to the new array's elements. For example:
*/

// DEEP COPY
function copy(arrA, arrB){
    if(arrA.length > arrB.length){
        for(let i = 0; i < arrA.length; i++){
            arrB[i] = arrA[i];
        }
    }
    if(arrB.length > arrA.length){
        for(let i = 0; i < arrB.length; i++){
            arrA[i] = arrB[i];
        }
    }
}

//TESTING THE "COPY" FUNCTION
let names = ["Sharon", "Tim", "John", "Sam", "Linda"];
let mix = [];

copy(names, mix);

console.log("'names' array: ",names);
console.log("'mix' array: ", mix);

mix[0] = 1;
console.log();
console.log("New 'mix' array: ", mix);
console.log("'names' array: ", names);


//STRING REPRESENTATION OF ARRAYS

//join() and toString() --> Return a string containing the elements of the array delimited by commas.
//For example:

let n = [1,2,3,4,5,6];
let nstring = n.join();
console.log("Numerical array to string: ", nstring);

//CREATING NEW ARRAYS FROM EXISTING ONES

//concat() --> It allows you to put together two or more arrays to create a new array.
//splice() --> It allows you to create a new array from a subset of an existing array.

//Now, an example of "concat()":

let cDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
let dDept = ["Raymond","Cinthya"];
let TDept = cDept.concat(dDept);

console.log("Array concatenation: ", TDept);

let ZDept = dDept.concat(cDept);

console.log("Reverse array concatenation: ", ZDept);

//Now, an example of "splice()":
//The arguments to the function are the starting position for taking the splice and
//the number of elements to take from the existing array.

let FDept = cDept.splice(3,1);


//ACCESSOR FUNCTIONS

//Accessor functions return some representation of the target array as their return values.
//indexOf() --> Looks to see if the argument passed to the function is found in the array. 
//It returns the [first] position if so, and if not, it returns -1.

let Names = ["David", "Cinthia", "Raymond", "Clayton", "Jennifer"];
console.log("Names in which to search: ", Names);
 
//Next, reading from the command line, also called "Accepting Input":
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a name to search for: ", name => {
    let position  = Names.indexOf(name);

    if(position >= 0){
        console.log("Found "+name+" at position " + position);
    }
    else{
        console.log("Not found in the array");
    }
    rl.close();
})

//lastIndexOf() --> Will return the position of the last occurrence of the argument above.
//That is, if you have multiple occurrences of it.
