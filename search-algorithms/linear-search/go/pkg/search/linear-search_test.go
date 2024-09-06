package search_test

import (
	"errors"
	"testing"

	"github.com/claudemuller/algorithms/search-algorithms/go/pkg/search"
)

func TestLinearSearch(t *testing.T) {
	tests := []struct {
		name     string
		find     int
		lowerN   int
		upperN   int
		foundIdx int
		runs     int
	}{
		{
			name:     "Find needle in 8 runs",
			find:     8,
			lowerN:   1,
			upperN:   128,
			foundIdx: 7,
			runs:     8,
		},
		{
			name:     "Do not find needle in 95 runs",
			find:     8,
			lowerN:   128,
			upperN:   222,
			foundIdx: -1,
			runs:     95,
		},
		{
			name:     "Find needle in 16 runs",
			find:     143,
			lowerN:   128,
			upperN:   222,
			foundIdx: 15,
			runs:     16,
		},
		{
			name:     "Do not find needle in 128 runs",
			find:     129,
			lowerN:   1,
			upperN:   128,
			foundIdx: -1,
			runs:     128,
		},
	}

	for _, tc := range tests {
		tt := tc
		t.Run(tt.name, func(t *testing.T) {
			haystack, err := genHaystack(tt.lowerN, tt.upperN)
			if err != nil {
				t.Fatal(err)
			}

			got, runs := search.Linear(haystack, tt.find)

			if tt.foundIdx != got {
				t.Errorf("want = %d, got = %d", tt.foundIdx, got)
			}
			if tt.runs != runs {
				t.Errorf("want = %d, got = %d", tt.runs, runs)
			}
		})
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
