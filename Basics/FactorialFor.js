function factorial(number){
    //Initialization of the variable for later
    let product = 1;

    //Reverse Cycle. It works by starting at the end, in other words, initializing at ".length".
    //Then, the condition for DECREASE is that the variable or length is greater than 1.
    //Lastly, it decreases.
    for(let i = number; i >= 1; i--){
        product *= i;
    }

    //Functions in Javascript must always return something, so don't forget the "return".
    return console.log("The factorial of ", number, " is: ", product);
}
factorial(4);