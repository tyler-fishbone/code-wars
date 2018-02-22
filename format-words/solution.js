function formatWords(words){
  // null error handling
  if (!words) return '';
  // no space handling
  let arrNoSpace = [];
  for(let i = 0; i < words.length; i++) {
    if(words[i].length > 0) {
      arrNoSpace.push(words[i]);
    }
  }
  // format words function
  let arrReturn = [];
  for(let i = 0; i < arrNoSpace.length; i++) {
    arrReturn.push(arrNoSpace[i]);
    if(i <= arrNoSpace.length - 3){
      arrReturn.push(', ');
    } else if (i <= arrNoSpace.length - 2){
      arrReturn.push(' and ');
    } else {
      continue;
    }
  }
  return arrReturn.join('');
}
