/*
let sentence = "Delhi is the capital city of India";
let charToCheck = "t";

function split(sent, char) {
    let splitWords = [];
    let index = 0;
    let splitStarter = 0;
    for (let k of sent) {
        if (k == char) {
            let word = sent.substring(splitStarter, index);
            splitWords.push(word);
            splitStarter = index + 1;
        }
        index++;
    }
    return splitWords;
}

const outPut = split(sentence, charToCheck);
console.log(outPut);
*/


//2.
// let b=100;
// const a = b;
// b =200; // not re-aasign
// console.log(a)

// //3.
const names = ["india","england","dubai","usa"]
const values = ["red","blue","green"]

values[0] = names[2];
names[2] = "France";

console.log(values[0]);

// //4.
// names[3] = values;
// values[2] = "TV";
// console.log(names[3]);


// let a = 100
// b = a
// b = 300;
// console.log(b)