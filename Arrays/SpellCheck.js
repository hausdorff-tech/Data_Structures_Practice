//We'll apply the spelling rule: "i before e except after c".

function afterc(str){
    if(str.indexOf("cie") > -1){
        return true;
    }
    else{
        return false;
    }
}

let words = ["recief", "deceive", "percieve","deceit", "concieve"];
let misspelled = words.filter(afterc);
console.log("Misspelled words: ", misspelled);
