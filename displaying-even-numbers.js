//1.Find given number even number or odd number
// Input: 2
// output: "2 is an even Number"
// Input: 7
// output: "7 is an odd Number"



function toGetEvenOrOddNumber(number){
  
  if(number%2 == 0){
    return ` ${number} is an even Number.`;
  }else{
    return ` ${number} is an odd Number.`;
  }
}
const input = 2
let evenOrOddNumbers = toGetEvenOrOddNumber(input)
console.log(evenOrOddNumbers)





//2.//Displaying only even numbers
// let array=[1,2,3,4,5,6];
// Output : [2,4,6]


function togetEvenNumbers(numbers) {
  let output = [];
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 == 0) {
      output.push(numbers[index]);
    }
  }
  return output;
}
const array = [1,2,3,4,5,6];
let evenNumbers = togetEvenNumbers(array);
console.log(evenNumbers);



//using filter method:

// const array = [1,2,3,4,5,6];

// const result = array.filter(numbers => numbers%2 == 0);

// console.log(result);




