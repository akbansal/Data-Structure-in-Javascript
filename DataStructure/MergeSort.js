
//******************************************************************
var mergeSort = function(A){
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
    while(lLen < leftArr.length  && rLen < rightArr.length){
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
//console.log(MergeSort(arr));