
async function getdata()
{
   let x = await fetch('https://jsonplaceholder.typicode.com/todos/1') 
//    data ko lane ki peomise 
   let data = await x.json()
//    data ko fetach karane ki peomise 
   console.log(data);

    //   .then(response => response.json())
    //   .then(json => console.log(json))
    
} 

async function main() {
    console.log('loding modules');
    console.log('do smtg else ');
    console.log('load data ');

    let data = await  getdata()
    console.log(data);

    console.log('process data ');
    console.log('task 2.4 ');

}
main()