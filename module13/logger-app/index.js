
const path = require('path');
const fs = require('fs');
// console.log(path);
const inputArguments = process.argv.slice(2);
// console.log(inputArguments);
const text = inputArguments.join(' ');
// console.log(text);
if(!text){
    console.log("Please provide some text to log.");
    console.log("Example: node index.js 'Hello, World!'");
    process.exit(1);
}
const timestamp = new Date().toISOString();
console.log(timestamp);
const filepath = path.join(__dirname, 'log.txt');

fs.appendFile(filepath, text + ' ' +timestamp +'\n', (err) => {
    if (err) {
        console.error("Error writing to file:", err);
        process.exit(1);
    }
    console.log(`Text logged to ${filepath}`);
});

