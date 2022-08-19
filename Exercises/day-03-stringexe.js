/*
const word = "fawaz"

function calculateWordLength(charcter){
    const values =charcter.split("")

    let length = 0
    for(let i=0;i<values.length;i++){
        length++;
        // console.log(values[i])
    }
    return length;
}
const result = calculateWordLength(word)
console.log(result);

//2
function calculateWordLength(charcter){

    let length = 0
    for(let char of charcter){
        length = length + 1;
    }
    return length;
}
const result = calculateWordLength(word)
console.log(result);

*/

/*
const word = "my office is in perungudi"
function findTheCharacter(sampleWord,checkedCharacter){
    let count = 0;
    for (let character of sampleWord){
        if(character == checkedCharacter){
            count++
        }
    }
    return count;
}
const result = findTheCharacter(word,'i')
console.log(result)
*/


/*
//we use associated array
const prices = {
    "camera" : 1000,
    "tv": 20000,
    "watch" : 400
};
const discounts = {
    "camera" : 0.2,
    "tv": 0.1,
    "watch" : 0.3
}

function calculateDiscountPrice(productName){
    return prices[productName] - (prices[productName]*discounts[productName])
}
const result = calculateDiscountPrice("camera")
console.log(result)
*/



/*
const productConfig = {
    "camera" : {
        price:1000,
        discount:0.2,
    },
    "tv" : {
        price:20000,
        discount:0.1,
    },
    "watch" : {
        price:400,
        discount:0.3,
    }
}


function calculateDiscountPrice(productName){
    const configObject = productConfig[productName]
    return configObject.price - (configObject.price * configObject.discount)
}
const result = calculateDiscountPrice("camera")
console.log(result)
*/



/*
function calculateTotal(countM, costM) {
    let total = 0;
    for (let i = 0; i < countM.length; i++) {
        total = total + countM[i] * costM[i];
    }
    return total;
}

const itemCountMatrix = [1, 2, 3];
const costMatrix = [10, 20, 23];

const total = calculateTotal(itemCountMatrix, costMatrix);
console.log(total);
*/
