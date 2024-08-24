//ARRAYS OF OBJECTS

/* Arrays can also consist of objects, and all the functions and properties 
of arrays work with objects. For example:
*/
function Point(x,y){
    this.x = x;
    this.y = y;
}

function displayPts(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i].x + ", " + arr[i].y);
    }
}

//Tests:
let p1 = new Point(1, 2);
let p2 = new Point(3, 5);
let p3 = new Point(2, 8);
let p4 = new Point(4, 4);
let points = [p1, p2, p3, p4];

console.log("PRE-MADE POINTS");

for(let i = 0; i < points.length; i++){
    console.log("Point " + parseInt(i+1) + ": ", points[i].x , "," , points[i].y);
};


let p5 = new Point(12, -3);
points.push(p5);

console.log("\n AFTER PUSH: ");
displayPts(points);

points.shift(); //shift() removes an element from the beginning of an array.
console.log("\n AFTER SHIFT");
displayPts(points);