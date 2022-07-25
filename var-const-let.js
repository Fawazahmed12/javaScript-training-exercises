//////const:
// const age= 20;
// const age = 20
// console.log(age)  // not redeclared

// const age = 40;
// age = 40;
// console.log(age)  //not re-assingned


function isAge(){
    if(true){
        const age = 50;
        console.log(age);
    }
}
isAge();   //block-scope


function isAge(){
    if(true){
        const age = 50;
    }
     console.log(age);
}
isAge();  //error (because const is a block scope)


/////let:
    // let age = 20;
    //   let age =30;
    // console.log(age) //  not re-declared
    
    //  let age = 20;
    //  age =30;
    // console.log(age) //re-assign
    
    
function isAge() {
    if (true) {
        let age = 50;
        console.log(age);
    }
}
isAge();  //block-scope



function isAge(){
    if(true){
        let age = 50;
    }
     console.log(age);
}
isAge();   //error (because let is a block scope)



//////var:
    // var age = 20;
    //   var age =30;
    // console.log(age) //  re-declared
    
    //  var age = 20;
    //  age =30;
    //  age = 50
    // console.log(age) //re-assign
    
    
function isAge() {

    if (true) {
        var age = 50;
        console.log(age);
    }
}
isAge();  //function-scope


function isAge() {
    if (true) {
        var age = 50;

    }
    console.log(age);
}
isAge(); //50 (its a function scope, anywhere we assign inside or outside the function it takes the value )