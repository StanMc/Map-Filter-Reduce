import emojipedia from "./emojipedia";

console.clear();
console.log(emojipedia);

var truncatedMeanings = [];

function extractTruncatedMeaning(entry) {
  return entry.meaning.substring(0, 99);
}

truncatedMeanings = emojipedia.map(extractTruncatedMeaning);
console.log(truncatedMeanings);

/* var numbers = [3, 56, 2, 48, 5];

console.clear();

//Map -Create a new array by doing something with each item in an array.
function double (x){
  return x*2;
}
const newNumbersDoubled = numbers.map(double);
console.log("newNumbersDoubled = " + newNumbersDoubled);


 //Filter - Create a new array by keeping the items that return true.
function greaterThanTen (x){
  if (x > 10){
    return true;
  } else {
    return false
  }
}
const newNumbersGreaterThanTen = numbers.filter(greaterThanTen);
console.log("newNumbersGreaterThanTen = " + newNumbersGreaterThanTen);

//Reduce - Accumulate a value by doing something to each item in an array.
var newNumberSum = numbers.reduce(function (acculator, currentNumber){
  console.log("acculator = " + acculator);
  console.log("currentNumber = " + currentNumber);
    return acculator + currentNumber; 
})
console.log("newNumberSum = " + newNumberSum);


//Find - find the first item that matches from an array.

const firstNumberGreatThanTen = numbers.find(function (num){
  return num > 10; 
})
console.log("firstNumberGreatThanTen = " + firstNumberGreatThanTen);

//FindIndex - find the index of the first item that matches.
const firstNumberGreatThanTenIndex = numbers.findIndex(function (num){
  return num > 10; 
})
console.log("firstNumberGreatThanTenIndex = " + firstNumberGreatThanTenIndex);
*/
