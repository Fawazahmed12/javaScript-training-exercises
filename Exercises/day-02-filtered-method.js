// const number = [1,3,5,7,6,2]
//1.
// const numb = number.filter(function (numb1) {
//     return numb1%2 == 0
// });
//
// 2.
// const numb = number.filter((numb1) => {
//     return numb1%2 == 0
// });
//
// 3.
// const numb = number.filter(numb1 => numb1%2 == 0)
//
// console.log(numb)




// const numb = number.forEach(numb1 =>
//     console.log(numb1)
// );




//callback function
// const number = [1,3,5,7,6,2]
// function findEvenNumbers(num,cb){
//     const output = [];
//     for(let i=0;i<num.length;i++){
//        if(cb(num[i])) {
//            output.push(num[i])
//        }
//     }
//     return output
// }
//
// const result = findEvenNumbers(number,function(e){
//    return e%2 == 0
// })
//
//
// const result1 = findEvenNumbers(number,function(e){
//     return e%2 == 1
// })

// console.log(result)
// console.log(result1)



// const number = [1,3,5,7,6,2]
// function getEvenNumbers(num) {
//     let output = []
//     for(let i=0;i<num.length;i++){
//         if(num[i]%2 == 1){
//             output.push(num[i])
//         }
//     }
//     return output
// }
//
// const result3 = getEvenNumbers(number)
// console.log(result3)

const input = [1, 5, 7, 6, 5, 3];

function findSecondLargest(arr) {
    let largest = arr[0];
    let secondLargest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

const output = findSecondLargest(input);
console.log("Second largest element:", output); // Output will be 6


