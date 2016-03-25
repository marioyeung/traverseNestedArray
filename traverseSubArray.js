function traverseSubArray (arr, callback) {
	for (var i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) { // if there is a sub-array
			traverseSubArray(arr[i], callback); // recursion: invoke to do with the sub-array
		} else {
			callback(arr[i]);
		}
	}
}


// Illustration:
var myArray = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10, [11, 2]]]]]];

// Flatten myArray
var flattenArray = [];
traverseSubArray(myArray, function(element){
	flattenArray.push(element);
});
console.log(flattenArray); // -> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 2 ]

// Sum up the elements of myArray
var sum = 0;
traverseSubArray(myArray, function(element){
	sum += element;
});
console.log(sum); // -> 68
