
function find_average(array) {
  let sumTotal = array.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0
  );  
  return sumTotal / array.length;
}