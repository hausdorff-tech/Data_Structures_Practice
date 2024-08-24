//The data structures discussed in this book are implemented as objects.
/* In this section we demonstrate
the techniques used in this book for creating objects and for creating and using an
object’s functions and properties. */

function Checking(amount){
    this.balance = amount; //property
    this.deposit = deposit; //function
    this.withdraw = withdraw; //function 
    this.toString = toString; //function
}

function deposit(amount){
    this.balance += amount;
}

function withdraw(amount){
    if(amount > this.balance){
        console.log("Insufficient funds");
    }
    if(amount <= this.balance){
        this.balance -= amount;
    }
}

function toString(){    
    return console.log("Balance: ", this.balance);
}

/* 
We use the "this" keyword with the balance property in order for the
interpreter which "balance" property we are referring to.
*/

//Example usage
let account = new Checking(1000);
account.deposit(100);
account.toString(); //prints 1,100
account.withdraw(750);
account.toString(); //prints 350
account.withdraw(1450) //Prints "Insufficient funds"