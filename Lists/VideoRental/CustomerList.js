export default function Customer(name, movie){
    this.name = name;
    this.movie = movie;
    this.datastore = 0;
    this.listSize = 0;
    this.ToString = ToString;
    this.clear = clear;
    this.find = find;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.currPos = currPos;
    this.MoveTo = MoveTo;
    this.getCustomer = getCustomer;
    this.contains = contains;
}

function find(element){
    for(let i = 0; i < this.dataStore.length; i++){
        if(this.dataStore[i] === element){
            return i; //We're only returning the position.
        }
    }
}

function insert(element, after){
    let insertPos = this.find(after);

    if(insertPos > -1){
        this.datastore.splice(insertPos+1, 0, element);
        this.listSize++;
        return true;
    }
};

function append(element){
    this.dataStore[this.listSize++] = element;
}

function remove(element){
    let foundAt = this.find(element);
    if(foundAt > -1){
        this.datastore.splice(foundAt, 1);
        this.listSize--;
        return true;
    }
    else{
        return false;
    }
}

function ToString(){
    return this.datastore;
}

function clear(){
    delete this.datastore;
    this.datastore = [];
    this.listSize = 0;
    this.pos = 0;
}

function contains(element){
    for(let i = 0; i < this.datastore.length; i++){
        if(this.datastore[i] === element){
            return true;
        }
    }
}

function front(){
    return this.pos = 0;
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

function getCustomer(){
    return this.datastore[this.pos];
}
