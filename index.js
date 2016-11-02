const esprima = require('esprima');
const fs = require('fs');
const path = require('path');

const program = fs.readFileSync(path.join(__dirname, 'lib/thing.js'));
console.log(esprima.parse(program));
