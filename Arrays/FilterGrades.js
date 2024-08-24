function Approved(n){
    return n >= 60;
};

let grades = [];

for(let x = 0; x < 20; x++){
    grades[x] = Math.floor(Math.random() * 99);
}

let A = grades.filter(Approved);

console.log("Practice of filter() function.");
console.log("All grades: ", grades);
console.log("Approved grades: ", A);