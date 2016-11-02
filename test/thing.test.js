const assert = require('assert');
const thing = require('../lib/thing');

describe('thing', function() {
	it('returns 1', function() {
		assert(thing() == 1);
	});
});
