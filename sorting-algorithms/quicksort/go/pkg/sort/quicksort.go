package sort

import "slices"

func Quicksort(data []int) []int {
	var qs func(arr []int) []int

	qs = func(arr []int) []int {
		if len(arr) < 2 {
			return arr
		}

		halfway := int(float64(len(arr) / 2))
		pivot := arr[halfway]
		var less, more []int

		chop := func(subarr []int) {
			for _, n := range subarr {
				if n <= pivot {
					less = append(less, n)
				} else {
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
