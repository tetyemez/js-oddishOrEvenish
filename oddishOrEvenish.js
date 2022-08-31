function oddishOrEvenish(number){
    let sNumber = number.toString();
    var sum = 0;
  
    for (let i = 0; i < sNumber.length; i++) {
        sum += Number(sNumber.charAt(i));
    }
    if(sum %2 === 0){
     return "even";
    }
    else{
      return "odd";
      }
  }