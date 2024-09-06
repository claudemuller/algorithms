package sort

// Selection sorts in int array in ascending order using the Selection Sort algorithm.
func Selection(data []int) {
	lowest := func(arr []int) int {
		var minIdx int
		min := arr[0]

		for i := 0; i < len(arr); i++ {
			// We keep track of the lowest value encountered
			if arr[i] < min {
				min = arr[i]
				minIdx = i
			}
		}

		return minIdx
	}

	for j := 0; j < len(data); j++ {
		// We pass in the unsorted portion of the array i.e. the part after the place we're currently
		// at, index j
		lowestIdx := lowest(data[j:]) + j

		// Don't swap anything if the current item is already sorted
		if lowestIdx != j {
			data[j], data[lowestIdx] = data[lowestIdx], data[j]
		}
	}
}
