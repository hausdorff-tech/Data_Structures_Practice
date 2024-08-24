/* A jagged array is an array where the rows in the array may have a different number of elements. 
One row may have three elements, while another row may have 5 elements, whil yet another row
may have just one element. Many programming languages have problems handling jagged arrays
but JavaScript does not since we can compute the length of any row.

Imagine a grades array where students have an unequal number of grades recorded.
We can still compute the correct average for each student without changing the
program at all.
*/

let grades = [[89,77], [76,82,81], [91,94,89,99]];
let total = 0;
let average = 0.0;

/* 
    If you do a "column-wise" computation, then the jagged array is not a problem and
    the code can continue to be the same as "./ProcessGrades.js". You can even
    display it very well.

    However, if you do a "row-wise" computation on a jagged array, then it isn't really
    a "row-wise" computation. It just displays the data in a "row-like" manner. To do this, 
    inside the second for loop you have to put the columns first (the outer for loop counter) and then the
    rows (the inner for loop counter):

    array[col][row].
    
    */


for(let row = 0; row < grades.length; row++){
    for(let col = 0; col < grades[row].length; col++){
        total += grades[row][col];
    }
    average = total / grades[row].length;
    console.log("Student ", parseInt(row+1), " average: ", average.toFixed(2));
    total = 0;
    average = 0.0;
}

//Now, because the program computes the length of the row in the
//inner loop, this jaggedness doesn't cause any problem.

