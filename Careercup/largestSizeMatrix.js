// Program to find the largest size of square matrix made of 1s

const _ = require('underscore');

function largest_matrixOfOne(matrix) {
  let cache = _.clone(matrix);
  let result = 0;
  for(let i=0; i < matrix.length; i++) {
    for(let j=0; j<matrix[i].length; j++) {
      if(i === 0 || j === 0){
        // Don't do anything;
      }
      else if(matrix[i][j] === 0){
        // Don't do anything;
      }
      else {
        matrix[i][j] = 1 + Math.min(matrix[i-1][j], matrix[i][j-1], matrix[i-1][j-1]);
      }
      if(matrix[i][j] >= result) {
        result = matrix[i][j];
      }
    }
  }
  return result;
}

const matrix = [
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
];

console.log(largest_matrixOfOne(matrix));
