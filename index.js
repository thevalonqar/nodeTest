const chalk = require('chalk');

//require lodash
var _ = require('lodash')

var readJSON = require('read-json');

// console.log(chalk.red('Hello world!'));

// console.log(chalk.greenBright('I\'m using chalk!'));

// var theDate = new Date();
// console.log(theDate.getDay());



//Declare some objects
// var person = new Object();
// var InventoryList = {};

// var Dog = {
//     name: 'Odie',
//     age: 15,
//     color: 'yellow'
// };

// for (var prop in Dog){
//     // console.log(prop + " " + Dog[prop]);
//     console.log(`${prop} is ${Dog[prop]}`);
// };

// _.forEach(Dog, value =>{
//     console.log(value);
// });

// var Owner = {
//     name: "Jon",
//     age: "32",
//     Cat: {
//         name: "Garfield",
//         color: "Orange"
//     },
//     Dog: {
//         name: "Odie",
//         color: "Green"
//     }
// };

// console.log(Owner.name + "'s" + " " + Owner.Dog.name);

// Owner.lastName = "Arbuckle";
// console.log(Owner.lastName);   

readJSON('/Users/Jan/Desktop/data.json', function(error, manifest){
    
       console.log(manifest);
       
    
   })