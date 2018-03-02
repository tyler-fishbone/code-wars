function mutateMyStrings(stringOne, stringTwo){
  let arrWords = [stringOne, '\n'];
  let splitWord = stringOne.split('');
  for(let i in stringOne){
    if(stringOne[i] !== stringTwo[i]){
      splitWord[i] = stringTwo[i];
      arrWords.push(splitWord.join('') + '\n');
    }
  }
  return arrWords.join('');
}