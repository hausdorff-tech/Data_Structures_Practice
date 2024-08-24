function first(word){
    return console.log(word[0]);    
}

let sentence = ["For", "Your","Information"];
let acronym = sentence.map(first);
console.log(acronym.join(""));
