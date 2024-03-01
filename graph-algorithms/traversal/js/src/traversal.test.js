import {
	breadthFirstTraversal,
	depthFirstTraversal,
	depthFirstTraversalRec,
} from './traversal';

describe('depthFirstTraversal', () => {
	it('should traverse the graph depth first', () => {
		// Arrange.
		/*
		 * a------→c
		 * |       |
		 * ↓       ↓
		 * b       e
		 * |
		 * ↓
		 * d------→f
		 */
		const graph = {
			a: ['c', 'b'],
			b: ['d'],
			c: ['e'],
			d: ['f'],
			e: [],
			f: [],
		}
		const expected = 'abdfce'

		// Act.
		const actual = depthFirstTraversal(graph, 'a');

		// Assert.
		expect(actual.join('')).toEqual(expected);
	});
})

describe('depthFirstTraversalRec', () => {
	it('should traverse the graph depth first recursively', () => {
		// Arrange.
		/*
		 * a------→c
		 * |       |
		 * ↓       ↓
		 * b       e
		 * |
		 * ↓
		 * d------→f
		 */
		const graph = {
			a: ['b', 'c'],
			b: ['d'],
			c: ['e'],
			d: ['f'],
			e: [],
			f: [],
		}
		const expected = 'abdfce'

		// Act.
		const actual = depthFirstTraversalRec(graph, 'a');

		// Assert.
		expect(actual.join('')).toEqual(expected);
	});
})

describe('breadthFirstTraversal', () => {
	it('should traverse the graph breadth first', () => {
		// Arrange.
		/*
		 * a------→c
		 * |       |
		 * ↓       ↓
		 * b       e
		 * |
		 * ↓
		 * d------→f
		 */
		const graph = {
			a: ['b', 'c'],
			b: ['d'],
			c: ['e'],
			d: ['f'],
			e: [],
			f: [],
		}
		const expected = 'abcdef'

		// Act.
		const actual = breadthFirstTraversal(graph, 'a');

		// Assert.
		expect(actual.join('')).toEqual(expected);
	});
})
