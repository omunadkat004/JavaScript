// let arr = [1,2,3,4,5]
// arr[0]= 566;
// // array is mutable 
// console.log(arr, typeof arr)
// console.log(arr.length)
// console.log(arr[0])

// console.log(arr.toString())
// console.log(arr.join(" and "))

// shift pop ka bhai and unshift push ka bhai 
// SLICE 
// SORT 
// REVERSE 

// let a = [1,2,4,565,134]

// for (let index = 0; index < a.length; index++) {
   
//     console.log(a[index])
    
// }

// a.forEach((value, index, arr)=>
// {
//     console.log(value, index, arr)
// })

// for (const iterator of a) {
//     console.log(iterator)
    
// }

// map 

// let newarr = [];

// for (let index = 0; index <arrayy.length; index++) {
//     const element =arrayy[index];
//     newarr.push(element**2)
    
// }
// console.log(newarr)
let arrayy = [1,2,3,4,5];

let newarr = arrayy.map((e)=>
{
    return   e**2
})
console.log(newarr)


const greaterthan7 = (a)=> 
    {
        if (a>7)
            {
                return true
            }
            return false 
    }
console.log(newarr.filter(greaterthan7))

let arr2 = [1,2,3,4,5]

const red = (a,b)=>
{
    return (a*b)
}
console.log(arr2.reduce(red))

console.log(Array.from("Unadkat"))