document.addEventListener("DOMContentLoaded", ()=>{
    const addBtn = document.querySelector("#new-stud-btn"); 
    const studentForm = document.querySelector(".add-student-form"); 
    const studentList = document.querySelector("#student-list"); 
    let addStudent = false;
    const API_URL = "http://localhost:3000/students"; 

// This will render a individual student card
function renderStudents(stud) {
        const studDiv = document.createElement("div"); 
        studDiv.className = "card";
        studDiv.innerHTML += `
      <img src= "${stud.image}" alt="${stud.name}" class="stud-avatar" />
       <h2>${stud.name}</h2>
       <p><span>class : </span>${stud.class}</p>
       <p><span>country : </span>${stud.country}</p>
       <p>${stud.like}</p>
       <button data-id =${stud.id} class="like-btn">Likes</button>
       <button data-id ='${stud.id}' class="delete-btn">Delete</button>
      `
    studentList.appendChild(studDiv);
}

// the below function will loop through all the student details
// and render the student card function
function renderAllStudents (students) {
    studentList.innerHTML ="";
    students.forEach(student => {
        renderStudents(student); 
    });   
}
// fetching the api for student details 
fetch(API_URL, {
    method:"GET"
})
.then((response)=>response.json())
.then((data)=>renderAllStudents(data))



addBtn.addEventListener("click", ()=>{
    // change the variable to true and false 
    //false -> true
    addStudent = !addStudent

   if(addStudent) {
    studentForm.style.display = "block"
    addBtn.textContent = "Add and close"
   } else {
    studentForm.style.display = "none"
    addBtn.textContent = "Add Student"
   }
})
// adding a data
studentForm.addEventListener("click", (event)=>{
    let studentName = document.getElementsByClassName("input-text")[0].value
    let studentImage = document.getElementsByClassName("input-text")[1].value
    let studentClass = document.getElementsByClassName("input-text")[2].value
    let studentCountry = document.getElementsByClassName("input-text")[3].value
   
   let data = {
      name: studentName,
      image: studentImage,
      class : studentClass,
      country : studentCountry
    }
    event.preventDefault();
    if(event.target.name === "submit"){
        // api call post 
        fetch(API_URL, {
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((response)=>response.json())
        .then((student)=>renderStudents(student))
        .catch((err)=>console.log(err))
    }
}); 


// target the student list 
// you have delete it

studentList.addEventListener("click", (event)=>{
    event.preventDefault();
  if(event.target.className ==="like-btn") {
    let id = event.target.dataset.id
    let likes = parseInt(event.target.previousElementSibling.innerHTML)
    likes++;
    event.target.previousElementSibling.innerText = `${likes}`
    let data = {
        like:likes
    }

    fetch(`${API_URL}/${id}`, {
        method :"PATCH",
        body:JSON.stringify(data),
        headers :{
            "Content-Type":"application/json"
        }
    })

  }
  else if (event.target.className === "delete-btn"){

     let id = event.target.dataset.id
     let parent = event.target.parentNode
     // delete functionality in fetch
     fetch(`${API_URL}/${id}`, {
        method:"DELETE", 
        headers:{
            "Content-Type":"application/json"
        },
     })
     .then(()=>parent.remove())
     .catch((err)=>console.log(err))
  } 
  console.log("finished")
})


})