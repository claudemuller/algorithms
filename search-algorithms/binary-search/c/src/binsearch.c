#include "binsearch.h"

/**
 * Binary search implementation using iteration.
 *
 * @param const int[] haystack - the array to search
 * @param const int needle - the value to search for
 * @param const size_t - the size of the array to search
 * @return int - the location of the found value
 */
int binsearch(const int *haystack, const int needle, const size_t h_size)
{
	int count = 0;
	int low = 0;
	int high = h_size - 1;

	// While the range to search hasn't shrunk to zero.
	while (low <= high) {
		count++;

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
		return mid;
	}

	return -1;
}
