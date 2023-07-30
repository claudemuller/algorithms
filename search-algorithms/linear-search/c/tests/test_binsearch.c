#include <stdio.h>
#include <stdlib.h>
#include "../src/linsearch.h"

int *gen_haystack(const int lower, const int upper);

#define ASSERT(condition) \
    do { \
	if (!(condition)) { \
	    printf("Assertion failed: %s, line %d\n", __FILE__, __LINE__); \
	    return 1; \
	} \
    } while (0)

int test_linsearch()
{
    int *h = gen_haystack(1, 128);
    result_t actual = linsearch(h, 8, 128-1);
    ASSERT(actual.found_idx == (size_t)7);
    ASSERT(actual.runs == 8);
    free(h);

    h = gen_haystack(128, 222);
    actual = linsearch(h, 8, 222-128);
    ASSERT(actual.found_idx == (size_t)-1);
    ASSERT(actual.runs == 95);
    free(h);

    h = gen_haystack(128, 222);
    actual = linsearch(h, 143, 222-128);
    ASSERT(actual.found_idx == (size_t)15);
    ASSERT(actual.runs == 16);
    free(h);

    h = gen_haystack(1, 128);
    actual = linsearch(h, 129, 128-1);
    ASSERT(actual.found_idx == (size_t)-1);
    ASSERT(actual.runs == 128);
    free(h);

    return 0;
}

int main()
{
    int failed_tests = 0;

    printf("Running tests for 'linsearch' function...\n");
    if (test_linsearch() != 0) {
	printf("❌ Some tests for 'linsearch' function failed.\n");
	failed_tests++;
    } else {
	printf("✅ All tests for 'linsearch' function passed.\n");
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
