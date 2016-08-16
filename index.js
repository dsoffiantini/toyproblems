//return I can write numbers like 1,2,3 without using numbers or .length

var anarchy = function () {
  return "I can write numbers like, " + +!![] + ", " + (!+[]+!![]) + ", " + (!+[]+!![]+!![]) + ".";
}
//
// Write a function that takes an (unsigned) integer as input, and returns the number of bits that are equal to one in the binary representation of that number.
//
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function(n) {
  var binaryNumber = (n >>> 0).toString(2);
  var count = 0;
  for (var i = 0; i < binaryNumber.length; i++) {
    if (binaryNumber[i] === '1') {
      	count++;
      }
    }
  return count;

};


//move all zeroes to end of array

var moveZeros = function (arr) {
  for(var i = arr.length; i--) {
     if(arr[i] === 0) {
        arr.splice(i, 1);
        arr.push(0);
      }
  }
  return arr;
}


//find total of all multiples of 3 and 5 under a given number

function solution(number){
  var multiples = [];
  var total = 0;
  for (var i = 1; i < number; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      multiples.push(i);
      }
    else if (i % 5 === 0) {
      multiples.push(i);
      }
    else if (i % 3 === 0) {
      multiples.push(i);
      }
    }
   for (var i = 0; i < multiples.length; i++) {
     total += multiples[i];
     }
    return total;


}
