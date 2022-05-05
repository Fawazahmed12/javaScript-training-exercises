//1.


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

const number = [1,2,3,4,5]
console.log(number[3])
//write a function to filter a male records.


function toGetMaleInformation(informations){
   let maleList = []
    for(let index = 0;index<informations.length;index++){
        console.log(informations[index])
        if(informations[index].gender === 'male'){

            maleList.push(informations[index])
        }
    }
   return maleList;
}

let maleInformation = toGetMaleInformation(data)
console.log(maleInformation)



//write a function to filter a female records.

// function toGetFemaleInformation(informations){
//     let femaleList = []
//      for(let index = 0;index<informations.length;index++){
//          if(informations[index].gender === 'female'){
//             femaleList.push(informations[index])
//          }
//      }
//     return femaleList;
//  }
 
//  let femaleInformation = toGetFemaleInformation(data)
//  console.log(femaleInformation)


// write a function to filter an age which less than 18.

// function toGetAgeInformation(informations){
//     let ageList = []
//      for(let index = 0;index<informations.length;index++){
//          if(informations[index].age < '18'){
//             ageList.push(informations[index])
//          }
//      }
//     return ageList;
//  }
 
//  let ageInformation = toGetAgeInformation(data)
//  console.log(ageInformation)


//  write a function to filter an age which greater than 18.

// function toGetAgeInformation(informations){
//     let ageList = []
//      for(let index = 0;index<informations.length;index++){
//          if(informations[index].age > '18'){
//             ageList.push(informations[index])
//          }
//      }
//     return ageList;
//  }
 
//  let ageInformation = toGetAgeInformation(data)
//  console.log(ageInformation)



//  write a function to filter an age in between 18-25.


// function toGetAgeInformation(informations){
//     let ageList = []
//      for(let index = 0;index<informations.length;index++){
//          const isAge = informations[index].age
         
//          if((isAge > '18') && (isAge < '25')){
//             ageList.push(informations[index])
//          }
//      }
//     return ageList;
//  }
 
//  let ageInformation = toGetAgeInformation(data)
//  console.log(ageInformation)