package search_test

import (
	"errors"
	"testing"

	"github.com/claudemuller/algorithms/search-algorithms/go/pkg/search"
)

func TestBinarySearch(t *testing.T) {
	tests := []struct {
		name     string
		find     int
		lowerN   int
		upperN   int
		foundIdx int
		runs     int
	}{
		{
			name:     "Find needle in 4 runs",
			find:     8,
			lowerN:   1,
			upperN:   128,
			foundIdx: 7,
			runs:     4,
		},
		{
			name:     "Do not find needle in 6 runs",
			find:     8,
			lowerN:   128,
			upperN:   222,
			foundIdx: -1,
			runs:     6,
		},
		{
			name:     "Find needle in 6 runs",
			find:     143,
			lowerN:   128,
			upperN:   222,
			foundIdx: 15,
			runs:     6,
		},
		{
			name:     "Do not find needle in 8 runs",
			find:     129,
			lowerN:   1,
			upperN:   128,
			foundIdx: -1,
			runs:     8,
		},
	}

	for _, tc := range tests {
		haystack, err := genHaystack(tc.lowerN, tc.upperN)
		if err != nil {
			t.Fatal(err)
		}

		got, runs := search.Binary(haystack, tc.find)

		if tc.foundIdx != got {
			t.Errorf("want = %d, got = %d", tc.foundIdx, got)
		}
		if tc.runs != runs {
			t.Errorf("want = %d, got = %d", tc.runs, runs)
		}
	}
}

func genHaystack(lowerN, upperN int) ([]int, error) {
	if lowerN >= upperN {
		return nil, errors.New("invalid range")
	}

	haystack := make([]int, upperN-lowerN+1)
	for i := 0; i <= upperN-lowerN; i++ {
		haystack[i] = i + lowerN
	}

	return haystack, nil
}
