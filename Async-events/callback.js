// what is a call back
// how it is uses in async operations
// callback hell (pain of calbaack, inversion of control)

// Sync Operations in js

// function firstCall(){
//     console.log("I'm the first call")
//     setTimeout(secondCall , 3000);
//     thirdCall();
//     fourthCall();
// }

// function secondCall(){
//     console.log("I'm the second call")
// }

// function thirdCall(){
//     console.log("I'm the third call")
// }

// function fourthCall(){
//     console.log("I'm the fourth call")
// }

// i want to execute in a way 1 - 2 -3 - 4
// firstCall()
// Results
// I'm the first call
// I'm the third call
// I'm the fourth call
// I'm the second call


// Async Operations for the above function using callback 

function firstCall(callback){
    console.log("I'm the first call")
    setTimeout(callback, 3000); 
}

function secondCall(callback){
    console.log("I'm the second call")
    callback();
}

function thirdCall(callback){
    console.log("I'm the third call")
    callback();
}

function fourthCall(){
    console.log("I'm the fourth call")
}

// call back hell and async is achieved.

firstCall(()=>{
    secondCall(()=>{
        thirdCall(()=>{
            fourthCall();
        })
    })
})



// results will be 
// I'm the first call
// I'm the second call
// I'm the third call
// I'm the fourth call

/////////Eventloop/////////////////////

// callstack ->  
// webapi (do the operations)  ->  
// callback-ques [completedoperations] -> 
// eventloop(consistenly check and push the operation to callstack when there is no operation incall stack) 
// <- callstack

//////////////////////////////////////