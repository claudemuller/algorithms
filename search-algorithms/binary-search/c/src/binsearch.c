#include "binsearch.h"

/**
 * Binary search implementation using iteration.
 *
 * @param const int[] haystack - the array to search
 * @param const int needle - the value to search for
 * @param const size_t - the size of the array to search
 * @return result_t - the location of the found value and number of iterations
 */
result_t binsearch(const int *haystack, const int needle, const size_t h_size)
{
	int c = 0;
	int low = 0;
	int high = h_size - 1;

	// While the range to search hasn't shrunk to zero.
	while (low <= high) {
		c++;

		// The mid-point in our range to search.
		int mid = (low + high) / 2;

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
		return (result_t) {
			.found_idx = mid,
			.runs = c,
		};
	}

	return (result_t) {
		.found_idx = -1,
		.runs = c,
	};
}
