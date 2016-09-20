//******************************************************************
//BinaryGap Program - Find longest sequence of zeros in binary representation of an integer.
var binaryGap = function(number){
    var numBinaryString = number.toString(2),
        numBinaryStringLen = numBinaryString.length,
        index = 0, maxBinaryGap=0, count, flag = 0; // Flag 0 means stop and 1 means start
    
    if(numBinaryString.length > 2){
        for(;index < numBinaryStringLen; index++ ){    
            if(numBinaryString[index] === "1"){
              if(flag === 0 ){
                flag = 1;
                count= 0;
              }else{
                if(count >= maxBinaryGap){
                   maxBinaryGap = count;
                }
                count = 0;
              }
            }else if(numBinaryString[index] === "0" && flag === 1){
              count = count + 1;
            }
        }
    }
    return maxBinaryGap;
}
binaryGap(328);
binaryGap(1041);
binaryGap(15);
//******************************************************************


