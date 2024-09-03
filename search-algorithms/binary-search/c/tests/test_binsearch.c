#include "../src/binsearch.h"
#include <stdio.h>
#include <stdlib.h>

int *gen_haystack(const int lower, const int upper);
int test_binsearch(void);

#define ASSERT(condition)                                                  \
    do {                                                                   \
        if (!(condition)) {                                                \
            printf("Assertion failed: %s, line %d\n", __FILE__, __LINE__); \
            return 1;                                                      \
        }                                                                  \
    } while (0)

int test_binsearch(void)
{
    int *h = gen_haystack(1, 128);
    result_t actual = binsearch(h, 8, 128 - 1);
    ASSERT(actual.found_idx == (size_t)7);
    ASSERT(actual.runs == 4);
    free(h);

    h = gen_haystack(128, 222);
    actual = binsearch(h, 8, 222 - 128);
    ASSERT(actual.found_idx == (size_t)-1);
    ASSERT(actual.runs == 6);
    free(h);

    h = gen_haystack(128, 222);
    actual = binsearch(h, 143, 222 - 128);
    ASSERT(actual.found_idx == (size_t)15);
    ASSERT(actual.runs == 7);
    free(h);

    h = gen_haystack(1, 128);
    actual = binsearch(h, 129, 128 - 1);
    ASSERT(actual.found_idx == (size_t)-1);
    ASSERT(actual.runs == 7);
    free(h);

    return 0;
}

int main(void)
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

    int size = upper - lower + 1;
    int *haystack = malloc(sizeof(int) * size);
    if (haystack == NULL) {
        return NULL;
    }

    for (int i = 0; i <= size - 1; i++) {
        haystack[i] = i + lower;
    }

    return haystack;
}
