//******************************************************************
//CyclicRotation Program - Rotate an array to the right by a given number of steps.
function solution(A, K) {
    var arrayLen = A.length;
    ///console.log("Array is " + A.toString());
    var tempArr = A;
    if(arrayLen > 0 && K > 0 ) {
        if(K > arrayLen){
            K = K % arrayLen;
        }
        var leftArr = A.slice(0, arrayLen-K),
            rightArr = A.slice(arrayLen-K);    
        //console.log("Left Array is " + leftArr);
        //console.log("right Array is " + rightArr);
        tempArr = rightArr.concat(leftArr);  
        //console.log("Temp Array is " + tempArr);
    }
    return tempArr;
}

