function high(str){
  let splitString = str.split(' ');
  // console.log(splitString);
  let sortedArray = splitString.sort((a, b) => scoreWord(b) - scoreWord(a));
  return sortedArray[0];
}

function scoreWord(word){
  let alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
  // console.log(alphabetArray);
  let wordTotal = 0;
  for(let i in word){
    wordTotal += alphabetArray.indexOf(word[i]) + 1;
  }
  return wordTotal;
}