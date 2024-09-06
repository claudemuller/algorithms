import { selectionSort } from './selection-sort';

describe('selectionSort', () => {
	it('should sort the array in ascending order', () => {
		// Arrange.
		const data = [3, 2, 8, 1, 7, 10, 4, 9, 6, 5];
		const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

		// Act.
		let actual = data.slice();
		selectionSort(actual);

		// Assert.
		expect(actual).toEqual(expected);
	});
});
