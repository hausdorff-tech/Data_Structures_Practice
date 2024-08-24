/* A two-dimensional array is structured like a spreadsheet with rows and columns.
To create a two-dimensional array in Javascript, we have to create an array and
then make each element of the array an array as well. At the very least, we need to
know the number of rows we want the array to contain. With that information, we can now create 
a two-dimensional array with n rows and one column:
*/
let twoDimensional = [];
let rows = 5;

for(let i = 0; i < rows; i++){
    twoDimensional[i] = [];
}

//A better way to create a two-dimensional array is to follow
//the example from "Javascript: The Good Parts (O'Reilly, p.64)", but avoiding the
//change to the prototype. Here's his definition:

function Array2D(numrows, numcols, initial){
    let arr = [];
    for(let i = 0; i < numrows; i++){
        let columns = [];
        for(let j = 0; j < numcols; j++){
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr;
}

let N = Array2D(5,5,0);
console.log(N[1][1]); //displays 0

//You can also use this code with strings:

let S = Array2D(2,2,"Miami");
console.log(S[1][1])//displays Miami

