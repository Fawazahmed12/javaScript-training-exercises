// //globel variable or globel scope or function scope
// var a =10;
// var b= 15;
// function add() {
//   //local scope or block scope
//   var a = 1;
//   var b = 2;
//   return a + b;
// }
// console.log(add());

/*
//1.
//globel variable or globel scope
var a =10;
var b= 15;
//once we declare a variable before or after the function, we can use it anywhere
function add() {
  return a + b;
}
console.log(add());   //25


function sub(){
    return a - b;
}
console.log(sub())   //-5

*/


//2.
function add() {
  //local scope or block scope
  var a = 1;
  var b = 2;
  //we declare a variable only inside the block(function/curly-brase),we can't use it anywhere
  return a + b;
}
console.log(add());   //3


function minus(){
    return a-b;
}
console.log(minus());  //error