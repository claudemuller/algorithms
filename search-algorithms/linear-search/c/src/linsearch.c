#include "linsearch.h"

/**
 * Linear search implementation using iteration.
 *
 * @param const int[] haystack - the array to search
 * @param const int needle - the value to search for
 * @return int - the location of the found value
 */
result_t linsearch(const int *haystack, const int needle, const size_t h_size)
{
	int c = 0;

	for (size_t i = 0; i < h_size+1; i++) {
		c++;
		if (haystack[i] == needle) {
			return (result_t){
				.found_idx = i,
				.runs = c,
			};
		}
	}

	return (result_t){
		.found_idx = -1,
		.runs = c,
	};
}
