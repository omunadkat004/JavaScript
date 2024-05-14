
console.log("i am a module on loops")

// let a =1;
// for (let i = 0; i < 50; i++) {
//  console.log(a+i)
// }

let obj = {
 name: "Om",
 role: "Developer",
company:"ABC ltd",
}

for (const key in obj) {
    
        const element = obj[key];
        console.log(key, element)
        
    }
    // for in loops are used for objects 


    for (const c of "Unadkat") {
        console.log(c)
        
    }
    // for of loops are mostly used for arays 

    let i=4;

    while (i<6) {
        console.log (i)
        i++;
    }