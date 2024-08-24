//THIS FILE INDICATES HOW TO ACCESS AND WRITE TO ARRAYS.

//Data is assigned to array elements using the "[ ]" operators in an assignment statement.
//As an example, the following loop assigns the values 1 through 100 to an array:
let nums = [];
for(let i = 0; i < 100; i++){
    nums[i] = i + 1;
}

//Array elements are also accessed using the "[ ]" operators. For example:
let numbers = [1,2,3,4,5];
let sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
console.log("Manual sum of an array: ", sum);

//Also, accessing all the elements of an array sequentially using a "for loop" is easier.

let elements = [1,2,3,4,5,6];
let total = 0;
for(let i = 0; i < elements.length; i++){
    total += numbers[i];
}
console.log("Sequential sum of an array: ", total);


//In this part we're creating arrays from strings.
//Arrays can be created using the "split" function on a string

let sentence = "the quick brown fox jumped over the lazy dog";
let words = sentence.split(" ");
for(let x = 0; x < words.length; x++){
    console.log("word " + x + ": " + words[x]);
};