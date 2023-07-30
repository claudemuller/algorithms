import { binarySearch } from './binary-search';

describe('binarySearch', () => {
	it('should find needle in 4 runs', () => {
		// Arrange.
		let haystack;
		try {
			haystack = genHaystack(1, 128);
		} catch (e) {
			console.error(e);
			process.exit(-1);
		}
		const expectedRuns = 4;
		const expectedFoundIdx = 7;

		// Act.
		const {foundIdx, runs} = binarySearch(haystack, 8);

		// Assert.
		expect(foundIdx).toEqual(expectedFoundIdx);
		expect(runs).toEqual(expectedRuns);
	});

	it('should not find needle in 6 runs', () => {
		// Arrange.
		let haystack;
		try {
			haystack = genHaystack(128, 222);
		} catch (e) {
			console.error(e);
			process.exit(-1);
		}
		const expectedRuns = 6;
		const expectedFoundIdx = -1;

		// Act.
		const {foundIdx, runs} = binarySearch(haystack, 8);

		// Assert.
		expect(foundIdx).toEqual(expectedFoundIdx);
		expect(runs).toEqual(expectedRuns);
	});

	it('should find needle in 6 runs', () => {
		// Arrange.
		let haystack;
		try {
			haystack = genHaystack(128, 222);
		} catch (e) {
			console.error(e);
			process.exit(-1);
		}
		const expectedRuns = 6;
		const expectedFoundIdx = 15;

		// Act.
		const {foundIdx, runs} = binarySearch(haystack, 143);

		// Assert.
		expect(foundIdx).toEqual(expectedFoundIdx);
		expect(runs).toEqual(expectedRuns);
	});

	it('should not find needle in 8 runs', () => {
		// Arrange.
		let haystack;
		try {
			haystack = genHaystack(1, 128);
		} catch (e) {
			console.error(e);
			process.exit(-1);
		}
		const expectedRuns = 8;
		const expectedFoundIdx = -1;

		// Act.
		const {foundIdx, runs} = binarySearch(haystack, 129);

		// Assert.
		expect(foundIdx).toEqual(expectedFoundIdx);
		expect(runs).toEqual(expectedRuns);
	});
});

function genHaystack(lowerN, upperN) {
	if (lowerN >= upperN) {
		throw new Error('invalid range');
	}
	let haystack = []
	for (let i = 0; i <= upperN - lowerN; i++) {
		haystack.push(i + lowerN)
	}
	return haystack
}