console.log('this is promisie');


let prom1 = new Promise((resolve, reject)=>
{
    let a = Math.random();
    if(a<0.5)
        {
            reject("no random no is supporting ")
        } 
        else
        {
            setTimeout(() => {
                console.log('i am done ');
                resolve("OMM")
            }, 3000);
        }
        // agar i am done print nhi karavu then ene else part ma nakhi dyo 
    
})


let prom2 = new Promise((resolve, reject)=>
    {
        let a = Math.random();
        if(a<0.5)
            {
                reject("no random no is supporting 2 ")
            } 
            // agar i am done print nhi karavu then ene else part ma nakhi dyo 
        setTimeout(() => {
            console.log('i am done 2');
            resolve("OMM2")
        }, 3000);
    })
    


// prom1.then((q)=>
// {
//     console.log(q);
    
// }).catch((err)=>
// {
//     console.log(err);
    
// })


// let p3= Promise.all([prom1, prom2])
// let p3= Promise.allSettled([prom1, prom2])
let p3= Promise.race([prom1, prom2])


 p3.then((a)=>
{
    console.log(a);
    
}).catch((err)=>
     {
         console.log(err);
        
     })
