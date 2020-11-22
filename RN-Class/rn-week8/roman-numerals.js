let romanNumberls = function(num) {
  let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"  ];

  let romanized = "";

  for (let i = 0; i < decimal.length; i++) {
    while (decimal[i] <= num) {
      romanized += romanNumeral[i];
      num -= decimal[i];
    }
  }

  return romanized;
};

console.log(romanNumberls(4));
console.log(romanNumberls(9));
console.log(romanNumberls(14));
console.log(romanNumberls(1454));
console.log(romanNumberls(1644));
