function powerOfTwo(n) {
    if (typeof n !== 'number') 
         return 'Not a number'; 
   
       return (n > 0) && ((n & (n - 1)) === 0)
   }
   
console.log(powerOfTwo(16));
console.log(powerOfTwo(20));
console.log(powerOfTwo(156));
