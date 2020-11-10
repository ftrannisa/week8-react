const isPalindrome = (str) => {
    const string = str.toLowerCase()
    for (let i = 0; i < string.length / 2; i++)
      if (string[i] !== string[string.length - i - 1])
        return false;
    return true;
  }

  console.log(isPalindrome('Jangan diskip'))
  console.log(isPalindrome('Pipipipip'))
  console.log(isPalindrome('Calon mantu'))
