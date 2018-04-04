/**
 * Created by ambansa2 on 4/1/18.
 */
//Rotate an array of size n wth a given value d where d < n
function rotate(arr, d){

	(function(arr, d, n){
		reverseArr(arr, 0, d-1);
		//console.log("1 "+ arr);
		reverseArr(arr, d, n);
		//console.log("2 "+ arr);
		reverseArr(arr, 0, n);
		//console.log("3 "+ arr);
	})(arr, d, arr.length-1);

	return arr;
}
function reverseArr(arr, start, end) {
	while(start<end){
		let temp = arr[start];
		arr[start] = arr[end];
		arr[end] = temp;
		start++;
		end--;
	}
}

console.log(rotate([1,2,3,4,5,6,7], 9));