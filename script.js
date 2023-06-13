/// SELECT ELEMENTS ON THE WEBPAGE - class, id, tagName, css selectors
// const heading = document.getElementsByClassName("heading");
// console.log(heading);
// const para = document.getElementById("ptag");
// console.log(para);

// const p = document.getElementsByTagName("p");
// console.log("p");

// // querySelector - css selectors - class, #id,p 
// //querySelectorAll

// const paragragh = document.querySelector("p");
// console.log(paragragh);
// const paragraghs = document.querySelectorAll("p");
// paragraghs.forEach((p) => console.log(p));
// const h1 = document.querySelector(".heading");
// console.log(h1);
// const div = document.querySelector("#test");
// console.log(div);

// // changing content on the web - innerText, textContent, innerHTML

// console.log(h1.innerText);
// h1.innerText += "Welcome";
// console.log(h1.textContent);
// h1.textContent = "Hello class";
// console.log(div.innerHTML);

// // div.innerHTML += "<h1> FROM JS</h1>";

// div.innerHTML += "<a>visit google</a>";

// const anotherH = document.querySelector("#test h1");
// console.log(anotherH);
// anotherH.textContent = "Funsho";
// const names = ["Wale", "Ade", "Oal", "John"];
// let content = document.querySelector(".content");
// name.forEach((name) => {

// })

const sucess = document.querySelector(".success");
success.classList.remove(".sucess");
sucess.classList.add(".success");
console.log(sucess.classList);

//add/remove

const body = document.querySelector("body");
body.innerHTML = '<h1>JAVASCRIPT</h1>'
body.style.backgroundColor ='blue'
