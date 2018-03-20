/**
 * Created by ambansa2 on 3/15/18.
 */
// Print Longest consecutive sequence from a string
// INPUT: AABCDDDDEETYRWSDDDDDDWERAAAAAAAAAAAWE
// OUTPUT: {A:11}


function longestSequence(seq) {
  let max_char = null;
  let max_count = 0;
  let prevChar = null;
  let count = 0;

  for(let index = 0, length = seq && seq.length || 0; index < length; index++){
    let currentChar = seq[index];
    if(currentChar === prevChar) {
      count++;
    }
    else{
      count = 1;
    }
    if(count > max_count){
      max_count = count;
      max_char = currentChar;
    }
    prevChar =  currentChar;
  }
  if(max_char && max_count){
    console.log("{"+max_char + ":" + max_count+"}");
  }
  else{
    console.log("NULL");
  }

}
longestSequence("AABCDDDDEETYRWSDDDDDDWERAAAAAAAAAAAWE");