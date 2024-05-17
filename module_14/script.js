function getdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 1100);
    })
}



console.log('loding modules');
console.log('do smtg else ');
console.log('load data ');

//  badhu print thai jse and promise ne jetla second jose etla lese then pending thi fulfilled thai jse inshort promise background ma chalto rese 

 let data =  getdata()
console.log(data);


console.log('process data ');
console.log('task 2.1 ');








