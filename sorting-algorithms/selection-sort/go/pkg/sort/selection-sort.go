package sort

// Selection sorts in int array in ascending order using the Selection Sort algorithm.
func Selection(data []int) {
	lowest := func(arr []int) int {
		var minIdx int
		min := arr[0]

		for i := 0; i < len(arr); i++ {
			if arr[i] < min {
				min = arr[i]
				minIdx = i
			}
		}

		return minIdx
	}

	for j := 0; j < len(data); j++ {
		lowestIdx := lowest(data[j:]) + j
		if lowestIdx != j {
			data[j], data[lowestIdx] = data[lowestIdx], data[j]
		}
	}
}
