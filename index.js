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
