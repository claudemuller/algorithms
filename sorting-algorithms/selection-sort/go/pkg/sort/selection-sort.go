package sort

// Selection sorts in int array in ascending order using the Selection Sort algorithm.
func Selection(data []int) []int {
	var min, minIdx int

	for j := 0; j < len(data); j++ {
		for i, v := range data {
			if v < min {
				min = v
				minIdx = i
			}
		}

		data[j], data[minIdx] = data[minIdx], data[j]
	}

	return data
}
