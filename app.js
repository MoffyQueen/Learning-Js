// console.log("Hello world");
// console.log("Welcome to class");
// console.log("Hello world");
// // console.log("Welcome to class");

// // // JS VARIABLES AND VALUES (var, let and const )
// // let x = 2;
// // x = 9
// // const y = 4;
// // y = 30
// // console.log(x);
// // console.log(y);
// // //  Conventions and rules in naming var
// // // have a logical var name
// // const b = 'Mofe'
// // const firstName = 'Mofe'
// // // compound names - Camelcasing
// // const lastName = 'Funsho'
// // // illegal number, you can tsrat _ $
// // const $year = 2003
// // // const age = 4
// // // const A = 5
// // // console.log(AGE);
// // //
// // // let const = 67
// // // const let = 7

// const country = 'Ghana';
// let state = "Lagos";

// console.log(country);
// console.log(state);
// state = "Abia State"
// console.log(state)
// // JS DATA TYPES - (Primitive, complex)
// // Strings - text - quotes - strings

// const firstName = "John";
// const lastName = "Doe";
// const middlleName = "Owen";
// const currentJob = "Product Manager";
// const $year = 2003;
// const email = "oretimofeoladipupo@gmail.com";
// // String Concatenation - joining of strings +
// const fullName = firstName + " " + middlleName + " " + lastName
// console.log(fullName);
// // My name is John and I work as a Product Manager
// const description = "My name is " + firstName + " I work as a" + currentJob;
// console.log(description);
// // You can message on this email, oret@iofe.com
// const desc = "You can message on this email, " + email;
// console.log(desc);
// // Getting Characters -string[position] MOFE

// console.log(firstName[2]);
// console.log(currentJob[8]);

// // String length
// console.log(firstName.length);
// console.log(description.length)

// // String Methods
// // transform -
// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());

// // extracting parts of a string - slice substring

// const email2 = "oretimofeoladipupo@gmail.com";
// // string.slice [0 ,7]
// // string.slice [start,end]

// console.log(email2.slice(0, 8));
// console.log(email2.slice(5, 12));
// console.log(email2.slice(-5, -1));
// console.log(email2.substring(0, 8));

// // string.substring(start, count of cters)
// console.log(email2.substr(0, 12))

// // replace string content - replace replaceAll
// console.log(email2.replace("mofe", "funsho"))
// console.log(email2.replaceAll("o", "a"))

// // includes, indexOf, lastIndexOf, trim, concat
// // trimStart, trimend, startsWith, EndsWith

// console.log(email2.includes("mofe"));
// console.log(email.indexOf("a"));
// console.log(email2.lastIndexOf("a"));
// const user = "     Mubarak     ";
// const password = "   123456789   ";
// console.log(user.length, password.length);

// const formattedUser = user.trim();
// const formattedPassword = password.trimStart();
// console.log(formattedUser.length);
// console.log(formattedPassword.length);

// console.log(email2.startsWith("m"));
// console.log(email2.endWith(".com"));

// // template literals
// const author = "Chinua Achebe";
// const book = "Things Fall Apart";
// const year = 1996;
// // The book Things Fall Apart was written by Chinua Achebe in the year 1996;

// const bookDescription =
//  " The book " + book +  " was written by "  + author + " in the year " + year;
// console.log(bookDescription)
// Numbers - 5 6.3 45000
// math operators - + - * / ** %
// console.log(6 % 2);
// console.log(5 % 2);

// let total = 50;
// // increase the value of total by 10
// total = total + 10;
// total += 10;
// total += 5;

// // decrease the val of total by 12
// total = total - 12;
// total -= 12;
// total -= 10;

// console.log(total)

// let post = 40;
// post += 15;
// post -= 15;
// post *= 2;
// post /= 5;

// console.log(post);

// let likes = 0;
// likes += 1;
// likes += 1;
// likes += 1;
// likes -= 1;
// likes--;
// likes++;

// console.log(likes)

// // NaN - not a number

// console.log(5 ** "hello");

// // Boolean true and false
// console.log(true);
// console.log(false)
// const country = "Nigeria";
// const continent = "Africa";
// let population = "1000000";

// console.log(country, continent, population);
// const isIsland = false;
// const language = "English";

// population /= 2;
// console.log(population);

// population++;
// console.log(population);
// // template literals -
// // decription - Togo is in Africa and its population of 1000000 people speak english
// const description2 = `${country} is in ${continent} and its population of ${population} people speak ${language}`
// console.log(description2);
// const description =
// country +  "is in" + continent + "and its population of" + population
// console.log(description)

// // Logical Operators and && or || not !

// console.log(10 == "10");
// console.log(10 === "10");
// console.log("a" > "A"); //

// // type conversion and type coercion

// // string numbers
// // strings to numbers

// const str = "90";
// console.log(typeof str);
// const converted = Number(str);
// console.log(typeof converted);

// // numbers to string

// const num = 900000;
// console.log(typeof num);
// const converted2 = String(num);
// console.log(typeof converted2);

// // type coercion

// const num1 = 8;
// const num2 = "7";

// console.log(num1 + num2);
// console.log(typeof res);

// // Null - null
// let age = null;
// console.log(age, age + 4, 'my age is ${age}');
// // Undefined - undefined
// let year;
// console.log(year);
// console.log(year, year + 4, 'the year is ${year}');
// //truthy -
// console.log(Boolean(""));
// and falsy values 0, null, undefined

//control flow
//conditional statement
//if (condition){code}
// const password = oretimofe;
// if (password.length > 6) {
// console.log("Your password is strong");
// }
// if (false) {
// console.log("working");
// }
// if else
// if(condition){
// CODE 1
//} else
// if (password.length > 6 && password.includes("@")) {
// console.log("Your password is strong");
// } else {
// console.log("Your password is weak");
//     }
    // const country = "Hungary";
    // const continent = "Europe";
    // const population = 12;
    // const isIsland = false;
    // const language = "French";

    // if (language === "English" && population < 50 && isIsland) {
    //     console.log('You should live in ${country}');
    // } else {
    //     console.log('${country} does not meet your criteria');
    // }
// const age = 18;
// if (age >= 18) {
//     console.log("You are an adult");
// } else {
//     console.log("You are not one");
//     }
// if (condition) else if (another condition) else if (condition){}else{}

// // const password = "mofe";
// // recommended > 7 an dinclude @, strong > 7 and weak

// if (password.length >= 7 && password.includes("@")) {
//     console.log("Your password is recommended");
// } else if (password.length >= 7) {
//     console.log("Your password is strong");
// } else {
//     console.log("Your password is weak")
// }
// whether a number is positive, negative or zero
// const num = "3";

// if (num > 0) {
//     console.log('${num} is a positive');
// } else if (num < 0) {
//     console.log('${num} is a negative number');
// } else {
//     console.log("This is Zero");
// }
// // even or odd

// if (num % 2 === 0) {
//     console.log("This is EVEN");
// } else {
//     console.log("This is ODD");
// }
// const age = 18
// if (age < 18) {
//     console.log("Welcome to the baby section");
// } else if (age <= 50) {
//     console.log("Welcome to the club");
// } else  {
//     console.log("Welcome to VIP SECTION");
// }
// SWITCH STATeMENT
// const day = 1
// switch (day) {
//     case 1:
//         console.log("MONDAY");
//         break;
//     case 2:
//         console.log("TUESDAY");
//         break;
//     case 3:
//         console.log("WEDNESDAY");
//         break;
//     case 4:
//         console.log("THURSDAY");
//         break;
//     case 5:
//         console.log("FRIDAY");
//         break;
//     case 6:
//         console.log("SATURDAY");
//         break;
//     case 1:
//         console.log("SUNDAY");
//         break;
    
//     default:
//         break;
// }


// ternary operator
// if(condition){code 1}else{code 2}

//  condition ? action 1 : action 2

// 15 > 7 ? console.log("Yes") : console.log("NO");

// const num2 = 46;

// num2 % 2 === 0
//     ? console.log("This is An EVEN number")
//     : console.log("This is an ODD number");


// LOOPS - repitive tasks - for, while, do.. while loop

// for (initializer let i = 0; condition i > 5; increment i++){code}

// for (let i = 0; i < 5; i++) {
//     console.log('In the loop ${i}');
// }
// console.log("outside of the loop");

// // sum of
// let sum = 0
// for (i = 0; i <= 5; i++){
//     sum += i
// }
// console.log(sum);
// // initializer
// // while(condition){code increment}

// let x = 0;
// while (x < 20) {
//     console.log("HELLO");
//     x++;
// }

// let y = 0;
// do {
//     console.log("HEY");
//     y++
// } while (y < 5);

// functions
// const var1 = "John";

// Function declaration
// function myFunction() {
//     console.log("HELLO CLASS");
//     console.log("YOU ARE WELCOME");
// }
// myFunction();

// function greet(name = "User", age = 18) {
//     console.log("WELCOME" + name + age);
// }
// greet("John" , 76);
// greet("Sandra" , 5);
// greet("EMMANUEL" , 78)
// greet();
// greet("ola");

// // calculate the age of users
// // 2023 - year

// function calcAge(year) {
//     const age = 2023 - year;
//     console.log(`Your age is ${age}`);
// }
// calcAge(1960);
// calcAge(2000);

// function sumNums(a,b) {
//     console.log(`the sum of ${a} and ${b} is ${a + b}`);
// }
// sumNums(4.5, 78);

// function describeCountry(country, population, capitalCity) {
//     console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`);
// }
// describeCountry("Finland", 6, "helsink")
// describeCountry("Finland", 6, "helsink")
// describeCountry("Finland", 6, "helsink")

// checks if an email is valid or not

// checkEmail("testgoogle@.com");

// function checkEmail(email) {
//     if (email.includes("@")) {
//         console.log(`${email} is a valid email address`);
//     } else {
//         console.log(`${email} is not a valid email`);
//     }
// }
// checkEmail("abcgoogle.com");

//HOISTING
// function expression
// const myAge = 90;
// console.log(myAge);

// myFunction2(4,5);
// const myFunction2 = function (a, b) {
//     console.log("anything");
//     console.log(a + b);
// }

// myFunction2(7, 8);

//return keyword

// const precious = function (a, b) {
//     return a * b;
// }
// precious(9, 6);

// const test = precious(10, 10);
// console.log(test);

// // create a function that calc average of two teams
// // d - 103, 98, 89
// // k - 110, 87, 95

// const calcAverage = function (a, b, c) {
//     const avg = (a + b + c) / 3;
//     return Number(avg.toFixed(2));
// }

// const avgDolphin2 = calcAverage(123, 98, 89);
// const avgKaola = calcAverage(110, 87, 95);
// console.log(avgDolphin2, avgKaola);

// function checkWinner(teamA, teamB) {
//     if (teamA > teamB) {
//         console.log("First Team won");
//     } else if (teamB > teamA) {
//         console.log("Second Team won");
//     } else {
//         console.log("No winner");
//     }
// }

// checkWinner(avgDolphin2, avgKaola)
// ARROW FUNCTION

// const name = ()=>{}

// const logger = (a, b, c) => {
//     const total = a + b + c;
//     return total;
// };

// console.log(logger(4, 5, 7));
// // logger(3, 4, 5)

// // const difference = (a, b) +> {
// // return a - b;
// // };

// const difference = (a, b) => a - b;

// console.log(difference(67, 50));

// const calcAverage = (a, b, c) => {
//     const avg = (a + b + c) / 3;
//     return Number(avg.toFixed(2));
// };

// // VARIABLE SCOPING - global local var

// const myname = "Moyo";
// console.log(myname);
// if (true) {
//     const surname = "Ayo";
//     const myname = "Wale";
//     console.log(surname);
//     console.log("in a block" + myname);
// }
// const surname = "Ade";

// console.log("Outside" + surname);

// const a = 5;
// console.log(a);

// const local = () => {
//     const a = 7;
//     const b = 8;

//     console.log(a);
// };
// local();
// // console.log(b);
// console.log(a);

// // arrays
// // ARRAYS {elements, element, el}

// const students = ["Mofe", "Funso", "Zainab"];
// console.log(students);
// // arrays properties and methods
// console.log(students.length);

// // get element in arr
// console.log(students[0]);
// console.log(students[students.length - 1]);

// // converting an array to a string - tstring, join
// console.log(students.toString());
// console.log(students.join(" "));

// // adding elements to an array - push , unshift
// students.push("Ola");
// students.push("Nike");
// console.log(students.push("Funsho"));
// console.log(students);

// students.unshift("Ebuka");
// students.unshift("Emma");

// console.log(students);

// // removing elements from an array pop shift
// students.pop();
// students.pop();
// students.pop();

// students.shift();
// students.shift();
// console.log(students);

// console.log(students.sort());
// console.log(students.reverse());
// console.log(students.includes("Ola"));
// console.log(students.includes("Mofe"));

// const anotherStudents = ["Toyin", "Zainab"];
// console.log(students.concat(anotherStudents, ["Ayo", "Ade", "Ade"]));

// // includes, sort, pop, push, shift, unshift,
// // slice, splice, concat, join, toString

// console.log(students.slice(0, 2));

// const countries = ("nigeria", "ghana", "canada", "china")
// // countries = nigeria, ghana, canada, china
// console.log(countries.length);

// if (countries.length > 5) {
//     console.log(countries.length > 5);
// } else {
//     console.log(countries.length < 5);
// }

// let saving = 20000;
// const transaction = [5000, -10000, -100];

// transaction.push(-2000);
// transaction.push(50000);

// transaction.push(-3000);
// transaction.pop();
// console.log(transaction);
// let debit = 0;
// let credit = 0;

// for (i = 0; i < transaction.length; i++) {
//     // console.log(transaction[i]);
// // saving = saving + transaction[i]
//     saving += transaction[i];
//     if (transaction[i] < 0) {
//         debit += transaction[i];
//         console.log(`You have been debited ${transaction[i]}`);
//     } else {
//         credit += transaction[i];
//         console.log(`You have been credited ${transaction[i]}`);
//     }
// }
// console.log(`The total debit is ${debit}`);
// console.log(`The total credit is ${credit}`);

// console.log(`Your account balance is ${saving}`);
// // filter, find, map, forEach
// // higher order function, callback func
// const friends = ["John", "Jane", "Adam", "Jennifer", "Owen"];
// friends.includes("Lester");

// friends.forEach((friend, index) => {
//     console.log(`${index}The name of my friend is ${friend}`);
// });

// friends.forEach((f, index) => {
//     console.log(f, index);
// });

// // map
// friends.map((val) => {
//     if (val === "Jane" || val === 'Adam') {
//         console.log(`${val} is my best friend`);
//     } else {
//         console.log(`${val} is just my friend`)
//     }
// });

// // filter fine

// const filteredFriends = friends.filter((friend) => {
//     return friend.startsWith("J");
// });
// console.log(filteredFriends);

// // find

// const foundUser = friends.find((friend) => {
//     return friend.startsWith("J");
// })
// console.log(foundUser);

// const result = friends.filter((friend) => friend.length > 6);
// const result2 = friends.find((f) => f.startsWith("A"));

// console.log(result, result2)

// accumulator

// const movement = [300, -50, 700, 400, -300];

// const total = movement.reduce((acc, val) => {
//     return acc + val;
// }, 0);

// console.log(`Your Total bill is ${total}`);

// // // object
// const desc = ['Mubarak','Ola', 39, 'Developer', ['Shola', 'Toyin']]
// // OBJECT - PROPERTIES, METHODS
// // car key-value
// const user = {
//     firstName: 'Oretimofe',
//     lastName: 'Oladipupo',
//     age: 20,
//     job: 'Web Developer',
//     friends: ['Funso', 'Zainab', 'Ola',]
// }
// console.log(user);

// // ACCESS properties from an object
// // Dot notation, bracket
// console.log(user.firstName.toUpperCase());
// console.log(user.age);

// // objName['propertyName']
// console.log(user["friends"].includes('Steven'));
// const nameKey = "Name";
// console.log(user["last" + nameKey]);

// // adding properties to an object
// user.hasACar = true;
// user.status = "Married";
// console.log(user);

// // remove properties

// // delete
// delete user.friends;
// console.log(user);

// const book = {
//     title: "Rich Dad Poor Dad",
//     author: "Robert Kiyosaki",
//     year: 2001,
//     pages: 207,
//     similarBooks: [
//         "Richest Man in Babylon",
//         "The Monk who sold his Ferrari",
//         "Think and Grow Rich"
//     ],
//     publisher: "Macmillian",
//     getSummary: function () {
//         return `The title of the book is ${this.title} written by ${this.author} in the year ${this.year}`
//     }
// };
// console.log(book);
// // object methods

// console.log(book.getSummary());

// console.log(this);
// // object destructing
// // const {propertyNames} = objName

// // publisher, author, year
// const { publisher, author, pages, year } = book;
// console.log(publisher);
// // this
// const person = {
//     name: 'John Doe',
//     height: 56,
//     hasALicense: false,
//     job: 'Designer',
//     workHours: {
//         mon: {
//             open: '8:30AM',
//             close: '5PM'
//         },
//         wed: {
//             open: '9AM',
//             close: '4PM'
//         },
//         fri: {
//             open: '8AM',
//             close: '1PM'
//         }
//     }
// }

// // person.workHours.mon.open
// const {
//     workHours: { mon: open },
// } = person;

// const users = [
//     { name: "John", userName: "Johnny123", password: "34fg", age: 32 },
//     { name: "Jane", userName: "Jane@23", password: "45kn", age: 17 },
//     { name: "Mario", userName: "marBoy56", password: "5uhj", age: 45 },
//     { name: "Kerry", userName: "Jnon12345", password: "5uhj", age: 16 },
// ];
// const canView = users.filter((user) => {
//     return user.age >= 18;
// });
// console.log(canView);

// const search = users.filter((user) => {
//     return user.name.includes("J") || user.userName.includes("J");
// });
// console.log(search);

// const book = {
//     title: "Rich Dad Poor Dad",
//     author: "Robert Kiyosaki",
//     year: 2001,
//     pages: 207,
//     similarBooks: [
//         "Richest Man in Babylon",
//         "The Monk who sold his Ferrari",
//         "Think and Grow Rich"
//     ],
//     publisher: "Macmillian",
//     getSummary: function () {
//         return `The title of the book is ${this.title} written by ${this.author} in the year ${this.year}`
//     }
// }

// const { title, ...all } = book;
// console.log(all);

// const ages = [32, 54, 16, 65, 89];
// const newAge = [2, ...ages, 76, 80]
// console.log(newAge);

// // const [varNames] = arrN

// const [...rest] = ages;
// console.log(rest);

// // MATH OBJECT - 8 math constants
// // console.log(Math.PI);

// // math methods
// // sqrt, trunc, round, random, ceil, floor

// console.log(Math.sqrt(25));

// console.log(Math.trunc(1.234));

// // 5
// console.log(Math.round(67.98));
// console.log(Math.round(0.23));
// console.log(Math.round(7.34));
// console.log(Math.round(2.56));
// console.log(Math.round(-2.5));

// console.log(Math.ceil(10.1));

// console.log(Math.floor(6.7));

// console.log(Math.random() * 2 + 1);

// console.log(Math.trunc(Math.random() * 6));

// const computer = ["rock", "paper", "scissors"];
// const randomNum = (Math.trunc(Math.random() * 3));
// const computerChoice = computer[randomNum];

// const playerChoice = prompt("Enter a choice (rock, paper, scissors):");

// const checkWin = function (computer, player) {
//     if (computer === player) {
//         return "This is a tie";
//     } else if (player === "rock") {
//         if (computer === "scissors") {
//             return "Rock smashes scissors, You win";
//         } else {
//             return "Paper covers rock, You Lose!";
//         }
//     } else if (player === "paper") {
//         if (computer === "rock") {
//             return "Paper covers rock, You win";
//         } else {
//             return "Scissors cuts paper! You Lose";
//         }
//     } else if (player === "Scissors") {
//         if (computer === "paper") {
//             return "Scissors cuts paper! You Win";
//         } else {
//             return "Rock smashes scissors, You Lose";
//         }
//     }
// };
// const result = checkWin(computerChoice, playerChoice);
// console.log(result);

// // Synchronouslog
// // asybchronous js
// console.log("first");
// setTimeout(() => {
//     console.log("Second");
// }, 15000);

// console.log("Third");

// setInterval(() => {
//     console.log("I am in the interval");
// }, 2000);

// non-blocking code
// console.log("A");
// console.log("B");
// setTimeout(() => {
//     console.log("IN THE TIMEOUT");
// }, 5000);

// console.log("C after the timeout");

// const myInterval = setInterval(() => {
//    console.log("Welcome user"); 
// }, 3000);

// setTimeout(() => {
//     clearInterval(myInterval);
// }, 15000);

// FETCHING DATA - APIs - Application Programming Interface
// JSON - JavaScript Object Notation
// data - array

// Promises - A Future Container

// const url = "https://jsonplaceholder.typicode.com/users";

// // fetch
// // fetch(url)
// //     .then((response) => {
// //         return response.json();
// //     })
// //     .then((data) => {
// //         console.log(data);
// //     });

// //   fetch(url)
// //     .then((response) => response.json())
// //     .then((users) => console.log(users))

// const fetchData = (site) => {
//     fetch(site)
//         .then((res) => res.json())
//         .then((data) => console.log(data));
// };
// fetchData(url);
// fetchData("https://jsonplaceholder.typicode.com/posts");

// // async / await

// // try and catch block
// try {
//    console.log(retyu); 
// } catch (error) {
//    console.log(error); 
// }

// // aysnc await
// const getData = async (site) => {
//     try {
//         const response = await fetch(site);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// };
// getData(url);

// // storage api
// // local storage - setItem, getItem, removeItem, clear, length
// localStorage.setItem("name", "Ola Ola");
// localStorage.setItem("token", "234567890");

// const result = localStorage.getItem("name");
// console.log(result);

// localStorage.removeItem("token");

// const len = localStorage.length;
// console.log(len);

// localStorage.clear()

// REVISION

// // DOM 