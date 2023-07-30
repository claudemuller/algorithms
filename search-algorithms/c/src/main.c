#include <stdio.h>
#include <stdlib.h>
#include "binsearch.h"

int *gen_haystack(const int lower, const int upper);

int main(void) {
	int h_size = 10;
	int *haystack = gen_haystack(1, h_size);
	int needle = 9;
	int found = binsearch(haystack, needle, h_size);

	free(haystack);

	printf("Found %d at index %d.\n", needle, found);

	return 0;
}

int *gen_haystack(const int lower, const int upper) {
	if (lower >= upper) {
		return NULL;
	}

	int size = upper-lower+1;
	int *haystack = malloc(sizeof(int) * size);
	if (haystack == NULL) {
		return NULL;
	}

	for (int i = 0; i <= size-1; i++) {
		haystack[i] = i + lower;
	}

	return haystack;
}
