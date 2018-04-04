//All permutation of a given string:
//https://www.interviewcake.com/question/javascript/recursive-string-permutations?utm_source=weekly_email

//To Be Completed
var permutations = [];
function getPermutation(string){
	if(string.length <= 1){
		return string;
	}else{
		var allCharExceptLast = string.slice(0,-1),
			lastChar = string.slice(string.length -1);

		var allPermutationsOfAllCharExceptLast = getPermutation(allCharExceptLast);

		for(let index = 0; index < allPermutationsOfAllCharExceptLast.length; index++ ){
			var permutation = allPermutationsOfAllCharExceptLast[index];
			for(var position = 0; position < permutation.length; position++){
				permutations.push(permutation.slice(0, position) + lastChar + permutation.slice(position))
			}
		}
	}
	return permutations;
}

console.log(getPermutation("ca"));
