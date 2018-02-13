function abbrevName(name){
  // convert name to uppercase
  let nameUpperCase = name.toUpperCase();
  //split name on space assign to variable
  let nameArray = nameUpperCase.split(' ');
  //return concadenated indices of nameArray
  return `${nameArray[0][0]}.${nameArray[1][0]}`;
}