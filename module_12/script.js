let button = document.getElementById("btn")

button.addEventListener("dblclick", ()=>
    {
        // alert("this is danger")
        document.querySelector(".box").innerHTML="yayy i was clicked"
    }
)


button.addEventListener("contextmenu", ()=>
    {
        alert("this is danger")
    }
)

document.addEventListener("keydown", (e)=>
{
    console.log(e.key)
})