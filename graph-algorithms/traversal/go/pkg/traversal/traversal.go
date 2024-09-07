package traversal

import "slices"

// DepthFirstTraversal traverses a graph with the depth first algorithm.
func DepthFirstTraversal(graph map[string][]string, src string) []string {
	var res []string
	stack := []string{src}

	for len(stack) > 0 {
		// Pop last node off of stack
		curr := stack[len(stack)-1]
		stack = slices.Delete(stack, len(stack)-1, len(stack))

		res = append(res, curr)

		for _, neighbour := range graph[curr] {
			// Guard against visited nodes
			if !slices.Contains(res, neighbour) {
				stack = append(stack, neighbour)
			}
		}
	}

	return res
}

// DepthFirstTraversalRec traverses a graph with the depth first algorithm recursively.
func DepthFirstTraversalRec(graph map[string][]string, src string) []string {
	var visited []string

	type recFn func(g map[string][]string, s string) []string

	var fn recFn
	fn = func(g map[string][]string, s string) []string {
		res := []string{s}

		for _, neighbour := range g[s] {
			// Guard against visited nodes
			if !slices.Contains(visited, neighbour) {
				visited = append(visited, neighbour)
				res = append(res, fn(g, neighbour)...)
			}
		}

		return res
	}

	return fn(graph, src)
}

// BreadthFirstTraversal traverses a graph with the breadth first algorithm.
func BreadthFirstTraversal(graph map[string][]string, src string) []string {
	var res []string
	queue := []string{src}

	for len(queue) > 0 {
		// Pop last node off of queue
		curr := queue[len(queue)-1]
		queue = slices.Delete(queue, len(queue)-1, len(queue))

		res = append(res, curr)

		for _, neighbour := range graph[curr] {
			// Guard against visited nodes
			if !slices.Contains(res, neighbour) {
				queue = slices.Insert(queue, 0, neighbour)
			}
		}
	}

	return res
}

// EdgeListToAdjList converts an edge list of nodes to an adjacency list.
func EdgeListToAdjList(list [][]string) map[string][]string {
	res := make(map[string][]string)

	for _, edge := range list {
		a := edge[0]
		b := edge[1]

		if _, ok := res[a]; !ok {
			res[a] = []string{}
		}
		if _, ok := res[b]; !ok {
			res[b] = []string{}
		}

		res[a] = append(res[a], b)
		res[b] = append(res[b], a)
	}

	return res
}
