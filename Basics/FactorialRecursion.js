//This is a demonstration of a factorial operation using recursion.

function factorial(number){
    if(number === 1){
        return number;
    }
    else{
        //If number is greater than 1, multiply number times the value of the
        //parameter of "factorial" function minus 1.
        return number * factorial(number - 1);
    };
}

let response = factorial(4);
console.log(response);