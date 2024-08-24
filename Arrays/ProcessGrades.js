/*  
One pattern of processing arrays is accessing array elements by columns. 
And the other pattern emphasizes accessing array elements by rows.
We will use the grades array next.
*/
 /* 
    For both patterns we use a set of nested for loops.
 */

    //ROW-WISE COMPUTATION
    console.log("ROW-WISE COMPUTATION")

    let grades = [
        [89, 77, 78], 
        [76, 82, 81], 
        [91, 94, 89]];

    let total = 0; 

    let average = 0.0;

    for(let row = 0; row < grades.length; row++){
        for(let col = 0; col < grades[row].length; col++){
            total += grades[row][col];
        };
        average = total / grades[row].length; 
        console.log( "Average of "+"Student ", parseInt(row+1) + ": " + average.toFixed(2));
        //.toFixed() is roundind the decimals to 2 numbers.

        total = 0; 
        average = 0.0;
    };

// The inner loop is controlled by the expression "col < grades[row].length".
//And it works because it contains an array, and that array has a length property we
//can use to determine how many columns there are in a row.

//To perform a row-wise computation, we simply have to flip the for loops so that the outer loop
//controls the columns and the inner loop controls the rows. Here is the calculation for each test:

    //COLUMN-WISE COMPUTATION

console.log("\nCOLUMN-WISE COMPUTATION");

for(let col = 0; col < grades.length; col++){
    for(let row = 0; row < grades[col].length; row++){
        total += grades[row][col];
    }
    average = total / grades[col].length;
    console.log("Test ", parseInt(col+1), " average: ", average.toFixed(2));
    total = 0;
    average = 0.0;
};

