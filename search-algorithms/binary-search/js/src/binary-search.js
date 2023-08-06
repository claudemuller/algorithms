/**
 * Binary search implementation using iteration.
 *
 * @param {int[]} haystack - the array to search
 * @param {int} needle - the value to search for
 * @return {Object} - the location of the found value and number of runs
 */
export function binarySearch(haystack, needle) {
	let count = 0;
	let low = 0;
	let high = haystack.length - 1;

	// While the range to search hasn't shrunk to zero.
	while (low <= high) {
		count++;

		// The mid-point in our range to search.
		const mid = Math.floor((low + high) / 2);

		// The guess is too low, increase the low index.
		if (haystack[mid] < needle) {
			low = mid + 1;
			continue;
		}

		// The guess is too high, reduce the high index.
		if (haystack[mid] > needle) {
			high = mid - 1;
			continue;
		}

		// We found it!
		return {foundIdx: mid, runs: count};
	}

	return {foundIdx: -1, runs: count};
}
