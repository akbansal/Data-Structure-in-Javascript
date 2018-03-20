/**
 * Created by ambansa2 on 3/15/18.
 */
// Print all subset of a given array
// INPUT: {1,2}
// OUTPUT: {}, {1,2}, {1}, {2}


function Subset(array) {
  let subsetArray = _.map(array, function(){
    return null;
  });
  subsetRecursive(array, subsetArray, 0);
}

function subsetRecursive(array, subsetArray, i) {
  if(i === array.length ) {
    let removeNull = _.reject(subsetArray, function(item){
      return item === null;
    });

    console.log("{"+removeNull+"}");

  }
  else{
    subsetArray[i] = null;
    subsetRecursive(array, subsetArray, i+1);
    subsetArray[i] = array[i];
    subsetRecursive(array, subsetArray, i+1);
  }
}

Subset([1,2,3,4,5]);