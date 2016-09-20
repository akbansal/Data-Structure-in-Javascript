//******************************************************************
/*
Triangle - Determine whether a triangle can be built from a given set of edges.
Description:
A zero-indexed array A consisting of N integers is given. A triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:

A[P] + A[Q] > A[R],
A[Q] + A[R] > A[P],
A[R] + A[P] > A[Q].
For example, consider array A such that:

  A[0] = 10    A[1] = 2    A[2] = 5
  A[3] = 1     A[4] = 8    A[5] = 20
Triplet (0, 2, 4) is triangular.

Write a function:

function solution(A);
that, given a zero-indexed array A consisting of N integers, returns 1 if there exists a triangular triplet for this array and returns 0 otherwise.

For example, given array A such that:

  A[0] = 10    A[1] = 2    A[2] = 5
  A[3] = 1     A[4] = 8    A[5] = 20
the function should return 1, as explained above. Given array A such that:

  A[0] = 10    A[1] = 50    A[2] = 5
  A[3] = 1
the function should return 0.

Assume that:

N is an integer within the range [0..100,000];
each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
Complexity:

expected worst-case time complexity is O(N*log(N));
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.

*/
function solution(A) {
    var arrLen = A.length, index; 
    A = mergeSort(A);
    for(index = 0; index< arrLen-2; index++){
        if(A[index] + A[index+1] > A[index+2]){
            return 1;
        }
    }
    return 0;
}
function mergeSort(A){
    if(A.length === 1){
        return A;
    }
    var mid = A.length / 2,
        leftArr = A.slice(0,mid),
        rightArr = A.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}
function merge(leftArr, rightArr){
    var lLen = 0, rLen = 0, result= [];
    while(leftArr[lLen] && rightArr[rLen]){
        if(leftArr[lLen] <= rightArr[rLen]){
            result.push(leftArr[lLen]);
            lLen++;
        }else{
            result.push(rightArr[rLen]);
            rLen++;
        }
    }
    return result.concat(leftArr.slice(lLen).concat(rightArr.slice(rLen)));
}
//******************************************************************



