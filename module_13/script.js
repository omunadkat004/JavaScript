console.log("i am om ")
console.log("i am anmol")


setTimeout(() => {
    console.log("i am vishal")
}, 2000);

console.log("The End")
// showing asyc behavior of JS

const callback =(arg) =>
{
    console.log(arg)
}

const loadScript= (src,callback) => {
    // use anfm to create this shortcut che 

 let sc=  document.createElement("script")
 sc.src= src; 
 sc.onload = callback("Omm")
 document.head.append(sc)
}
// but with this we create a pyramid of foom  thats y the solution for callback is promises 




