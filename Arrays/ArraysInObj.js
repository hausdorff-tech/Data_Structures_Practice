//Now we'll create an object that stores the weekly observed high temperature.
//The object has functions for adding a new temperature and computing the 
//average of the temperatures stored in the object  

function weekTemps(){
    this.dataStore = [];
    this.add = add;
    this.average = average;
}

function add(temp){
    this.dataStore.push(temp);
}

function average(){
    let total = 0;
    for(let i = 0; i < this.dataStore.length; i++){
        total += this.dataStore[i];
    }
    return total / this.dataStore.length;
}

//Tests

let thisWeek = new weekTemps();
thisWeek.add(30);//Celsius
thisWeek.add(31);//Celsius
thisWeek.add(33);//Celsius
thisWeek.add(40);//Celsius
thisWeek.add(35);//Celsius
thisWeek.add(30);//Celsius
thisWeek.add(33);//Celsius
console.log("This Week's average temperature: ", thisWeek.average());