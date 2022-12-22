






// alert // prompt //confirm

//////////alert ////////////////

function alertFunction(message) {
  alert(message); // nothing
}

/////////promt////////////////
let promptElement = document.createElement("div")
document.body.append(promptElement); 

function promptFunction(){
  let answer = prompt("Hey there have you attended the class?", "") // returns a null or value
 
    promptElement.textContent = `${answer} is your answer`
  
}

//////////confrim////////////////////

function confirmFunction(){
  let response = confirm("Are you confirming?"); // true or false

  if (response == true){
    promptElement.textContent = `You have approved the request`
  } else {
    promptElement.textContent = `You have rejected the request`
  }
}

/////////set time out////////////////

let count = 10; 

function timeOutExample(){
   // count++ or count = count +1 
  promptElement.textContent = count; 
  count = count-1;
  const id = setTimeout(timeOutExample, 1000); 
  if (count == 0){
    clearTimeout(id); 
    promptElement.textContent = "Your time is up..."
  }
}


///////////set interval//////////////
// repeat after certain time 
function intervalFunction(){
let ourInterval = setInterval(() => {
   promptElement.textContent = count
   count = count - 1
   if (count === 0 ){
    clearInterval(ourInterval)
    promptElement.textContent = "your time has stopped..."
   }
}, 1000);
}

/////////Events////////
let clickCounter = 0

function clickEvent(){
  clickCounter++;
  console.log("You clicked this", clickCounter)
 const inputVarible = document.getElementById("input-id"); 
 console.log(inputVarible.value);

 
}
let changeCounter = 0
function changeEvent(){
  changeCounter++;
  console.log("You changed this", changeCounter)
}


let addBtn = document.getElementById("btn-id")
/////
addBtn.addEventListener("click", ()=>{

  promptElement.textContent = "You have added a new event in this button"
})

//  different types of events 8 types
//  4 essesntial
//       window events 
//    - scroll
//    - resize 
//       Form events 
//    - focus 
//    - blur
//    - change
//    -submit 
//       KeyboardEvent 
//   - key down
//   keypress
//   keyup 
//        mouse events
//    - click
//    mousedwn
//    mouse up 
//    mousemove


// window events

window.addEventListener("scroll", ()=>{
  count = count +1 
  console.log("I'm scrolled", count)
  
})

window.addEventListener("resize", (e)=>{
  console.log(e)
promptElement.textContent = `
The width of the screen is ${e.target.innerWidth}
The height of the screen is ${e.target.innerHeight}
`
})

// Mouse events 

// mouse down - >
// at the moment of click
// mouse up -> 
// click release event 

addBtn.addEventListener("mousedown", ()=>{
  document.body.style.backgroundColor = "black"


})
addBtn.addEventListener("mouseup", ()=>{
  promptElement.setAttribute("class" , "interval")
})


window.addEventListener("mousemove", (e)=>{
  promptElement.textContent = `
   The X axis Cordinates : ${e.clientX}
   The Y axis Cordinates : ${e.clientY}
   
  `
})

window.addEventListener("mouseout", ()=>{
  promptElement.textContent = ""
})

//key events

// window.addEventListener("keydown", (e)=>{
//   console.log(e.key);
//   if (e.key != "s") {
//     document.body.style.backgroundColor = "white"
//   } else {
//     document.body.style.backgroundColor = "black"
//   }
// })

//forms events

let inputArea = document.createElement("textarea"); 
inputArea.setAttribute("id", "message-area")

let validteString = document.createElement("div"); 
validteString.setAttribute("id", "message-details"); 
const maximumChatersAllowed = 300;


// Reading the text area with events : 
  inputArea.addEventListener("input", ()=>{
    const allowedChachters = maximumChatersAllowed - inputArea.value.length
    const styleColors = allowedChachters < 20 ? "red" : "green"
      validteString.textContent = `The Remaining allowed chachters are : ${allowedChachters}`
      validteString.style.color = styleColors;
      if(allowedChachters === 0){
        alert("hey stop")
      }

  })

const formElement = document.createElement("div")
  // sumbit events 
  let sampleForm = document.getElementById("form-id"); 

  sampleForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    formElement.textContent = inputArea.value;
    console.log("sumbited")
    promptElement.textContent = eval(inputArea.value) 
  
  })


document.body.append(inputArea, validteString, formElement); 


const value = eval(4*5); 

console.log(value)




// task  - mini
// resize - 600 -> bg => black
// abobe 600 -> bg normal white
// mousedown - bg - blue
//mouse up - bg - red

//TASK TWO 
