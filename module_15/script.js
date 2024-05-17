let a = prompt("enter no 1")
let b = prompt("enter no 2")
if (isNaN(a) || isNaN(b))
    {
          throw SyntaxError("this is not allowed ")
    }
let sum =(parseInt(a) +parseInt(b))

//  console.log('the sum is '+ sum); 


try {
    console.log('the sum is '+ sum*x);
} catch (error) {
    console.log('there is an error ');
    
}

// now declaring x first run withou inisialiing x 

let x =1 ; 
try {
    console.log('the sum is '+ sum*x);
} catch (error) {
    console.log('there is an error ');
    
}
finally{console.log('files are being closed ') 

 };


//  significance of finally 

function main()
{
try {
    console.log('the sum is '+ sum*x);
    return true;
} catch (error) {
    console.log('there is an error ');
    return false ;
}
finally{console.log('files are being closed ') 

 };
}
let c = main()
// many times we use fn and we need to return values in try and catch so code ends there thats y we use finally 

 




 
