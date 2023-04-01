//hoisting 

///////////////////////////////////////////


/// map filter reduce ////
const arr = [1,2,3,4,5]
        //    0, 1 , 2 , 3 , 4




arr.map((value, index, acccArr)=>{
    console.log(`
    the value of each index ${value} 
    the index is ${index}
    the acctual arr is ${acccArr}
    `);
})


const result  = arr.filter((fil,i, arr)=> arr.length >= 5); 

console.log(result);


// reduce 
const redResult = arr.reduce((acc, value, i, accarr)=> (((acc * value)+i)-accarr.length) , 1); 
console.log(redResult);

// polyfills 

Array.prototype.zenMap = function (cb) {
    let rArr = []; 
    for(let i =0; i <this.length; i++){
        rArr.push(cb(this[i], i, this, this[i]*5))
    }
    return rArr;
}

arr.zenMap((value, index, acccArr, mul5)=>{
    console.log(`
    the value of each index ${value} 
    the index is ${index}
    the acctual arr is ${acccArr}
    the multiples values is ${mul5}
    `);
})

Array.prototype.zenFilter = function(cb){
    let rArr=[];
    for(let i =0 ; i<this.length; i++){
      if(cb(this[i], i, this)) {
        rArr.push(this[i])
      }
    }
    return rArr;
}











