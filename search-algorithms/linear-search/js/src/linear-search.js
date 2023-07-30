/**
 * Linear search implementation using iteration.
 *
 * @param {int[]} haystack - the array to search
 * @param {int} needle - the value to search for
 * @return {Object} - the location of the found value and number of runs
 */
export function linearSearch(haystack, needle) {
	let c = 0;

	for (let i = 0; i < haystack.length; i++) {
		c++;
		if (haystack[i] == needle) {
			return {foundIdx: i, runs: c};
		}
	}

	return {foundIdx: -1, runs: c};
}
