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
let year;
console.log(year);
console.log(year, year + 4, `the year is $(year)`);

// // truthy
console.log(Boolean(""));
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
if (true && true && true) {
    console.log("Here");
}
const country = "Ireland";
const continent = "Newland";
const population = 12;
const isIsland = false;
const language = "French";

//sarah speaks english has less than 50 people and is not an island 
// You should live in portugal
// Portugal does not meet your criteria

if (language === "English" && population < 50 && !isIsland) {
    console.log(`You should live in ${country}`);
} else {
    console.log(`${country} does not meet your criteria`);
}
const age = 18;
// >=18

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are not one");
}

// if (condition)else if (another condition)else if(condition){}else{}

const password = "456u"
// recommended >7 an include @, strong > 7 and weak

if (password.length >= 7 && password.includes("@")) {
    console.log("Your password is recommended");
} else if ( password.length >= 7) {
    console.log("Your password is strong");
} else {
    console.log("Your password is weak");
}
const numb = 7
if (numb > 0){
    console.log('A positive Number');
}else if (numb < 0){
    console.log('A negative Number');
}else{
    console.log('This is Zero');
}
// even or odd numbers
if  (numb % 2 === 0) { 
    console.log("This is EVEN");
} else {
    console.log("This is ODD");
}

const club = 50;

 if (club > 18) {
     console.log("Welcome to baby section");
 } else if ("club > 50") {
    console.log("Welcome to VIP SECTION");
 } else {
    console.log("Welcome to the Club");
 }

 // SWITCH STATEMENT
 const day = 67;
 switch (day) {
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WED");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    case 6:
        console.log("SATURDAY");
        break;
    case 7:
        console.log("SUNDAY");
        break;

    default:
        console.log("NOT A VALID DAY");
        break;
 }
 
 const grade = "a"
 switch (grade) {
    case "A":
    case "a":
        console.log("EXCLLENT");
        break;
    case "B":
    case "b":
        console.log("VERY GOOD");
        break;
    case "C":
    case "c":
        console.log("GOOD");
        break;
    case "D":
    case "d":
        console.log("FAIR");
        break;
    case "E":
        console.log("POOR");
        break;
    case "F":
        console.log("FAIL");
        break;
    default:
        console.log("NOT A VALID GRADE");
        break; 
 }
// bmi = mass / height ** 2
const marksHeight = 1.69;
const marksWeight = 78;
const johnsHeight = 1.95;
const johnsWeight = 92;

const marksBmi = marksWeight / marksHeight ** 2;
const johnsBmi = johnsWeight / johnsHeight ** 2;
console.log(marksBmi > johnsBmi);
if (marksBmi > johnsBmi) {
    console.log(`Marks's BMI ${marksBmi} is higher than john's ${johnsBmi}`);
} else { 
    console.log(`John's BMI ${johnsBmi} is higher than Mark's ${marksBmi}`);
}

const avgDolphin = (96 + 108 + 89) / 3

// console.log((2 + 2 + 2) / 3);
 // console.log(2 + 2 + 2 / 3);

 const avgKaola = (88 + 91 + 110) / 3;
 console.log(avgDolphin, avgKaola);
 if (avgDolphin > avgKaola) {
    console.log("Team Dolphin Wins ");
 } else if (avgKaola > avgDolphin) {
    console.log("Team Kaola wins");
 } else {
    console.log("This is a Draw");
 }

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
const var1 = "John";

// function declaration 
function myfunction() {
    console.log("HELLO CLASS");
    console.log("YOU ARE WELCOME");
}
myfunction();

function greet(name) {
    console.log(Welcome + name);
}
greet("John");
greet("Sandra");
greet("EMMANUEL");
greet();

// calculate the age of users
// 2023 - year

function calcAge(year) {
    const age = 2023 - year;
    console.log(`Your age is ${age}`);
}
calcAge(1960);
calcAge(2000);

function sumNums(a, b) {
    console.log(`the sum of ${a} and ${b} is ${a + b}`);
}
sumNums(4.5, 78);
sumNums(-45,87);

//Finland has 6 million people and its capital city is helsinki 
function describeCountry(country, population, capitalCity) {

}
describeCountry('Togo', 12, "Paris");
describeCountry("Belgium", 3, "Brussels");
describeCountry("Russia", 65, "Moscow");


// check if an email is valid or not
function checkEmail(email) {
    if (email.includes("@")) {
        console.log(`${email} is a valid email address`);
    } else { 
        console.log(`${email} is not a valid email`);
    }
}
checkEmail("abcgoogle.com");

// HOSTING - 
// function expression \
const myfunction2 = function () {
    console.log("Functiion expression");
    console.log(a + b);
};

myfunction2(7 + 8);

// return keyword

const toyosi = function (a, b) {
    // console.log("hello")
    return a * b;
    // console.log("hello")
};
toyosi(9, 6);

const test = toyosi(10, 10);
console.log(test);

//create a function that calc average of the two teams 
// d - 103. 98, 89
// k - 110, 87, 95

const calcAverage = function (a, b, c) {
    const avg = (a + b + c) / 3;
    // return avg.tofixed(2);
    return Number(avg.toFixed(2));
};

const avgDolphin2 = calcAverage(123,98, 89);
const avgKaola2 = calcAverage(110, 87, 95);
console.log(avgDolphin2, avgKaola2);

function checkWinner(teamA, teamB){
    if (teamA > teamB) {
        console.log("First Team won");
    } else if (teamB > teamA) {
        console.log("Second Team won");
    } else {
        console.log("NO winner");
    }
}
// arrays
// object
// asybchronous js
// DOM


