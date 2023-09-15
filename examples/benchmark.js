const bcrypt = require('../bcrypt');

const iterations = 100;
const saltRounds = 10;

const start = performance.now();

console.log(`Hashing ${iterations} passwords with ${saltRounds} salt rounds`);

for (let i = 0; i < iterations; i++) {
    bcrypt.hashSync('test', saltRounds);
}

const end = performance.now();

console.log(`Completed in ${end - start}ms`);
console.log(`Roughly ${(end - start) / iterations}ms per password`)
console.log(`${(iterations / (end - start)) * 1000} passwords per second`)
