/**
 * Selection sort algorithm
 *
 * @param {int[]} data - the array to sort
 */
export function selectionSort(data) {
	const lowest = (arr) => {
		let minIdx = 0;
		let min = arr[0];

		for (let i = 0; i < arr.length; i++) {
			// We keep track of the lowest value encountered
			if (arr[i] < min) {
				min = arr[i];
				minIdx = i;
			}
		}

		return minIdx;
	}

	for (let j = 0; j < data.length; j++) {
		// We pass in the unsorted portion of the array i.e. the part after the place we're currently
		// at, index j
		let lowestIdx = lowest(data.slice(j)) + j;

		// Don't swap anything if the current item is already sorted
		if (lowestIdx != j) {
			[data[j], data[lowestIdx]] = [data[lowestIdx], data[j]];
		}
	}
}
