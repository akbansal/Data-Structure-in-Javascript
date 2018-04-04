//******************************************************************
var binarySearch = function(array, targetValue) {
  var min = 0;
  var max = array.length - 1;
  var guess;
  while (max >= min){
    guess = Math.floor((max+min)/2);
    if(targetValue === array[guess]){
      return guess;
    }else if (targetValue < array[guess]){
      max = guess - 1; 
    }else{
      min = guess + 1;
    }   
  }
  return -1;
};
//console.log(binarySearch(primes, 73));
//******************************************************************