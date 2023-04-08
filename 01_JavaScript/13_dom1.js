// The document currently loaded in each one of your browser tabs is represented by a document object model (DOM).
// Child nodes are node list not an array

// accessing first child
// ->syntax:-  element.firstChild
//             element.firstElementChild
console.log(document.body.firstChild);
console.log(document.body.childNodes[0]);      //[0] representing first child of all child nodes
console.log(document.body.firstElementChild);  //gives exact element


// accessing last child
// ->syntax:-  element.lastChild
//             element.lastElementChild
console.log(document.body.lastChild);
console.log(document.body.childNodes[document.body.childNodes.length-1]);
console.log(document.body.lastElementChild);


// accessing child Nodes
// ->syntax:-  element.childNodes
console.log(document.body.childNodes);


// Check has child nodes ->it returns true if element has child and vice versa
// ->synatx:- element.hasChildNodes()
console.log(document.body.hasChildNodes);


// *converting node list to array*
let arr = Array.from(document.body.childNodes);
console.log(arr);
