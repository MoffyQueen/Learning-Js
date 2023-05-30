console.log("Hello world");
console.log("Welcome to class");
console.log("Hello world");
// console.log("Welcome to class");

// // JS VARIABLES AND VALUES (var, let and const )
// let x = 2;
// x = 9
// const y = 4;
// y = 30
// console.log(x);
// console.log(y);
// //  Conventions and rules in naming var
// // have a logical var name
// const b = 'Mofe'
// const firstName = 'Mofe'
// // compound names - Camelcasing
// const lastName = 'Funsho'
// // illegal number, you can tsrat _ $
// const $year = 2003
// // const age = 4
// // const A = 5
// // console.log(AGE);
// //
// // let const = 67
// // const let = 7

const country = 'Ghana'; 
let state = "Lagos";

console.log(country);
console.log(state);
state = "Abia State"
console.log(state)
// JS DATA TYPES - (Primitive, complex)
// Strings - text - quotes - strings

const firstName = "John";
const lastName = "Doe";
const middlleName = "Owen";
const currentJob = "Product Manager";
const $year = 2003;
const email = "oretimofeoladipupo@gmail.com";
// String Concatenation - joining of strings +
const fullName = firstName + " " + middlleName + " " + lastName
console.log(fullName);
// My name is John and I work as a Product Manager
const description = "My name is " + firstName + " I work as a" + currentJob;
console.log(description);
// You can message on this email, oret@iofe.com
const desc = "You can message on this email, " + email;
console.log(desc);
// Getting Characters -string[position] MOFE

console.log(firstName[2]);
console.log(currentJob[8]);

// String length
console.log(firstName.length);
console.log(description.length)

// String Methods
// transform -
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

// extracting parts of a string - slice substring

const email2 = "oretimofeoladipupo@gmail.com";
// string.slice [0 ,7]
// string.slice [start,end]

console.log(email2.slice(0, 8));
console.log(email2.slice(5, 12));
console.log(email2.slice(-5, -1));
console.log(email2.substring(0, 8));

// string.substring(start, count of cters)
console.log(email2.substr(0, 12))

// replace string content - replace replaceAll
console.log(email2.replace("mofe", "funsho"))
console.log(email2.replaceAll("o", "a"))

// includes, indexOf, lastIndexOf, trim, concat
// trimStart, trimend, startsWith, EndsWith

console.log(email2.includes("mofe"));
console.log(email.indexOf("a"));
console.log(email2.lastIndexOf("a"));
const user = "     Mubarak     ";
const password = "   123456789   ";
console.log(user.length, password.length);

const formattedUser = user.trim();
const formattedPassword = password.trimStart();

const author = "Chinua Achebe";
const book = "Things Fall Apart";
const year = 1996;

const bookDescription = 
 " The book " + book +  " was written by "  + author + " in the year " + year;
console.log(bookDescription)
// Numbers - 5 6.3 45000
// Boolean true and false
// Null - null
// Undefined - undefined