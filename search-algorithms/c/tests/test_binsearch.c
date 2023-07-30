#include <stdio.h>
#include "../src/binsearch.h"

#define ASSERT(condition) \
	do { \
		if (!(condition)) { \
			printf("Assertion failed: %s, line %d\n", __FILE__, __LINE__); \
			return 1; \
		} \
	} while (0)

int test_binsearch() {
	int h[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    ASSERT(binsearch(h, 8, 10) == 8);

    return 0;
}

int main() {
    int failed_tests = 0;

    printf("Running tests for 'binsearch' function...\n");
    if (test_binsearch() != 0) {
        printf("Some tests for 'binsearch' function failed.\n");
        failed_tests++;
    } else {
        printf("All tests for 'binsearch' function passed.\n");
    }

    if (failed_tests > 0) {
        printf("Total failed tests: %d\n", failed_tests);
        return 1;
    }

    printf("All tests passed successfully\n");

    return 0;
}

