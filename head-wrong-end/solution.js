function fixTheMeerkat(arr) {
  let newArray = [];
  arr.forEach(function(value, element){
    newArray.push(arr[arr.length-1-element]);
  });
  return newArray;
 }