'use strict';

// Complete this algo
const binarySearch = (array, target, head = 0, tail = array.length-1) => {
	let curArr = array
	let curIndex = Math.floor((head+tail)/2)
	if(tail-head === 0) {
		if(curArr[0] === target) {
			return true
		} else {
			return false
		}
	} else {
		if(curArr[curIndex] === target) {
			return true
		} else if( target < curArr[curIndex] ) {
			return binarySearch(array, target, head, curIndex)
		} else {
			if(tail-head === 1) {
				return binarySearch(array, target, curIndex, tail)
			} else {
				return binarySearch(array, target, curIndex+1, tail)
			}
		}
	}

};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch