function capitalize(str,arr){
  let splitStr = str.split('');
  let newArray = [];
  for (let i = 0; i < str.length; i++){
    if (arr.includes(i)){
      splitStr[i] = splitStr[i].toUpperCase();
    }
    newArray.push(splitStr[i]);
  }
  return newArray.join('');
}