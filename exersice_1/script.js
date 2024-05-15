let random = math.random()
let a = prompt("enter 1st no")
let b = prompt("enter 2nd  no")
let c = prompt("enter opration")

let  obj = {

    "+":"-", 
    "*": "+" ,
    "-": "/",
    "/": "**",
}
    if(random> 0.1)
        {
            alert(`the result is ${eval(`$(a) $(c) $(b)`)}`)
        }

        else
        {
            c= obj[c]
            alert(`the result is ${eval(`$(a) $(c) $(b)`)}`)

        }




