//1. Show movies
//2. Register
//3. Show customer list

import fs from "node:fs";
import Customer from "./CustomerObject.js";

let movies = [];
let customers = [];

function ShowMovies(){
    fs.readFile("films.txt", "utf-8", (err, data) => {
        if(err){
            console.error("Hubo un error al acceder al archivo", err);        
        }
        else{
            movies = data.split("\n");
            console.log("The available movies are: ", movies);
        }
    })
};


function Register(name, movie){  
        let newCustomer = new Customer(name, movie);
        customers.push(newCustomer);
        console.log("New customer added succesfully");
}

function ShowCustomers(){
    for(let j = 0; j < customers.length; j++){
        console.log(customers[j]);
    }
}

ShowMovies();
Register("Juan", "The Matrix");
Register("Josefa", "The Godfather");
Register("Lindsay", "Star Wars");
ShowCustomers();