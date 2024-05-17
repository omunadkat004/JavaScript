// so instead of using call back we will use async await that first data will execute then task 2 and process data 
//  async will run in bg and rest all will print 
// await will wait to finish 

async function getdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3000);
    })
}


async function main() {
    console.log('loding modules');
    console.log('do smtg else ');
    console.log('load data ');

    let data = await getdata()
    console.log(data);

    console.log('process data ');
    console.log('task 2.3 ');

}

main()