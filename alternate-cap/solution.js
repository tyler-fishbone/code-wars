function capitalize(s){
  let evenUpperCase = [], oddUpperCase = [];
  for(var i in s){
    if (i % 2) {
      oddUpperCase.push(s[i].toUpperCase());
      evenUpperCase.push(s[i]);
    } else{
      evenUpperCase.push(s[i].toUpperCase());
      oddUpperCase.push(s[i]);
    }
  }
  return [evenUpperCase.join(''), oddUpperCase.join('')];
}