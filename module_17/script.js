async function sleep()
{      
 return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(45)
  }, 1000);
})
}

// error avse 
// let a = await sleep()
// let b = await sleep()

    (async function main()
{
    // let a = await sleep;
    // console.log(a);
    // let b = await sleep; 
    // console.log(b);
    
// IIFE : immediaty invoked function expression 
    

    // DESTRUCTURING : 

    let [x,y,...rest] = [4,5,5,6,7,8,]
    console.log(x,y,...rest);


    let obj=
    {
        a:1 ,
        b:2,
        c:3,
    }
let {a,b} =obj
// a and b ne seperate kari dese 
console.log(a,b); 


// Define the sum function
function sum(a, b, c) {
    return a + b + c;
  }
  

  
let arr = [2, 3, 4];
console.log(sum(arr[0], arr[1], arr[2]));
console.log(sum(...arr));
// spread oprator ...arr means that 




    
}
)()

