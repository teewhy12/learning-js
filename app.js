// console.log('hello world');
// console.log("welcome to class");
// JS VARIABLES AND VALUES { VAR, LET AMD CONST }
// let x = 2;
// x = 9;
// const y = 4;
// y = 30; ( impossible because it is const)
// console.log(x);
// console.log(y);
// conventions and rules in naming var
// have a logical var name
// const b = 'mubarak'
// const firstName = 'mubarak'
// compound names - camelcasing
// const lastName = 'Ty'
// illegal ( you can not start with numbers, but can start with _ and $)
// const $year = 2003
// const a = 4
// const A = 5
// console.log(AGE);

// you can not do this ' let const = 67 or const let = 7'

// const country = "Southafrica"
// let state = "Lagos state"

// console.log(country);
// console.log(state);
// state = "Ogun state"
// console.log(state);
// JS DATA TYPES { Primitive, complex}
// Strings - text - quotes - strings

// const firstName = "John";
// const lastName = "Doe";
// const middleName = "0wen";
// const currentJob = "Product Manager";
// const email = "eventbyteewhyy@gmail.com";
// // String concatenation - joining of strings +

// const fullName = firstName + " " + middleName + " " + lastName;
// console.log(fullName);
// // My name is John and i work as a product manager
// // const description ="My name is" + firstName + "I work as a " + currentJob;
// // console.log(description);

// const emaill = "You can send me on this email, " + firstName + "mubarak@ts.com" + email;
// console.log(email);
// // Getting characters - strings {position}
// console.log(firstName[2]);
// console.log(currentJob[8]);
// // string length 
// console.log(firstName.length);
// console.log(description.length);

// // string methods 
// // transform - TOYOSI
// console.log(fullName.toUpperCase());
// console.log(fullName.toLocaleLowerCase());
// console.log(fullName.toUpperCase());
// console.log(fullName.toLocaleLowerCase());

// // extracting parts of a string - slice substrings

// const email2 = "mubarak@techstudioacademy.com";
// // string.slice [0,7]
// console.log(email2.slice(0, 8));
// console.log(email2.slice(5, 12));
// console.log(email2.slice(-5, -1));
// console.log(email2.slice(0, 8));

// //string.substrings= (start, count of cters)
// console.log(email2.substr(0, 12));

// // replace string content - replace replaceA11
// console.log(email2.replace("mubarak", "funsho"));
// console.log(email2.replaceAll("a", "$"));

// //includes, indexof, lastIndexOf, trim, concat, 
// console.log(email2.includes("@"));
// console.log(email.indexOf("a"));
// console.log(email2.lastIndexOf("a"));
// const user = "      Mubarak          ";
// const password = "   400000073647999     "
// console.log(user.length, password.length);

// const formattedUser = user.trim();
// const formattedPassword = password.trimStart();
// console.log(formattedUser.length);
// console.log(formattedPassword.length);

// console.log(email2.startsWith("m"));
// console.log(email2.endsWith(".com"));
// // trimStart, Trimend, startsWith, EndsWith

// const job = "Frontend";
// // frontend developer
// console.log(job.concat(" ", "Developer", "is Rare"));
// template literals
// const author = "Chinua Achebe";
// const book = "Things Fall Apart";
// const year = 1996;
// // The book Things fall apart was written by chinua Achebe in the year 1996
// const bookDescription = " The book " + book + " was wriiten by " + author + " in the year " + year;
// console.log(bookDescription);

// // template literals
// const bookDescription2 = `The book ${book} was written by ${author} in the year ${year}`;
// console.log(firstName.toUpperCase());
// console.log(firstName.toLocaleLowerCase());
// console.log(firstName.to);

// console.log();
// // Numbers - 5 6.3 45000
// let total = 50;
// // increas the valur 

// console.log(total);
// let post = 40;
// post += 15;
// post -= 15;
// post *= 2;
// post /=5;

// console.log(post);

// let likes = 0;
// likes += 1;
// likes += 1;
// likes += 1;
// likes -= 1;
// likes++;
// likes--;
// likes++
// likes--;

// console.log(likes);
// const discount = 0.1

// // let total = total + 10

// // NaN - not a number 

// console.log(5 ** "hello"); //NaN

// // increase the val 
// // Boolean - true and false 
// console.log(true);
// console.log(false);
// const country = 'Nigeria';
// const continent = 'Ogun';
// let population = 360000;

// console.log(country, continent, population);
// const isIsland = false 
// const language = "English";

// console.log(population / 2);
// // const description = `${country} is in ${continent} and its population of ${population}`
// // console.log(description);

// const description = `${country} as a country speak majorly ${language}`;
// console.log(description);

// // boolean true or flase 

// // comparison operators - < > <= >= ==
// console.log(6 > 3); // true
// console.log(6 < 3); // false
// console.log(5 >= 5.0); // true

// // logical operators (and, or, not)
// // and = &&
// // or = ||
// // not = ! 
// console.log(5 > 6 && 2 == 2);
// console.log(6 > 7 || 2 === 2 );

// // typeof
// console.log(typeof 5); // number
// // type conversion and type coercion

// // string to numbers

// const str = "10";
// console.log(typeof str);
// const converted = Number(str);
// console.log(typeof converted);

// // numbers to strings
// const num = 900000;
// console.log(typeof num);
// const converted2 = String(num);

// // type of corecion

// // Null - null
// let age = null;
// console.log(age, age + 4, `my age is $(age)`);

// // Undefined - undefined
// let year;
// console.log(year);
// console.log(year, year + 4, `the year is $(year)`);

// // // truthy
// console.log(Boolean(""));
// falsy values 0, null, undefined

//control flow
// conditional statement
// if(condition){code}
// const password = "219jtngng@";
// if (password.length > 6) {
//     console.log("Your password is strong");
// }
if (false) {
    console.log("Working");
}

//if else
// if(condition){}
// CODE 1
//}else{
//code 2
//

// if (password.length > 6 && password.includes("@")) {
//     console.log("Your password is strong");
// } else {
//     console.log("Your password is weak");
// }
// if (true && true && true) {
//     console.log("Here");
// }
// const country = "Ireland";
// const continent = "Newland";
// const population = 12;
// const isIsland = false;
// const language = "French";

// //sarah speaks english has less than 50 people and is not an island 
// // You should live in portugal
// // Portugal does not meet your criteria

// if (language === "English" && population < 50 && !isIsland) {
//     console.log(`You should live in ${country}`);
// } else {
//     console.log(`${country} does not meet your criteria`);
// }
// const age = 18;
// // >=18

// if (age >= 18) {
//     console.log("You are an adult");
// } else {
//     console.log("You are not one");
// }

// // if (condition)else if (another condition)else if(condition){}else{}

// const password = "456u"
// // recommended >7 an include @, strong > 7 and weak

// if (password.length >= 7 && password.includes("@")) {
//     console.log("Your password is recommended");
// } else if ( password.length >= 7) {
//     console.log("Your password is strong");
// } else {
//     console.log("Your password is weak");
// }
// const numb = 7
// if (numb > 0){
//     console.log('A positive Number');
// }else if (numb < 0){
//     console.log('A negative Number');
// }else{
//     console.log('This is Zero');
// }
// // even or odd numbers
// if  (numb % 2 === 0) { 
//     console.log("This is EVEN");
// } else {
//     console.log("This is ODD");
// }

// const club = 50;

//  if (club > 18) {
//      console.log("Welcome to baby section");
//  } else if ("club > 50") {
//     console.log("Welcome to VIP SECTION");
//  } else {
//     console.log("Welcome to the Club");
//  }

//  // SWITCH STATEMENT
//  const day = 67;
//  switch (day) {
//     case 1:
//         console.log("MONDAY");
//         break;
//     case 2:
//         console.log("TUESDAY");
//         break;
//     case 3:
//         console.log("WED");
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
//     case 7:
//         console.log("SUNDAY");
//         break;

//     default:
//         console.log("NOT A VALID DAY");
//         break;
//  }
 
//  const grade = "a"
//  switch (grade) {
//     case "A":
//     case "a":
//         console.log("EXCLLENT");
//         break;
//     case "B":
//     case "b":
//         console.log("VERY GOOD");
//         break;
//     case "C":
//     case "c":
//         console.log("GOOD");
//         break;
//     case "D":
//     case "d":
//         console.log("FAIR");
//         break;
//     case "E":
//         console.log("POOR");
//         break;
//     case "F":
//         console.log("FAIL");
//         break;
//     default:
//         console.log("NOT A VALID GRADE");
//         break; 
//  }
// // bmi = mass / height ** 2
// const marksHeight = 1.69;
// const marksWeight = 78;
// const johnsHeight = 1.95;
// const johnsWeight = 92;

// const marksBmi = marksWeight / marksHeight ** 2;
// const johnsBmi = johnsWeight / johnsHeight ** 2;
// console.log(marksBmi > johnsBmi);
// if (marksBmi > johnsBmi) {
//     console.log(`Marks's BMI ${marksBmi} is higher than john's ${johnsBmi}`);
// } else { 
//     console.log(`John's BMI ${johnsBmi} is higher than Mark's ${marksBmi}`);
// }

// const avgDolphin = (96 + 108 + 89) / 3

// // console.log((2 + 2 + 2) / 3);
//  // console.log(2 + 2 + 2 / 3);

//  const avgKaola = (88 + 91 + 110) / 3;
//  console.log(avgDolphin, avgKaola);
//  if (avgDolphin > avgKaola) {
//     console.log("Team Dolphin Wins ");
//  } else if (avgKaola > avgDolphin) {
//     console.log("Team Kaola wins");
//  } else {
//     console.log("This is a Draw");
//  }

 // ternary operator 
//if(condition){code 1}else{code 2}

// condition ? action 1 : action 2

// 15 > 7 ? console.log("Yes") : console.log("NO");

// const num2 = 46;

// num2 % 2 === 0
// ? console.log("This is an EVEN number")
// : console.log("This is an ODD number");


 // LOOPS - repitive tasks - for , while, do.. while loop

 // for (initializer let i = 0; condition i < 5; increment i++ ){code}

//  for (let i = 0; i < 5; i++) {
//     console.log(`In the loop ${i}`);
//  }
//  console.log("outside of the loop");

 // initializer
 //while(condition){code increment}

 // sum of 
//  let sum = 0;
//  for (i = 0; i <= 5; i++) {
//     sum += i;
//  }
// functions 
// const var1 = "John";

// // function declaration 
// function myfunction() {
//     console.log("HELLO CLASS");
//     console.log("YOU ARE WELCOME");
// }
// myfunction();

// function greet(name) {
//     console.log(Welcome + name);
// }
// greet("John");
// greet("Sandra");
// greet("EMMANUEL");
// greet();

// // calculate the age of users
// // 2023 - year

// function calcAge(year) {
//     const age = 2023 - year;
//     console.log(`Your age is ${age}`);
// }
// calcAge(1960);
// calcAge(2000);

// function sumNums(a, b) {
//     console.log(`the sum of ${a} and ${b} is ${a + b}`);
// }
// sumNums(4.5, 78);
// sumNums(-45,87);

// //Finland has 6 million people and its capital city is helsinki 
// function describeCountry(country, population, capitalCity) {

// }
// describeCountry('Togo', 12, "Paris");
// describeCountry("Belgium", 3, "Brussels");
// describeCountry("Russia", 65, "Moscow");


// // check if an email is valid or not
// function checkEmail(email) {
//     if (email.includes("@")) {
//         console.log(`${email} is a valid email address`);
//     } else { 
//         console.log(`${email} is not a valid email`);
//     }
// }
// checkEmail("abcgoogle.com");

// // HOSTING - 
// // function expression \
// const myfunction2 = function () {
//     console.log("Functiion expression");
//     console.log(a + b);
// };

// myfunction2(7 + 8);

// // return keyword

// const toyosi = function (a, b) {
//     // console.log("hello")
//     return a * b;
//     // console.log("hello")
// };
// toyosi(9, 6);

// const test = toyosi(10, 10);
// console.log(test);

//create a function that calc average of the two teams 
// d - 103. 98, 89
// k - 110, 87, 95

// const calcAverage = function (a, b, c) {
//     const avg = (a + b + c) / 3;
//     // return avg.tofixed(2);
//     return Number(avg.toFixed(2));
// };

// const avgDolphin2 = calcAverage(123,98, 89);
// const avgKaola2 = calcAverage(110, 87, 95);
// console.log(avgDolphin2, avgKaola2);

// function checkWinner(teamA, teamB){
//     if (teamA > teamB) {
//         console.log("First Team won");
//     } else if (teamB > teamA) {
//         console.log("Second Team won");
//     } else {
//         console.log("NO winner");
//     }
// }

// arrow function
// const name = ()=>{}

// const logger = (a, b, c) => {
//     const total = a + b + c;
//     return total;
// };
// console.log(logger(4, 5, 7));
// // logger(3, 4, 5)
// // const difference = (a, b) => {
// // return a - b;
// // };

// const difference = (a, b) => a - b;
// console.log(difference(67, 50));

// // const calcAverage = functiion (a, b, c) {
// // const avg = (a + b + c) / 3;
// // return number (avg.toFixed(2));
// // };

// const calcAvg = (a, b, c) => {
//     const avg = (a + b + c) / 3;
//     return Number (avg.toFixed(2));
// };

// //VARIABLE SCOPING

// const myname = "Moyo";
// console.log(myname);
// if (true) {
//     const surname = "Ayo";
//     const myname = "Wale";
//     console.log(surname);
//     console.log("in a block " + myname);
// }
// const surname = "Ade";
// console.log("Outside " + surname);

// const a = 5;
// console.log(a);

// const local = () => {
//     const a = 7
//     const b = 8
//     console.log(a);
// };
// local();

// console.log(a);

// // ARRAYS [elements, element, el]

// const students = ["Mofe", "Precious", "Sheu"];
// console.log(students);
// // arrays properties and methods 
// console.log(students.length);

// //get element in array
// console.log(students[2]);
// console.log(students[students.length - 1]);

// function myfunction() {
//     console.log("hello class");
//     console.log("you are welcome");
// }
// myfunction()

// function greet(name = " user", age = 18) {
//     console.log("JS hard chaii" + name + age);
//     console.log("God abeg" + name + age);
// }
// greet(" sorry", " 5");
// greet(" no vex")
// greet()

// //calculate the age of user (2023 - yearborn)
// function calcAge(year) {
//     const age = 2023 - year;
//     console.log(`your age is ${age}`);
// }
// calcAge(1960)
// calcAge(1990)

// function sumNums(a, b) {
//     console.log(`the sum of ${a} and ${b} is ${a + b}`);
// }
// sumNums(4.5, 78)
// sumNums(-45, 87)

// function decripCountry(country, population, capitalcity) {
//     console.log(`${country} has ${population} million people and its capital city is  ${capitalcity}`);
// }
// decripCountry("ghana", 7, "accra ")
// decripCountry("canada", 25, "toronto")
// decripCountry("amaerica", 100, "washington")

// //check if an email is valid or not
// function checkEmail(email) {
//     if (email.includes('@')) {
//         console.log(`${email} is a valid address`);
//     } else {
//         console.log(`${email} is not valid`);
//     }
// }
// checkEmail('olabayoayahoo.com')

// //HOISTING
// //function expresion
// const myAge = 90;
// console.log(myAge);

// //myfunction2 (4, 5)
// const myfunction2 = function (a, b) {
//     console.log("anything");
//     console.log(a + b);
// }
// myfunction2(7, 9)

// //return keyword
// const presh = function (a, b) {
//     return a * b
// }
// presh(9, 0)
// const test = presh(10, 10)
// console.log(test);

// //d- 103, 98, 89
// //k- 110, 87, 95
// const calcAverage = function (a, b, c) {
//     const avg = (a + b + c) / 3
//     return Number(avg.toFixed(2))
// }
// const avgDolphin2 = calcAverage(123, 98, 89);
// const avgKoala2 = calcAverage(110, 87, 95)
// console.log(avgDolphin2, avgKoala2);

// function checkWinner(teamA, teamB) {
//     if (teamA > teamB) {
//         console.log("first team won");
//     } else if (teamB > teamA) {
//         console.log("second team won");
//     } else {
//         console.log("no winner");
//     }
// }
// checkWinner(avgDolphin2, avgKoala2)

// //arrow function  - const name = ()=> {}
// const logger2 = (a, b, c) => {
//     const total = a + b + c;
//     return total;
// }
// console.log(logger(4, 5, 7));

// const difference2 = (a, b) => a - b
// console.log(difference(67, 50));

// const calcAverage2 = (a, b, c) => {
//     const avg2 = (a + b + c) / 3;
//     return Number(avg.tofixed(2))
// }

// //variables scoping -global and local var

// const b = 5;
// console.log(a);

// const local1 = () => {
//     const a = 7
//     const b = 8
//     console.log(a);
// }
// local()

// console.log(a);

// //arrays [elements, elements, elements]
// const stud = ['ola', 'egbo', 90, null]
// console.log(stud);

// //array property and methods
// console.log(stud.length);
// //get element in array
// console.log(stud[2]);
// console.log(stud[stud.length - 1]);

// //coverting an array to a string
// console.log(stud.toString());
// console.log(stud.join("/"));

// //adding elements to an array- push and unshift
// stud.push('toyosi')
// stud.push('zainab')

// stud.unshift('precious')
// stud.unshift('500')
// console.log(stud);

// //removing elements from the array- pop  and shift
// console.log(stud.pop());
// stud.pop()
// stud.pop()

// stud.shift()
// stud.shift()
// console.log(stud);

// //sort arranges element alphabetically and reverse does the opposite
// console.log(stud.sort());
// console.log(stud.reverse());

// //includes
// console.log(stud.includes("adamu"));
// console.log(stud.includes(90));

// //indexOf lastindexOf
// const anotherStud = ["toyin", "ebuka"]
// console.log(stud.concat(anotherStud, ["you", "dey", "craze"]));

// //slice 
// console.log(stud.slice(0, 4));

// const county = ['alabama', 'orange', 'ozark', 'oneHill']
// console.log(county.length);
// if (county.length > 5) {
//     console.log("true");
// } else {
//     console.log('false');
// }

// let savings = 50000
// const transactions = [5000, -10000, -100]
// transactions.push(-2000)
// transactions.push(50000)

// transactions.push(-3000)
// transactions.pop()
// console.log(transactions);
// let debit = 0
// let credit = 0

// for (i = 0; i < transactions.length; i++) {
//     console.log(transactions[i]);
//     savings += transactions[i]
//     if (transactions[i] < 0) {
//         debit += transactions[i];
//         console.log(`you have been debited ${transactions[i]}`);
//     } else { credit += transactions[i]
//         console.log(`you have been credited ${transactions[i]}`);
//     }
// }
// console.log(`Sapa nice one total debit ${debit}`);
// console.log(`You get money total credit ${credit}`);
// console.log(`your available balance is ${savings}`);

// //includes, sort, pop, push, shift, unshift, slice, splice, concat, join, toString

// //filter, find, map, forEach
// //higher order function, call back function
// const frds = ["john", "jane", "adam", "jenny", "owen", "adamu"]
// frds.includes('ada')

// frds.forEach((frd) => {
//     console.log(`the name of my friend is ${frd}`);
// })
// frds.forEach((frd, index) => {
//     console.log(`${index} the name of my frd is ${frd}`);
// })

// //map
// frds.map((val, index) => {
//     console.log(index);
//     if (val === "owen" || val === "adamu") {
//         console.log(`${val} is my best friend`);
//     } else {
//         console.log(`${val} is just my friend`);
//     }
// })
// //filter find
// const filterFriends = frds.filter((frd) => {
//     return frd.startsWith ("j")
// }
// )
// console.log(filterFriends);

// const findFriends = frds.find((frd) => {
//     return frd.startsWith ("j")
// })
// console.log(findFriends);

// const rizz = frds.filter((frd) => frd.startsWith("a"))
// const rizz2 = frds.find((frd) => frd.startsWith("a"))
// const rizz3 = frds.filter((frd) => frd.length > 3 )
// console.log(rizz, rizz2, rizz3);

// accumulator 

const movement = [300, -50, 700, 400, -300];
const total = movement.reduce((acc, val) => {
    return acc + val;
}, 0);

console.log(`Your Total bill is ${total}`);

const user = {
    firstName: 'Toyosi',
    lastName: 'Ife',
    age: 80,
    job: 'Software Developer',
    family: 'Sisters',
}
console.log(user);

// ACCESS properies from an object
// dot notation, bracket

console.log(user.family.toUpperCase());
console.log(user.age);

// objName["propertyName"]
console.log(user["family"]);
const namekey = "Name";
console.log(user["last" + namekey]);

// adding properties to an object
user.hasAcar = true;
user.status = "Married";
console.log(user);

//remove properties 

// delete
delete user.job;
console.log(user);

const book = {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    year: 2001,
    pages: 207,
    similarBooks: ["Richest Man in Babtlon", "The Monk who sold his Ferrari", "Think and Grow Rich", ],

publisher: "Macmillan",
getSummary: function () {
    return `The title of the book is ${this.title} written by ${this.author} in the ${this.year}`
    // the titlr is rich poor dad by robert in the year 2001

    // console.log("This is book summary")
},
};
console.log(book);
// object methods

book.getSummary();


console.log(this);
// object destructuring 
// const {properNames} = pbjuName
// publiser, author, year

// const { publisher, author, pages, year1 } = book;
// console.log(publisher);

//this
const person = {
    name: "Toyosi"

}
/// COMPLETE

const { publisher, title, ...all } = book;
console.log(all);

const ages = [32, 54, 16, 65, 89];
const newAge = [2, ...ages, 76, 80]
console.log(newAge);

// const [varNames] = arrName

const [...rest] = ages;
// console.log(h)

console.log(rest);

// MATH OBJECT - 8 math constants
// console.log(Math.PI);

// math methods
// sqrt, trunc, round, random, ceil, floor

console.log(Math.sqrt(25));
console.log(Math.trunc(9.789));

// 5

console.log(Math.round(7.34)); // 7
console.log(Math.round(0.23));
console.log(Math.round(67.98));
console.log(Math.round(2.56));
console.log(Math.round(-2.5));

// Ceil
console.log(Math.ceil(10.1));
console.log(Math.ceil(70.2));

// Floor
console.log(Math.floor(6.7));

// Random 
console.log(Math.random() * 2 + 1);  // 0 1 2 3 4 5
console.log(Math.trunc(Math.random() * 6));

const computer = ["rock", "paper", "scissors"];
// console.log(computer[2]);


const randomNum = Math.trunc(Math.random() * 3);
const randomChoice = computer[randomNum];
// console.log(computerChoice);

const playerChoice = prompt ("Enter a choice (rock, paper, scissors): ");

const checkWin = function (computer, player) {
    if (computer === player) {
        return "This is a tie"
    } else if (player === "rock") {
        if (computer === "scissors") {
            return "Rock smashes scissors, You win! ";
        } else {
            return "Paper covers rock, You Lose";
        }
    } else if (player === "paper") {
        if (computer === "rock") {
            return "Rock smashes scissors, You win! ";
        } else {
            return "Scissors cuts paper! You Lose";
        }
        
    } else if (player === "scissors") {
        if (computer === "paper") {
            return "Scissors cut paper, You win!";
        } else {
            return "Rock smashes scissors, You Lose!";
        }
    }
};


// const result = checkWin(computerChoice, playerChoice);
// console.log(result);
// rest ihs and spread rhs ...

// includes, sort, pop, shift, unshift, slice, splice, concat, join, toString
// filter, find, map, forEach


// object
// asybchronous js
// DOM


