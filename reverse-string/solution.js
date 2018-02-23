function solution(str){
  let newArr = [];
  let input = str.split('');
  for (let i = 0; i < str.length; i++){
    newArr.push(input.pop(i));
  }
  return newArr.join('');
}