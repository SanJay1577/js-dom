console.log("new script is working")

// first step is done......
let ele = document.createElement("div"); 


ele.textContent = "Hi I'm the new element"
ele.style.color= "red"
ele.setAttribute("id", "new-div")


// second appending it
 document.body.append(ele);


 //accessing the element 
 let head = document.getElementById("heading"); 

 head.setAttribute("class", "head-class")


 head.textContent = "i'm changed"

 function newFunction(){
   console.log("new function");
 }

 newFunction();


