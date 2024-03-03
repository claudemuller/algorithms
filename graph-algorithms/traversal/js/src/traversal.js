/**
 * Depth First traversal of a graph.
 *
 * @param {{string, string[]}} graph - the graph to traverse
 * @param {string} source - the node at which to start traversing
 * @return {string[]} - the resulting nodes that were traversed
 */
export function depthFirstTraversal(graph, source) {
  const stack = [source];
  const res = new Set();
  const visited = [];

  while (stack.length > 0) {
    const curr = stack.pop();
    res.add(curr);

    for (let neighbour of graph[curr]) {
      // Guard against visited nodes
      if (!(neighbour in visited)) {
        visited.push(neighbour);
        stack.push(neighbour);
      }
    }
  }

  return Array.from(res);
}

/**
 * Depth First traversal of a graph using recursion.
 *
 * @param {{string, string[]}} graph - the graph to traverse
 * @param {string} source - the node at which to start traversing
 * @return {string[]} - the resulting nodes that were traversed
 */
export function depthFirstTraversalRec(graph, source) {
  const visited = [];

  const fn = (g, s) => {
    const res = [s];

    for (let neighbour of g[s]) {
      // Guard against visited nodes
      if (!(neighbour in visited)) {
        visited.push(neighbour);
        res.push(...fn(g, neighbour));
      }
    }

    return res;
  };

  return fn(graph, source);
}

/**
 * Breadth First traversal of a graph.
 *
 * @param {{string, string[]}} graph - the graph to traverse
 * @param {string} source - the node at which to start traversing
 * @return {string[]} - the resulting nodes that were traversed
 */
export function breadthFirstTraversal(graph, source) {
  const queue = [source];
  const res = new Set();
  const visited = [];

  while (queue.length > 0) {
    const curr = queue.shift();
    res.add(curr);

    for (let neighbour of graph[curr]) {
      // Guard against visited nodes
      if (!(neighbour in visited)) {
        visited.push(neighbour);
        queue.push(neighbour);
      }
    }
  }

  return Array.from(res);
}

/**
 * Convert an edge list to an adjacency list.
 *
 * @param {string[][]} graph - the graph to traverse
 * @return {{string, string[]}} - the resulting adjacency list
 */
export function edgeListToAdjacencyList(list) {
  const res = {};

  for (let edge of list) {
    const [a, b] = edge;

    if (!(a in res)) {
      res[a] = [];
    }
    if (!(b in res)) {
      res[b] = [];
    }

    res[a].push(b);
    res[b].push(a);
  }

  return res;
}
