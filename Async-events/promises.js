
let taskCompletion = 60;
console.log("program started")

// //producer of promise
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
        //console.log("Priomise 1 is emiited and resolved")
       resolve(25)
    }, 1000)
})


// // consumer of promise
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

// //promise all (multiple promises)


let promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("1st promise is called")
       // resolve(40)
      reject("rejected your promise at 1")
    }, 4000)
})

let promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("2nd promise is called")
        resolve(25)
        //reject("rejected your promise at 2")
    }, 7000)
})


let promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("3rd promise is called")
        resolve(50)
        //reject("rejected your promise at 3")
    }, 9000)
})
 

 Promise.all([promise1, promise2, promise3])
 .then((value)=>{
   console.log(`The value is : `,value)
 }).catch((err)=>{
    console.log(`You have an error :`, err)
 }); 


// converting normal function to a promise 

function getName(name) {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
    if(name.length == 0) {
        reject("Please pass a valid name")
    }else{
        resolve(name)
    }
}, 2000)
  })
}

function getAge(name){
    console.log(`Hi ${name} please tell your age`)
}

function verifyNameAndAge(name, age) {
    setTimeout(()=>{
    console.log(`Please verify your name is ${name} and age is ${age}`)
}, 2000)
}


getName("sanjay")
.then((val)=>{
    return val;
})
.then((name)=>{
    getAge(name); 
    return name;
})
.then((name)=>{
    verifyNameAndAge(name, 5); 
    return name
})
.catch((err)=>{
  console.log(err)
})



// .catch((error)=>{
//     console.log(`The error is : ${error}`)
// })


 
// fetch ----------
//xml parseFloat(`xml data`)

//API -> Address

fetch("https://restcountries.com/v3.1/all")
.then((response)=>response.json())
.then((data)=> {
      console.log(data);

      data.forEach(element => {
     const countryRequired = {
        ...element, 
        name: element.name.common,
        flag : element.flags.png,
        population: element.population,
        region : element.region,
        capital : element.capital
     }

      createCountry(countryRequired)
     });

})
.catch((err)=>console.log(err));

function createCountry({name, flag, population, region, capital}) {
    document.body.innerHTML += `
     <div class = "container">
      <img src= "${flag}" alt="${name}" class="flag" />
      <div class= "info">
       <h2>${name}</h2>
       <p><span>Population : </span>${population}</p>
       <p><span>Region : </span>${region}</p>
       <p><span>Capital : </span>${capital}</p>
      </div>
     </div>
       `
}

// flag
// population
// region
//capital-name


// pormise = {} Object
// gives the result of eventual completion of a operation

//////---- states of promises
   //  pending ()
   // fulfilled (reslove)
   // rejected  (rejcted)

//    Resolve reject and pending