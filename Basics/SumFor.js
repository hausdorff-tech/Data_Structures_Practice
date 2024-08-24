function SumForLoop(){
    //Initialization of the variables we'll use later.
    let number = 1;
    let sum = 0;

    //For loop. Works this way: The first semicolon contains the initial variable.
    //The second semicolon contains the number of times the loop will repeat. So, 10.
    //The third semicolon contains the number of increases of the cycle. So, one by one.
    for(number; number < 11; number++){
        sum+=number;
    }

     return console.log("The sum is: ", sum);
};

function SumForArray(){
    let n = [3,7,12,22,100]; //Array of numbers.
    let sum = 0;

    for(let i = 0; i < n.length; i++){
        sum += n[i];
    }

    return console.log("The sum (with array) is: ", sum);
}

SumForLoop();
SumForArray();