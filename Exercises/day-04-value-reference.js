// function getValue(a){
//     a=400;
// }

// getValue(10)
// console.log(a)


// function getValue(a){
//     a=400;
// }
// let a = 200;
// getValue(a)
// console.log(a) // copy by value


// function getValue(a){
//     a.push("2000")
// }
// const b =[];
// a.push("100")
// a.push("300")
// getValue(b)
// console.log(b) 



const cityName = ["chennai","calcatta","delhi","bangalore","hyderabad"]
let filteredNames = []
function addOnlyCityNamesStartingWithC(city){
    filteredNames = []
    if(city.startsWith("c")){
        if(cityName.includes(city)){
            if(!filteredNames.includes(city)){
                filteredNames.push(city)
            }
        }
    }
}

addOnlyCityNamesStartingWithC("Trichy")
addOnlyCityNamesStartingWithC("kovai")
addOnlyCityNamesStartingWithC("chennai")
addOnlyCityNamesStartingWithC("delhi")
addOnlyCityNamesStartingWithC("calcatta")
addOnlyCityNamesStartingWithC("chennai")
addOnlyCityNamesStartingWithC("Trichy")

console.log(filteredNames);