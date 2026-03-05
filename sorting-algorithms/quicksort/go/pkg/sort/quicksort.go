package sort

import "slices"

// Quicksort imploys the Quicksort divide and conquer sorting algorithm.
func Quicksort(data []int) []int {
	var qs func(arr []int) []int

	qs = func(arr []int) []int {
		// The base case - if we have 1 or no elements
		if len(arr) < 2 {
			return arr
		}

		halfway := int(float64(len(arr) / 2))
		pivot := arr[halfway]
		less := make([]int, 0, halfway)
		more := make([]int, 0, halfway)

		chop := func(subarr []int) {
			for _, n := range subarr {
				if n <= pivot {
					// Add n to the lower sub-array
					less = append(less, n)
				} else {
					// Add n to the upper sub-array
					more = append(more, n)
				}
			}
		}

		chop(arr[:halfway])
		chop(arr[halfway+1:])

		return slices.Concat(qs(less), []int{pivot}, qs(more))
	}

	return qs(data)
}
