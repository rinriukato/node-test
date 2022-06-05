const path = require('path')

console.log(path.sep)

const absolute = path.resolve(__dirname, 'app.js');

console.log(absolute)