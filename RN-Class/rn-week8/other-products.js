//No division operation allowed
// keep substracting divisor from dividend, until dividend is zero or less than divisor
function calculateProducsExceptCurrent_NoDivision(input){
    var res = [];
    var totalProduct = 1;
    //calculate the total product
    for(var i = 0; i < input.length; i++){
      totalProduct = totalProduct * input[i];
    }
    //populate the result array by "dividing" each value
    for(var i = 0; i < input.length; i++){
      var timesSubstracted = 0;
      var divisor = input[i];
      var dividend = totalProduct;
      while(divisor <= dividend){
        dividend = dividend - divisor;
        timesSubstracted++;
      }
      res.push(timesSubstracted);
    }
    return res;
  }

  let test = calculateProducsExceptCurrent_NoDivision([1,2,3,4,5]);
  console.log(test)