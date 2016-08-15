const assert = require('assert')

describe('array', () =>{
	describe('#indexof()', () => {
		it ('should return -1 when the value is not present', () => {
			assert.equal(-1, [1,2,3].indexof(5));
			assert.equal(-1, [1,2,3].indexof(0));
		})
		it ('should return the index when the value is present', () => {
			assert.equal(1, [1,2,3].indexof(2));
			assert.equal(2, [1,2,3].indexof(3));
		})
	})
})