function validatePIN (pin) {
  if (
    // number of characters in pin is 4 or 6
    (pin.length === 4 || pin.length === 6)
    // pin is is positive or 0
    && pin * -1 <= 0 
    // pin is an integer
    && Math.floor(pin) === pin){
    
    return true;
  } else {
    return false;
  }
}

// or 

function validatePIN (pin) {
  return /^\d\d\d\d(\d\d)?$/.test(pin);
}
