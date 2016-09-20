//******************************************************************
//OddOccurrencesInArray - Find value that occurs in odd number of elements.
/*Desc - A non-empty zero-indexed array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

For example, in array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the elements at indexes 0 and 2 have value 9,
the elements at indexes 1 and 3 have value 3,
the elements at indexes 4 and 6 have value 9,
the element at index 5 has value 7 and is unpaired.
*/

function solution(A) {
    var arrLen = A.length,map = {},index = 0;
    if(arrLen === 1){
        return A[0];
    }
    if(arrLen % 2 === 0 ){ //Its Even array
        return 0;
    }else{
        for(; index < arrLen; index++ ){            
            if(map[A[index]]){
                map[A[index]] = map[A[index]] + 1;
                if(map[A[index]] === 2){
                    delete map[A[index]];
                }
            }else{
                map[A[index]] = 1;
            }
        }
    }
    return parseInt(Object.keys(map),10);
}
//******************************************************************


