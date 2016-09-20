//******************************************************************
//TapeEquilibrium - Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])|.
function solution(A){
   var arrayLen = A.length,
       index = 1, absDiff, minDiff = Number.MAX_VALUE;
        leftArr = A.slice(0, i),
            rightArr = A.slice(i);   
 
    if(arrayLen > 2){
      for(; index < arrayLen-1; index++){
          var leftArr = A.slice(0, i),
            rightArr = A.slice(i);   
          console.log("leftarr = " +leftarr);
          console.log("right Arr= " +rightArr);  
          console.log("ArraySum(leftarr) = "+ArraySum(leftarr));
          console.log("ArraySum(rightArr) = "+ArraySum(rightArr));
          absDiff = Math.abs(ArraySum(leftarr) - ArraySum(rightArr));
          console.log("absDiff = " +absDiff);  
          if(absDiff < minDiff){
            minDiff = absDiff;
          }
      }
    }
    return minDiff;
}
function ArraySum(arr){
  var sum = 0 , aLen = arr.length, i=0;
  for (;i< aLen; i++){
    sum = sum + arr[i];
  }
  return sum;
}

//******************************************************************


