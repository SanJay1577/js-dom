
let taskCompletion = 60;
console.log("program started")
//producer of promise
let promise = new Promise(
    (resolve, reject)=>{
        setTimeout(()=>{
            if(taskCompletion >= 75){
                resolve("Your Placement is guranteed")
            } else {
                reject("Sorry you haven't completed the course")
            }
        },3000)
      
    }
)

let newPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
       resolve(25)
    }, 5000)
})

// consumer of promise
promise
.then((returnValue)=>{
   console.log(returnValue);
})
.catch((error)=>{
    console.log(error);
})

// chaining the function 
newPromise
.then((value)=>{
    console.log(value); 
    return value*2;
}).then((val2)=>{
    console.log(val2); 
    return val2*3;
}).then((val3)=>{
    console.log(val3);
})
 
 




// pormise = {} Object
// gives the result of eventual completion of a operation

//////---- states of promises
   //  pending ()
   // fulfilled (reslove)
   // rejected  (rejcted)

//    Resolve reject and pending