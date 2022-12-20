// creating a element 
// div span p h1, h6, mark0 --- elements;


let newElement = document.createElement("div"); 
newElement.style.backgroundColor = "yellow"
newElement.style.color = "red"
//inner text
newElement.innerText = "I won't work when there is a inner html"


 //inner html
newElement.innerHTML = 
`
HI there
<div>
<h1 style="background-color: red; color:yellow">I'm inner html</h1>
</div>
`
// set attribute
newElement.setAttribute("class", "create-class")

// get elementby id
let inbuildElement = document.getElementById("sample-id"); 
inbuildElement.innerText= "Js intro over Id"
inbuildElement.style.backgroundColor = "red";

// sample  element by id

let demoPara = document.getElementById("para")

// inner text 
console.log("inner text: ", demoPara.innerText);
//text content
console.log("text content: ", demoPara.textContent)




// query selector and query selector all..
var queryElement = document.querySelector('.sample-class')
queryElement.style.color ="blue"
console.log(queryElement);

// query selector all 
var queryAllElement = document.querySelectorAll(".sample-class");

console.log(queryAllElement);

for (let i = 0; i<queryAllElement.length; i++){
    console.log(queryAllElement[i]);
    queryAllElement[i].style.color = "green"
    queryAllElement[i].innerText = "js class over"
}



document.body.append(newElement);


const newDivision = document.createElement("div")

newDivision.setAttribute("id", "apped-sample");
newDivision.textContent = "i'm from new append"


newElement.append(newDivision, "hey there i'm  a new string" )
//newElement.appendChild(newDivision, "hey there i'm  a new string");
console.log("final :", newElement)

[1, 2, 3, 4, 5]

