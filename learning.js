
// const number = [1,3,5,7,6,2]

// function calculateWordLength(num){
//     let numTaken = 0
//     for(let i=0;i<num.length;i++){
//             numTaken = numTaken + num[i]
//     }
//     return numTaken;
// }
// const result = calculateWordLength(number)
// console.log(result);


// const word = ["fawaz","ahmed","mn"]
// console.log(word.slice(1,2))






const room = ['conferanceHall','restroom','diningRoom','employeeRoom','prayerRoom','tvRoom']

function getLargeStr(place) {
    let output = [];
    let length = room[0];
    for(let i=0;i<place.length;i++){
        if(place[i] !== length){
            length = place[i]
            output.push(place[i])
        }
    }
    return output;
}
let result4 = getLargeStr(room)
console.log(result4)