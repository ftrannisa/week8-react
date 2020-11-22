function recursion(num){
    const toString = num.toString()
    const split = toString.split('')

    if (split.length > 1){
      let result;
      for (let i = 0; i < split.length; i++){
        if (i == 0){
            result = +split[i]
        }else{
            result *= +split[i]
        }
      }

      return recursion(result)
    } else{
      return split[0]
    }
  }

  console.log(recursion(39))
  console.log(recursion(999))
  console.log(recursion(3))

