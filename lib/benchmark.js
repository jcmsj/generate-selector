import generateSelector from "./index.js";
// Create a representative DOM structure
let testElem = document.createElement('div');
for (let i = 0; i < 1000; i++) {
    let child = document.createElement('div');
    testElem.appendChild(child);
    testElem = child;
}
// Benchmark the generateSelector function
let times = [];
for (let i = 0; i < 100; i++) {
    let start = performance.now();
    generateSelector(testElem);
    let end = performance.now();
    times.push(end - start);
}
// Calculate the average execution time
let total = times.reduce((a, b) => a + b, 0);
let avg = total / times.length;
console.log(`Average execution time: ${avg} ms`);
