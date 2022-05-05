//sum of arrays:

function sumOfNumbers(numbers){
    let totalNumber = 0;
     for(let position=0;position<numbers.length;position++){
       totalNumber = totalNumber + numbers[position]
     }
     return totalNumber;
  }
  const numbers = [1,2,3];
  let total = sumOfNumbers(numbers)
  console.log(total)