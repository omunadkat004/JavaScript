document.querySelector(".box")
/* <div class=​"box">​hey i am a box​</div>​ */

document.querySelector(".box").innerHTML
// hey i am a box 

document.querySelector(".box").innerText
// HEY I AM A BOX 



// After adding 2 more boxes 
document.querySelector(".container").innerText
// 'hey i am a box\nhey i am a box\nhey i am a box'

document.querySelector(".container").outerHTML
// '<div class="container">\n    <div class="box">hey i am a box</div>\n    <div class="box">hey i am a box</div>\n    <div class="box">hey i am a box</div>\n</div>'

// tagname , nodename , 

document.querySelector(".box").innerHTML= "hey i am a Om "
// hey i am a Om 

document.querySelector(".container").hidden = true
// container ma ek hidden attribute lagadi dese 


// insert 
