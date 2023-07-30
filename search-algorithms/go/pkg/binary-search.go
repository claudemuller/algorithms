package pkg

// BinarySearch is an iterative implementation of the Binary Search algorithm.
func BinarySearch(haystack []int, needle int) (int, int) {
	var count int
	var low int
	high := len(haystack) - 1

	// While the range to search hasn't shrunk to zero.
	for low <= high {
		count++

		// The mid-point in our range to search.
		mid := (low + high) / 2
		// The value at the midway point in our range.
		found := haystack[mid]

		// We found it!
		if found == needle {
			return mid, count
		}

		if found > needle {
			// The guess is too high, reduce the high index.
			high = mid - 1
			continue
		}

		// The guess is too low, increase the low index.
		low = mid + 1
	}

	return -1, count
}
