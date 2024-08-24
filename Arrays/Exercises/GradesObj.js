/* Create a grades object that stores a set of student grades in an object. 
Provide a function for adding a grade and a function for displaying the student's
grade average
*/
function Student(){
    this.grades = [];
    this.addOne = addOne;
    this.addMultiple = addMultiple;
    this.average = average;
    this.displayGrade = displayGrade;
}

function addOne(element){
    if(element.length == 1){
        this.grades.push(element);
    }    
    if(element.length === 0 || element.length === null){
        console.log("Add at least one grade.");
        return this.grades;
    }
}

function addMultiple(elements){
    if(elements.length === 1){
        this.grades.push(elements);
        console.log("Next time, use 'addOne' in your code.");
    }
    if(elements.length > 1){
        for(let x = 0; x < elements.length; x++){
            this.grades.push(elements[x]);
        }
    }
    if(elements.length === 0 || elements.length === null){
         console.log("Insert at least two grades.");
         return this.grades;
    }
}

function average(){
    let totalSum = 0; let avg = 0;

    for(let i = 0; i < this.grades.length;i++){
        totalSum += this.grades[i];
    }

    avg = totalSum/this.grades.length;
     console.log(avg);
     return avg;
}

function displayGrade(){
    for(let c = 0; c < this.grades.length; c++){
        console.log(this.grades[c]);
    }
}

//Test
let Tim = new Student();
let Margaret = new Student();

//addMultiple
let tim = [81,82,60,70,90];
Tim.addMultiple(tim);
console.log("Tim's grades (addMultiple): ")
Tim.displayGrade();
console.log();

let marg = [60, 70, 80, 90, 100];
Margaret.addMultiple(marg);
console.log("Margaret's grades (addMultiple): ");
Margaret.displayGrade();
console.log();

//addOne
Tim.addOne(60);
Margaret.addOne(90);

console.log("Tim's grades (addOne): ")
Tim.displayGrade();
console.log();

console.log("Margaret's grades (addOne): ");
Margaret.displayGrade();
console.log();

//average
console.log("Tim's average: ");
Tim.average();
console.log();

console.log("Margaret average: ");
Margaret.average();
console.log();