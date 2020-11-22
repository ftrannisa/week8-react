function OtherProducts(input){
    let result = [];
    let totalProduct = 1;

    for(let i = 0; i < input.length; i++){
      totalProduct = totalProduct * input[i];
    }

    for(let i = 0; i < input.length; i++){
      let timesSubstracted = 0;
      let divisor = input[i];
      let dividend = totalProduct;
      while(divisor <= dividend){
        dividend = dividend - divisor;
        timesSubstracted++;
      }
      result.push(timesSubstracted);
    }
    return result;
  }

  let test = OtherProducts([1,2,3,4,5]);
  console.log(test)