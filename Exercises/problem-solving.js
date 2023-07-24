const array = [1,2,3,45]
const filteres = array.filter(flt => flt%2 == 1)
console.log("filteredNumbers :" + filteres)
function getEvenNumbers(num) {
    let output = [];
    for (let i=0;i<num.length;i++) {
        if(num[i]%2 == 1){
            output.push(num[i])
        }
    }
    return output;
}

const result = getEvenNumbers(array)
console.log(result)


// 2.
const names = "fawaz";
function findingLength(name) {
    const value = name.split("");
    let count = 0;
    for(let i=0;i<value.length;i++) {
        count++
    }
    return count;
}
const result1 = findingLength(names)
console.log(result1)


// 3.
// find how many duplicate character are present
const word = "my office is in perungudi"
function findTheCharacter(word,char){
    let count1 = 0;
    for(let i=0;i<word.length;i++) {
        if(word[i] == char) {
            count1++
        }
    }
    return count1;
}
const result2 = findTheCharacter(word,'i')
console.log(result2)


//4.

const itemCountMatrix = [1, 2, 3];
const costMatrix = [10, 20, 23];
function calculateTotal(countM, costM) {
   let count3 = 0;
   for(let i=0;i<costM.length;i++) {
       count3 = count3 + countM[i] + costM[i];
       // count3 = count3 + countM[i] * costM[i];
   }
   return count3
}
const total = calculateTotal(itemCountMatrix, costMatrix);
console.log(total);


// 5.the given character is present in the string or not:
let sentence = "Delhi is the capital city of India";
let charToCheck = "t";

function split(sent, char) {
    let splitWords = [];
    let index = 0;
    let splitStarter = 0;
    for (let i=0;i<sent.length;i++) {
        if (sent[i] == char) {
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


// 6.
// given a string , reverse each words in the sentence
let sentence1 = "Hello world";
function reverseWords(sentence) {
    let words = sentence.split(" ");
    let reversedWords = [];
    for (let i = 0; i < words.length; i++) {
        var word = words[i];
        var reversedWord = "";
        for (var j = word.length - 1; j >= 0; j--) {
            reversedWord += word[j];
        }
        reversedWords.push(reversedWord);
    }
    return reversedWords.join(" ");
}

let reversedSentence = reverseWords(sentence1);
console.log(reversedSentence);


//7.
// find duplicates in the given string:
const character = "Indianapolis";
const charArray = character.split('');
const duplicates = {};
charArray.forEach(char => {
    duplicates[char] = duplicates[char] ? duplicates[char] + 1 : 1;
});
const result7 = Object.keys(duplicates).filter(char => duplicates[char] > 1);
console.log("Duplicates:", result7);


//8.
// find the max and min numbers in two numbers
function findMax(num1,num2){
    if(num1>num2){
        return num1;
    }else{
        return num2
    }
}
console.log(findMax(8,3))    //8


//9.
// find max in an array
const numbers = [1,4,8,10]

function findMax(input) {
    let largestNum = input[0];
    for (let i = 0; i < input.length; i++) {
        if (input[i] > largestNum) {
            largestNum = input[i];
        }
    }
    return largestNum;
}
 console.log(findMax(numbers))


//10.
// calculate word Length (Sum OF Numbers )
const number = [1,3,5,7,6,2]
function sumOfNumbers(num) {
    let count = 0;
    for (let i=0;i<num.length;i++){
        count= count+num[i]
    }
    return count
}
const result10 = sumOfNumbers(number)
console.log("WordLength:" + result10)


//11
//taking male record from the array Of Objects
const data = [{
    name : 'pavithran',
    age : 17,
    gender : 'male'
},
    {
        name : 'rasikhan',
        age : 19,
        gender : 'male'
    },
    {
        name : 'umar',
        age : 24,
        gender : 'male'
    },
    {
        name : 'priyanga',
        age : 22,
        gender : 'female'
    },{
        name : 'sangavi',
        age : 16,
        gender : 'female'
    },{
        name : 'chithra',
        age : 21,
        gender : 'female'
    },
]


function maleRecord(information) {
    let filteredMaleRecord = [];
    for (let i=0;i<information.length;i++){
        if (information[i].gender == "male"){
            filteredMaleRecord.push(information[i])
        }
    }
    return filteredMaleRecord
}
const result11 = maleRecord(data)
console.log(result11)

//get array of gender
function toGetAnGender(employees) {
    let genderList = []
    for(let index = 0;index<employees.length;index++){

        genderList.push(employees[index].gender)
    }
    return genderList;
}
let employeeNames = toGetAnGender(data)
console.log(employeeNames)

// 12
// palindrome
const word3 = "radar"; // Change this word to test other examples
function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
}
const isWordPalindrome = isPalindrome(word3);
if (isWordPalindrome) {
    console.log(`${word3} is a palindrome.`);
} else {
    console.log(`${word3} is not a palindrome.`);
}


function  iterate5Numbers() {
    for (let i=0;i<5; i++) {
        // console.log(i)
        setTimeout(function (){
            console.log(i)
        },0)
    }
}
iterate5Numbers()


//swapping
let x = 10;
let y = 20;
function swap(a, b) {
    console.log("Before swapping: a =", a, "b =", b);

    // Swapping values using a temporary variable
    let temp = a;
    a = b;
    b = temp;

    console.log("After swapping: a =", a, "b =", b);
}
swap(x, y);
// Before swapping: a = 10 b = 20
// After swapping: a = 20 b = 10
