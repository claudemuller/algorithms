package search

// Linear searches through an array iteratively using the Linear/Simple Search algorithm.
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
