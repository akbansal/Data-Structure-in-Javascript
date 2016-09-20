//******************************************************************
/*
MaxProductOfThree - Maximize A[P] * A[Q] * A[R] for any triplet (P, Q, R).

Description
Write a function:
function solution(A);
that, given a non-empty zero-indexed array A, returns the value of the maximal product of any triplet.

For example, given array A such that:

  A[0] = -3
  A[1] = 1
  A[2] = 2
  A[3] = -2
  A[4] = 5
  A[5] = 6
the function should return 60, as the product of triplet (2, 4, 5) is maximal.

Assume that:

N is an integer within the range [3..100,000];
each element of array A is an integer within the range [−1,000..1,000].
*/
function solution(A) {
    var arrLen = A.length;
    A = mergeSort(A);
    var firstProduct = A[0] * A[1] * A[arrLen - 1],
        secondProduct = A[arrLen - 3] * A[arrLen - 2] * A[arrLen - 1];
    if(firstProduct <= 0){
        return secondProduct;
    }else if(firstProduct > secondProduct){
        return firstProduct;
    }else{
        return secondProduct;
    }
}
//******************************************************************


