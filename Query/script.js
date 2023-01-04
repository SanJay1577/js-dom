console.log("new script is working");

// first step is done......
let ele = document.createElement("div");

ele.textContent = "Hi I'm the new element";
ele.style.color = "red";
ele.setAttribute("id", "new-div");

// second appending it
document.body.append(ele);

//accessing the element
let head = document.getElementById("heading");

head.setAttribute("class", "head-class");

head.textContent = "i'm changed";

function newFunction() {
  console.log("new function");
}

newFunction();

//foreach // read

// map  // write

const arr = [
  { 
    students:  [
        {
          firstname:"sanjay",
          lastname :"guvi"
        },
        {
          firstname : "arun",
          lastname :"praveen"
        }
         ]
   }, 
   {
   batch:"b42wd"
   }
];

const array = [5, 7, 8, 9];

array.map((item, id) => {
  console.log(`The item is ${item}
               The index is ${id}`);
});

console.log(arr[0].students[0].firstname);

const filterdvalue = array.filter((item, id)=> id != 3); 
console.log(filterdvalue);
console.log(array);