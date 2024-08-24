//IN THIS FILE WE WILL TALK ABOUT MUTATOR FUNCTIONS IN JAVASCRIPT.


//ADDING ELEMENTS TO AN ARRAY.
//push() --> Adds an element to the end of an array.

//Using "push()" is more intuitive than altering the length property of an array
//to extend it.

let nums = [1,2,3];
nums.push(7);
console.log("Array after 'push()' function: ", nums);

nums[nums.length] = 13; //This is less intuitive.
console.log("Array in less intuitive mode: ", nums);

//Adding data at the beginning is harder that adding data at the end of the array, 
//for that to happen without a mutator function
// each element of the array has to be shifted up one position
//before the new data is added. For example:


let newNum = 0;
let N = nums.length;
for(let i = N; i >= 0; i--){
    nums[i] = nums[i - 1];
}

nums[0] = newNum;

console.log("New number added at the beginning without mutator function: ", nums);


//The mutator function for adding array elements to the
//beginning of an array is "unshift()". Here's how it works:

let numbers = [2,4,6,8,10];
console.log("Array of numbers without using 'unshifht()': ", numbers);

let zero = 0;
numbers.unshift(zero); //You can add multiple elements, not just one.
console.log("Array of numbers after using 'unshift()': ",numbers);

//REMOVING ELEMENTS FROM AN ARRAY
//One removes the elements easily by using the pop() mutator function.

//without mutator functions, removing elements from the beginning of the
//array requires shifting elements toward the beginning of the array,
//causing the same inneficiency as working without 'unshift()'.

let natural = [1,9,11,23,28];
console.log("An initial set of natural numbers: ", natural);

let y = natural.length;

for(let i = 0; i < y; i++){
    natural[i] = natural[i + 1]
}

natural = natural.filter(e => e !== undefined);

console.log("The previous natural numbers after inefficient 'pop()': ", natural);

//The mutator function that we need in order to remove an element from the beginnning of an array
//is 'shift()':

let bigOdds = [13, 15,19,21];
bigOdds.shift();
console.log("Bigger odd numbers being applied 'shift()' function: ", bigOdds);

//Remember: Both 'pop()' and 'shift()' return the values they removed.


//ADDING AND REMOVING ELEMENTS FROM THE MIDDLE OF AN ARRAY

//For this we'll use 'splice()'. To review 'splice()':
// 1. First argument is where you want to begin adding elements.
// 2. Second argument is the number of elements to remove (0 when adding).
// 3. Third argument is composed of the elements to add themselves.

let letters = ["A", "B", "C"];
let newLetters = ["a","b","c"];
letters.splice(3,0,newLetters);
console.log("Letters after applying 'splice()' to add elements: ", letters);