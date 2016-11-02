'use strict';

function thing({ one: localOne = 1 } = {}) {
	return localOne;
}

module.exports = thing;
