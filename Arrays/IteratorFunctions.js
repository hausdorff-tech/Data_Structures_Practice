/* 
These functions apply a function to each element of an array, 
either returning a value, a set of values, or a new
array after applying the function to each element of an array.
*/

//Non-array Generating Functions

//forEach() --> This function takes a function as an argument
//and applies the called function to each element of an array. 
//Here is an example of how it works:

function square(num){
    console.log("square of: ",num, "--> ", (num * num));
}

let numbers = [1,2,3,4,5,6];
console.log("forEach() function\n");
numbers.forEach(square);

//every() --> Applies a boolean function to an array and returns true if the function can return
//true for all elements in the array, going through them one by one. For example:

function isEven(num){
    return num % 2 == 0;
}

let nums = [2,4,7,8,10];
let even = nums.every(isEven);

console.log("\nevery() function\n");
if(even){
    console.log("Not all numbers are even: ", nums);
}
else{
    console.log("Not all numbers are even: ", nums);
}

//some() --> It will take a boolean function and return true if at least one of the elements
//in the array meets the criterion of the boolean function. For example:

function BooleanIsEven(number){
     number % 2 == 0;    

}

let count = [1,2,3,4,5];
let someCount = count.some(BooleanIsEven); //It will return "true" only.


console.log("\nsome() function\n");
if(someCount){
    console.log("Some numbers are even: ", count);
}
else{
    console.log("No numbers are even: ", count);
}

//reduce() --> Applies a function to an accumulator and the successive elements of an array until
//the end of the array is reached, yielding a single value. For example:

function add(total, currentValue){
    return total + currentValue;
}

let a = [1,2,3,4,5,6,7,8,9,10];
let sumOfNums = a.reduce(add);

//the reduce() function, in conjuction with the add() function 
//computes a running sum of the array elements, like this: 

/* 
    add(1,2) --> 3
    add(3,3) --> 6
    add(6,4) --> 10
    add(10,5) --> 15
    add(15,6) --> 21
    add(21,7) --> 28
    add(28,8) --> 36
*/

//We can also reduce() with strings to perform concatenation. For example:
function Concat(accumulatedString, item){
    return accumulatedString + item;
}

console.log("\nreduce() function: \n");
let words = ["the ", "quick ", "lion ", "jumped ", "to ","hunt ", "dinner."];
let sentence = words.reduce(Concat);

console.log("Original sentence: ", words);
console.log("United sentence: ", sentence);

//JS also offers reduceRight() function which is similar to reduce() function,
//only working from the right side of the array to the left side.


//Iterator Functions that Return a New Array
//There are two iterator functions that return a new array: 
//map() and filter(). The difference is that map() returns a new array
//with the results of the function application. They both apply 
//a function to each element of the array.

function Curve(grade){
    return grade += 5;
}

let grades = [77, 65, 81, 92, 83];
let newGrades = grades.map(Curve);

console.log("\nPractice of Map():\n");
console.log("Original grades: ", grades);
console.log("New grades: ", newGrades);


//filter() works similarly to every() function in that that function returns
//a new array consisting of those elements that satisfy the boolean function. For example:

function EvenNumbers(n){
return n % 2 === 0;
}

function OddNumbers(n){
    return n % 2 !== 0;
}

let N = [];
for(let i = 0; i < 20; i++){
    N[i] = i + 1;
}

console.log("\nUsing filter() function: \n");

let evens = N.filter(EvenNumbers);
console.log("Even Numbers: ", evens);

let odds = N.filter(OddNumbers);
console.log("Odd numbers: ", odds);




