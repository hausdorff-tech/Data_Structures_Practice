function BooleanIsEven(number){
    return console.log(number % 2 == 0); //Returns "false";
}

BooleanIsEven(2);
BooleanIsEven(4);

function ReturnEvenNumbers(n){
    let result = []; let c = 0;

    for(let i = 0; i < n.length; i++){
        if(n[i] % 2 == 0){
            result[c] = n[i];
            c += 1;            
        }
    }

    

    console.log("Original array: ", n);
    return console.log("Even Numbers: ", result);

}

let testValues = [1,2,3,4,5];
ReturnEvenNumbers(testValues);

console.log();

let test2 = [3,6,8,1233];
ReturnEvenNumbers(test2);
