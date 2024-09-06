package sort_test

import (
	"reflect"
	"testing"

	"github.com/claudemuller/algorithms/sorting-algorithms/go/pkg/sort"
)

func TestSelectionSort(t *testing.T) {
	tests := []struct {
		name string
		data []int
		want []int
	}{
		{
			name: "Sort array in ascending order",
			data: []int{3, 2, 8, 1, 7, 10, 4, 9, 6, 5},
			want: []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10},
		},
	}

	for _, tc := range tests {
		got := sort.Selection(tc.data)

		if reflect.DeepEqual(tc.want, got) {
			t.Errorf("want = %d, got = %d", tc.want, got)
		}
	}
}
