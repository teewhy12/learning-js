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

const firstName = "John";
const lastName = "Doe";
const middleName = "0wen";
const currentJob = "Product Manager";
const email = "eventbyteewhyy@gmail.com";
// String concatenation - joining of strings +

const fullName = firstName + " " + middleName + " " + lastName;
console.log(fullName);
// My name is John and i work as a product manager
const description ="My name is" + firstName + "I work as a " + currentJob;
console.log(description);

const emaill = "You can send me on this email, " + firstName + "mubarak@ts.com" + email;
console.log(email);
// Getting characters - strings {position}
console.log(firstName[2]);
console.log(currentJob[8]);
// string length 
console.log(firstName.length);
console.log(description.length);

// string methods 
// transform - TOYOSI
console.log(fullName.toUpperCase());
console.log(fullName.toLocaleLowerCase());

// extracting parts of a string - slice substrings

const email2 = "mubarak@techstudioacademy.com";
// string.slice [0,7]
console.log(email2.slice(0, 8));
console.log(email2.slice(5, 12));
console.log(email2.slice(-5, -1));
console.log(email2.slice(0, 8));

//string.substrings= (start, count of cters)
console.log(email2.substr(0, 12));

// replace string content - replace replaceA11
console.log(email2.replace("mubarak", "funsho"));
console.log(email2.replaceAll("a", "$"));

//includes, indexof, lastIndexOf, trim, concat, 
console.log(email2.includes("@"));
console.log(email.indexOf("a"));
console.log(email2.lastIndexOf("a"));
const user = "      Mubarak          ";
const password = "   400000073647999     "
console.log(user.length, password.length);

const formattedUser = user.trim();
const formattedPassword = password.trimStart();
console.log(formattedUser.length);
console.log(formattedPassword.length);

console.log(email2.startsWith("m"));
console.log(email2.endsWith(".com"));
// trimStart, Trimend, startsWith, EndsWith

const job = "Frontend";
// frontend developer
console.log(job.concat(" ", "Developer", "is Rare"));
// template literals
const author = "Chinua Achebe";
const book = "Things Fall Apart";
const year = 1996;
// The book Things fall apart was written by chinua Achebe in the year 1996
const bookDescription = " The book " + book + " was wriiten by " + author + " in the year " + year;
console.log(bookDescription);

// template literals
const bookDescription2 = `The book ${book} was written by ${author} in the year ${year}`;

// Numbers - 5 6.3 45000
// Boolean - true and false 
// Null - null
// Undefined - undefined