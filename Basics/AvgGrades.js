//The variables "grades" and "students" are numerical, the difference is that "grades" is an array.
function Average(grades){
    
    let total = 0;
    let avg = 0; 

    for(let i = 0; i < grades.length; i++){
        total += grades[i];
        console.log("Student ", i, ": ", grades[i]);
    };

    avg = total/grades.length;

    return console.log("\nThe average grade in the class is: ", avg);
};

let g = [11, 60, 50, 20, 80, 100, 60];

Average(g);