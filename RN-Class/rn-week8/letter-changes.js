function LetterChanges(str) { 

    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newStr = "";
    let loc;
  
    for (let i = 0; i < str.length; i++) {
      loc = alphabet.indexOf(str[i]);
      if (loc === 25) {
        newStr = newStr + "a";
      } else if (loc === -1) {
        newStr += str[i];
      } else {          
        newStr += alphabet[loc + 1];
      }
    }
    
    return newStr.replace(/[aeiou]/g, function(letter) {return letter.toUpperCase()});
           
  }

  console.log(LetterChanges('aku cinta kamu'))
  console.log(LetterChanges('hello world'))
