function insertDash(num) {
  let arr = (num.toString()).split('');
  let newArray = [];
  for(let i = 0; i < arr.length; i++) {
    newArray.push(arr[i]);
    if (arr[i] % 2 !== 0
      && (arr[i + 1]) % 2 !== 0
      && i !== arr.length - 1){
        newArray.push('-');
    }
  }
  return newArray.join('');
}