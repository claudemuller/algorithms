package search

// Linear iterative implementation of the Linear Search algorithm.
func Linear(haystack []int, needle int) (int, int) {
	var c int

	for i, v := range haystack {
		c++
		if v == needle {
			return i, c
		}
	}

	return -1, c
}
