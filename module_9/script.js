console.log("Hello world")

document.body.firstElementChild 
document.body.firstElementChild.childNodes 
document.body.firstElementChild.children


// document.body.firstElementChild.children[3]
// <div class=​"box">​Box4​</div>​


// document.body.firstElementChild.children[3].previousElementSibling
// <div class=​"box">​Box3​</div>​

// document.body.firstElementChild.children[3].previousSibling
// #text 

document.body.children
HTMLCollection(3) [div.container, table, script]


// document.body.childNodes
// 0: text
// 1: div.container
// 2: text
// 3: table
// 4: text
// 5: script
// 6: text 
// length: 7


// ocument.body.children[1].rows
// tr , tr