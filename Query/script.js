
let user = {
  name: "sanjay",
  age: 25,
  fullName:{
    first :"sanjay",
    last :"ravi",
  }
}

const name = "prashanth"
const {name : myname} = user;
const {fullName : {first}} = user
console.log(myname);


Array.prototype.myMap = function (cb) {
  let temp = [];
  for(let i =0; i<this.length; i++) {
    temp.push(cb(this[i], i, this))
  }
  return temp
}

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for(let i =0; i<this.length; i++) {
    if(cb(this[i], i, this)){
      temp.push(this[i])
    }
  }
  return temp
}

const arr = [1, 2, 3]

arr.myMap((value, index, arra)=>console.log(value, index, arra))