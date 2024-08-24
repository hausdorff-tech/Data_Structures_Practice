/*  Modify the weeklyTemps object in the chapter so that it stores a month's
worth of data using a two-dimensional array. Create functions to display the monthly average,
a specific week's average, and all the week's averages.
*/

function MonthlyTemp(){
    this.temperature = [];
    this.addWeek = addWeek;
    this.avgTemp = avgTemp;
};

function addWeek(week){
    let arr = []; this.temperature;
    for(let rows = 0; rows < 6; rows++){

    }

    if(week.length > 0){        
        this.temperature.push(week);
    }
    else{
        if(week.length === 0){
            console.log("Insert at least one week of temperatures.")
            return this.temperature;
        }
    }
}

function avgTemp(){
    let sum = 0; let total=0; 
    
    //row-wise computation:
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

    for(let row = 0; row < this.temperature.length; row++){
        for(let col = 0; col < this.temperature[row].length; col++){
            sum += this.temperature[row][col];
        }
        average = sum / this.temperatures[row].length;
    }

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
    console.log(total);
}

let temp = [
            [0,10,20],
            [20,30,35,40],
            [35,36,38,35]
        ];

let m = new MonthlyTemp();
m.addWeek(temp);
m.avgTemp();