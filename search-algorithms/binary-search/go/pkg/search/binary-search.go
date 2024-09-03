package search

// Binary is an iterative implementation of the Binary Search algorithm.
func Binary(haystack []int, needle int) (int, int) {
	var count int
	var low int
	high := len(haystack) - 1

	// While the range to search hasn't shrunk to zero.
	for low <= high {
		count++

		// The mid-point in our range to search.
		mid := (low + high) / 2

		// The guess is too low, increase the low index.
		if haystack[mid] < needle {
			low = mid + 1
			continue
		}

		// The guess is too high, reduce the high index.
		if haystack[mid] > needle {
			high = mid - 1
			continue
		}

		// We found it!
		return mid, count
	}

	return -1, count
}
