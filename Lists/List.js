/* 

*/

export default function List(){
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.ToString = ToString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.MoveTo = MoveTo;
    this.getElement = getElement;
    this.Length = length;
    this.contains = contains;
}

function append(element){
    //Here you can add any additional code for confirmation of information if
    //it is being implemented on the server-side.
    this.dataStore[this.listSize++] = element;
}

//Now, to remove an element, first we have to find the element
//in the list, and then we have to remove it and adjust the space in the underlying 
//array to fill the hole left by removing an element. We simplify the process 
//by using the splice() mutator function.

//HELPER FUNCTION
function find(element){
    for(let i = 0; i < this.dataStore.length; i++ ){
        if(this.dataStore[i] === element){
            return i; //This returns the position where the element was found.
        }
    }
    return -1;
}

function remove(element){
    let foundAt = this.find(element);
    if(foundAt > -1){
        this.dataStore.splice(foundAt, 1);
        this.listSize--;
        return true;
    }
    else{
        return false;
    }
}

//HELPER FUNCTION 
function length(){
    return this.listSize;
}

//FUNCTION TO DISPLAY DATA
function ToString(){
    return this.dataStore;

    //Strictly speaking, this function returns an array object and not a string,
    //But its utility is in providing a view of the current state of an object,
    //and just returning the array works adequately for this purpose.
}

function insert(element, after){
    let insertPos = this.find(after);
    if(insertPos > -1){
        this.dataStore.splice(insertPos+1, 0, element);
        this.listSize++;
        return true;
    }
    else{
        return false;
    }
}

function clear(){
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = 0;
    this.pos = 0;
}

//This determines if a given value is in the list
function contains(element){
    for(let i = 0; i < this.dataStore.length; i++){
        if(this.dataStore[i] === element){
            return true;
        }        
    }
    return false;
}

//Traversing a list
//This final set of functions allows movement through a list, and the
//last function getElement(), displays the current element in a list.

function front(){
    this.pos = 0;
}

function end(){
    if(this.pos > 0){
        this.pos--;
    }
}

function next(){
    if(this.pos < this.listSize - 1){
        this.pos++;
    }
}

function prev(){
    if(this.pos < this.listSize - 1){
        this.pos--;
    }
}

function currPos(){
    return this.pos;
}

function MoveTo(position){
    this.pos = position;
}

function getElement(){
    return this.dataStore[this.pos];
}
