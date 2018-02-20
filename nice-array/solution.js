function isNice(arr){
  let returnVal = true;
  for(let n in arr) {
    if(arr.includes(arr[n] + 1 )
    ||arr.includes(arr[n] - 1)){
      continue;
    } else {
      returnVal = false;
    }
  }
  return returnVal;
}