function cubeOdd(arr) {
  if (!arr.every(x => typeof x === 'number')) {
    return undefined;
  }
  let cubedArr = arr.map(i => i * i * i);
  let filteredArr = cubedArr.filter(x => x % 2 !== 0);
  return filteredArr.reduce(
    (accumulator, currentValue) =>{
      return accumulator + currentValue;
    }, 0
  );
}