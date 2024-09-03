#ifndef BINSEARCH_H_
#define BINSEARCH_H_

#include <stddef.h>

typedef struct {
    size_t found_idx;
    int runs;
} result_t;

result_t binsearch(const int haystack[], const int needle, const size_t h_size);

#endif // BINSEARCH_H_
