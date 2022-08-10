//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favFood(foods){

    for (let food in foods) {
        if (food == "shakes") {
            for (let flavor in foods[food][0]){
                console.log(`${flavor}: ${foods[food][0][flavor]}`)
            } continue;
        }
        console.log(`${food}: ${foods[food]}`)
    }
}

favFood(person3)

// const favFoods = (foods) => {
//     for (let food in foods){
//         console.log(key, food[key])
//     }
// }
// console.log(favFoods(person3))

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/
// Create our Person Prototype
// Use an arrow to create the printInfo method
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printInfo = () => {
        console.log(`My name is ${this.name} and I am ${this.age} years old`)
        };
    addAge = (years) => { this.age += years };

    }

let p1 = new Human("Brad", 31)
let p2 = new Human("Ezra", 7)
p1.addAge(1);
p1.printInfo();
p2.addAge(3)
p2.printInfo();


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/


const bigString = (word) => {
    return new Promise((resolve, reject) => {
        if(word.length > 10) {
            resolve(true);
            console.log("Big word");
        }
        else {
            reject(false);
            console.log("Small Number");
        }
    })
}
console.log(bigString("enthusiastic"))
console.log(bigString("Job"))
