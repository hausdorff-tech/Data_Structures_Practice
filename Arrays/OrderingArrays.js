//THIS FILE IS ABOUT ORDERING AN ARRAY

//reverse() --> Reverses the order of the elements in an array. For example:
let nums = [1,2,3,4,5]
nums.reverse();
console.log("Reversed numbers: ", nums);

//sort() --> It works to sort the elements of an array into alphabetical order.
let names = ["David", "Mike", "Anna", "Aurora","Cinderella"];
names.sort();
console.log("Names ordered alphabetically: ", names);

//For numbers, we'll make a small comparison program:
function compare(num1, num2){
    return num1 - num2;

    //If the number returned is negative, the left operand is lesser than the second.
    //If the number returned is positive, the right operand is lesser than the first.
}

let even = [2,4,6,12,1];
even.sort(compare);
console.log("Sorted with 'sort()' and 'compare': ",even);

/*
The sort() function uses the compare() function to sort the array elements numerically
rather than lexicographically
*/

