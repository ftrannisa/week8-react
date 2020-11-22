function Numbers_in_Words (number) {
    const first = ['','satu ','dua ','tiga ','empat ', 'lima ','enam ','tujuh ','delapan ','sembilan ','sepuluh ','sebelas ','dua belas ','tiga belas ','empat belas ','lima belas ','enam belas ','tujuh belas ','delapan belas ','sembilan belas '];
    const tens = ['', '', 'dua puluh','tiga puluh','empat puluh','lima puluh', 'enam puluh','tujuh puluh','delapan puluh','sembilan'];
    const mad = ['', 'ribu', 'juta', 'miliar', 'triliun'];
    let word = '';
  
    for (let i = 0; i < mad.length; i++) {
      let tempNumber = number%(100*Math.pow(1000,i));
      if (Math.floor(tempNumber/Math.pow(1000,i)) !== 0) {
        if (Math.floor(tempNumber/Math.pow(1000,i)) < 20) {
          word = first[Math.floor(tempNumber/Math.pow(1000,i))] + mad[i] + ' ' + word;
        } else {
          word = tens[Math.floor(tempNumber/(10*Math.pow(1000,i)))] + ' ' + first[Math.floor(tempNumber/Math.pow(1000,i))%10] + mad[i] + ' ' + word;
        }
      }
  
      tempNumber = number%(Math.pow(1000,i+1));
      if (Math.floor(tempNumber/(100*Math.pow(1000,i))) !== 0) word = first[Math.floor(tempNumber/(100*Math.pow(1000,i)))] + 'ratus ' + word;
    }
      return word;
  }
  
  console.log(Numbers_in_Words(89754697976431))
  console.log(Numbers_in_Words(9));
  console.log(Numbers_in_Words(987654321234567));
  console.log(Numbers_in_Words(1998))