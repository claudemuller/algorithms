/**
 * Binary search implementation.
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
		// The value at the midway point in our range.
		const found = haystack[mid];

		// We found it!
		if (found === needle) {
			return {foundIdx: mid, runs: count};
		}

		if (found > needle) {
			// The guess is too high, reduce the high index.
			high = mid - 1;
			continue;
		}

		// The guess is too low, increase the low index.
		low = mid + 1;
	}

	return {foundIdx: -1, runs: count};
}
