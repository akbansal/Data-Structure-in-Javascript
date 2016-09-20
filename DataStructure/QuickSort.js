//******************************************************************
var quickSort = function(unsortedArr, leftIndex, rightIndex){
  if(leftIndex >= rightIndex){
   return ;
  }
  var pivotIndex = partition(unsortedArr, leftIndex, rightIndex);
  quickSort(unsortedArr, leftIndex, pivotIndex - 1);
  quickSort(unsortedArr, pivotIndex + 1, rightIndex);
  return unsortedArr;
}
function partition(unsortedArr, leftIndex, rightIndex){
  var pivotValue = unsortedArr[leftIndex],
      j = leftIndex, i;
  for(i = leftIndex + 1; i < rightIndex; i++ ){
    if(unsortedArr[i] <= pivotValue){
      j = j +1;
      swap(unsortedArr[i], unsortedArr[j]);
    }
  }  
  swap(unsortedArr[leftIndex], unsortedArr[j]);
  return j;
}
function swap(i,j){
  var temp = i;
  i = j;
  j= temp;
}
//console.log(quickSort(arr));
//******************************************************************