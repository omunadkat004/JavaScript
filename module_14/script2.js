// if we want ke procesing data and task 2 adhu pachi thai ek var promise run thai jay pachi 
function getdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3000);
    })
}


console.log('loding modules');
console.log('do smtg else ');
console.log('load data ');

data.then ((v) => {

console.log(data);
console.log('process data ');
console.log('task 2.2 ');
})


// thus it is a called backed base approch 