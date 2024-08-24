/* Store a set of words in an array and display the contents both forward and backward. 
*/

function Words(){
    this.words = [];
    this.addOne = addOne;
    this.addMultiple = addMultiple;
    this.forward = forward;
    this.backward = backward;
}


function addOne(element){
    let array = element.split("");
    for(let i = 0; i < array.length; i++){
        this.words.push(array[i].toLowerCase());            
    }    
    if(element.length === 0 || element.length === null){
        console.log("Add at least one element.");
        return this.words;
    }
}

function addMultiple(elements){
    if(elements.length === 1){
        console.log("There's just one element. Use the 'addOne' function.");
    }
    if(elements.length > 1){
        for(let a = 0; a < elements.length; a++){
            this.words.push(elements[a].toLowerCase());
        }
    }
    if(elements.length === 0 || elements.length === null){
        console.log("Add at least two elements.");
        return this.words;
    }
}

function forward(){
    //It just returns the word.
    for(let x = 0; x < this.words.length; x++){
        if(typeof this.words[x] === "string"){
            this.words[x].toLowerCase();                                    
        }
        else{
            console.log("Insert a word.");
            return this.words;
        }
    }

    return console.log(this.words);
    //
    
}

function backward(){
    for(let y = 0; y < this.words.length; y++){
        if(typeof this.words[y] === "string"){
            this.words[y].toLowerCase();            
        }
        else{
            console.log("Insert a word.");
        }
    }
    return console.log(this.words.reverse());
}   

//Test
let phrase = ["You're", "in", "love", "when", "reality", "is", "better", "than", "dreams"];
let p = new Words();
p.addMultiple(phrase);
//Forwards
console.log("The words forward");
p.forward();

console.log("The words backward");
p.backward();

let w = "Hello";
let p2 = new Words();
p2.addOne(w);

//Forwards
console.log("The word forward");
p2.forward();

//Backwards
console.log("The word backwards");
p2.backward();
