#include <stdio.h>
#include <stdlib.h>
#include "../src/binsearch.h"

int *gen_haystack(const int lower, const int upper);

#define ASSERT(condition) \
    do { \
	if (!(condition)) { \
	    printf("Assertion failed: %s, line %d\n", __FILE__, __LINE__); \
	    return 1; \
	} \
    } while (0)

int test_binsearch()
{
    int *h = gen_haystack(1, 128);
    ASSERT(binsearch(h, 8, 128-1) == 7);
    free(h);

    h = gen_haystack(128, 222);
    ASSERT(binsearch(h, 6, 222-128) == -1);
    free(h);

    h = gen_haystack(128, 222);
    ASSERT(binsearch(h, 143, 222-128) == 15);
    free(h);

    h = gen_haystack(1, 128);
    ASSERT(binsearch(h, 129, 128-1) == -1);
    free(h);

    return 0;
}

int main()
{
    int failed_tests = 0;

    printf("Running tests for 'binsearch' function...\n");
    if (test_binsearch() != 0) {
	printf("❌ Some tests for 'binsearch' function failed.\n");
	failed_tests++;
    } else {
	printf("✅ All tests for 'binsearch' function passed.\n");
    }

    if (failed_tests > 0) {
	printf("💀 Total failed tests: %d\n", failed_tests);
	return 1;
    }

    printf("✅ All tests passed successfully\n");

    return 0;
}

int *gen_haystack(const int lower, const int upper)
{
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
