function findDupeChar() {
    var str = "indianapolis";
    var result = [];
    var dupe = [];
    
    for (let i=0; i <  str.length; i++) {
         
      if (!result.includes(str[i])) {
          result.push(str[i]);          
    }
    else {
      if (!dupe.includes(str[i]))
       dupe.push(str[i])
    }
  
    }
    console.log(result);
    console.log(dupe);
  
  }
  
  findDupeChar();