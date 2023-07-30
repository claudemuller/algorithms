import { linearSearch } from './linear-search';

describe('linearSearch', () => {
	it('should find needle in 8 runs', () => {
		// Arrange.
		let haystack;
		try {
			haystack = genHaystack(1, 128);
		} catch (e) {
			console.error(e);
			process.exit(-1);
		}
		const expectedRuns = 8;
		const expectedFoundIdx = 7;

		// Act.
		const {foundIdx, runs} = linearSearch(haystack, 8);

		// Assert.
		expect(foundIdx).toEqual(expectedFoundIdx);
		expect(runs).toEqual(expectedRuns);
	});

	it('should not find needle in 95 runs', () => {
		// Arrange.
		let haystack;
		try {
			haystack = genHaystack(128, 222);
		} catch (e) {
			console.error(e);
			process.exit(-1);
		}
		const expectedRuns = 95;
		const expectedFoundIdx = -1;

		// Act.
		const {foundIdx, runs} = linearSearch(haystack, 8);

		// Assert.
		expect(foundIdx).toEqual(expectedFoundIdx);
		expect(runs).toEqual(expectedRuns);
	});

	it('should find needle in 16 runs', () => {
		// Arrange.
		let haystack;
		try {
			haystack = genHaystack(128, 222);
		} catch (e) {
			console.error(e);
			process.exit(-1);
		}
		const expectedRuns = 16;
		const expectedFoundIdx = 15;

		// Act.
		const {foundIdx, runs} = linearSearch(haystack, 143);

		// Assert.
		expect(foundIdx).toEqual(expectedFoundIdx);
		expect(runs).toEqual(expectedRuns);
	});

	it('should not find needle in 128 runs', () => {
		// Arrange.
		let haystack;
		try {
			haystack = genHaystack(1, 128);
		} catch (e) {
			console.error(e);
			process.exit(-1);
		}
		const expectedRuns = 128;
		const expectedFoundIdx = -1;

		// Act.
		const {foundIdx, runs} = linearSearch(haystack, 129);

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
