
function firstCall(){
    return new Promise((resolve) => {
      setTimeout(()=>{
        resolve("I'm the first call")
      }, 4000)
    })
}

function secondCall(){
    console.log("I'm the second call")

}

function thirdCall(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
    resolve("I'm the third call")
    }, 5000);
    })
}

function fourthCall(){
    console.log("I'm the fourth call")
}




async function main(){

    try {
        
        const first = await firstCall();
        console.log(first);
        secondCall();
        const third = await thirdCall();
        console.log(third); 
        fourthCall();

    } catch (error) {
        console.log(error)
    }
}

// main()

// fetch the same date but in asyc and await 

// callbacks - > callback hell
// promises  -> promises chaining ----

// wait for it to execute 
 // - it should be a promise and return 
 // place your await key word

 // fetching a data in async and await methodogy 

 async function fetchData(){
       try {
        const response = await fetch("https://restcountries.com/v3.1/all"); 
        const data = await response.json();
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
        
       } catch (error) {
           console.log(error);
       }
  }

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


fetchData();
