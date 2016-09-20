//******************************************************************
//PermMissingElem - Find the missing element in a given permutation.
function solution(A) {
    var arrLen = A.length,
        expectedArrValSum = ((arrLen+1)*(arrLen+2))/2,
        actualArrValSum = 0;

    for (; i < arrLen; i++){
      actualArrValSum = actualArrValSum + A[i];
    }
    var missingElement = expectedArrValSum - actualArrValSum;
    return missingElement;
}
//******************************************************************

