function disemvowel (str){
  let arrayOfVowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let splitStr = str.split('');
  let arrayNoVowels = [];
  splitStr.forEach(function(letter) {
    if (!arrayOfVowels.includes(letter)){
      arrayNoVowels.push(letter);
    }
  });
  return arrayNoVowels.join('');
}

// solved it using regex and then made a re regex verison here.