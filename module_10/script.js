console.log("omm")


let bhupendrajogis = document.getElementsByClassName("box")
console.log(bhupendrajogis)


bhupendrajogis[2].style.backgroundColor="red"
// will color red whichever is 2nd index 

document.getElementById("blue").style.backgroundColor="blue"
// will color blue whichever has id blue 

document.querySelector(".box").style.backgroundColor="orange"
// colors orange where first class is matched as box 

//  if we want to color all boxes orange 
// document.querySelectorAll(".box").style.backgroundColor="pink"
// the above wont work bcoz it selects html collection and this works on elements not on html collection 
//  .style of array , string , html collection dosent mean anything .style only works on elements 

// Thus to color all of them pink :
document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor="pink"
});

document.getElementsByTagName("div")

// Matches , contains , closest 