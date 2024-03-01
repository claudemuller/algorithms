/**
 * Depth First traversal of a graph.
 *
 * @param {{string, string[]}} graph - the graph to traverse
 * @param {string} source - the node at which to start traversing
 * @return {string[]} - the resulting path of traversal
 */
export function depthFirstTraversal(graph, source) {
	const stack = [source]
	const resPath = []

	while (stack.length > 0) {
		const curr = stack.pop()
		resPath.push(curr)

		for (let neighbour of graph[curr]) {
			stack.push(neighbour)
		}
	}

	return resPath
}

/**
 * Depth First traversal of a graph using recursion.
 *
 * @param {{string, string[]}} graph - the graph to traverse
 * @param {string} source - the node at which to start traversing
 * @return {string[]} - the resulting path of traversal
 */
export function depthFirstTraversalRec(graph, source) {
	let resPath = [source];

	(s => {
		for (let neighbour of graph[s]) {
			resPath.push(...depthFirstTraversalRec(graph, neighbour))
		}
	})(source)

	return resPath
}

/**
 * Breadth First traversal of a graph.
 *
 * @param {{string, string[]}} graph - the graph to traverse
 * @param {string} source - the node at which to start traversing
 * @return {string[]} - the resulting path of traversal
 */
export function breadthFirstTraversal(graph, source) {
	const queue = [source]
	const resPath = []

	while (queue.length > 0) {
		const curr = queue.pop()
		resPath.push(curr)

		for (let neighbour of graph[curr]) {
			queue.unshift(neighbour)
		}
	}

	return resPath
}
