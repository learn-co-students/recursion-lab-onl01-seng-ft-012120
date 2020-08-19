// Code your solution here!

function printString(text) {
  console.log(text[0]);
  
  if (text.length > 1) {
    let newString = text.substring(1, text.length);
    
    printString(newString);
  } 
  
  else {
    return true;
  }
}

function reverseString(text) {
  if (text.length < 2) {
    return text;
  } 
  
  else {
    return reverseString(text.substring(1)) + text[0];
  }
}

function isPalindrome(text) {
  let length = text.length;
  
  if (length < 2) {
    return true;
  } 
  
  else if (text[length - 1] === text[0]) {
    return isPalindrome(text.substring(1, length-1));
  }
  
  else {
    return false;
  }
}

function addUpTo(array, idx) {
  if (idx !== 0) {
    return array[idx] + addUpTo(array, --idx);
  } 
  
  else {
    return array[idx];
  }
}

function maxOf(array) {
  if (array.length === 1) {
    return array[0]
  }
  
  else {
    if (array[0] > array[array.length - 1]) {
      return maxOf(array.slice(0, array.length-1))
    } 
    
    else {
      return maxOf(array.slice(1, array.length))
    }
  }
}

function includesNumber(array, number) {
  if (!array.length) {
    return false;
  }
  
  else if (array[0] === number) {
    return true;
  } 
  
  else {
    return includesNumber(array.slice(1, array.length), number);
  }
}