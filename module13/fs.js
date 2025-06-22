
// const fs = require('fs');
// console.log('task 1');

// const text = 'learning node.js is fun!';
// fs.writeFileSync('./hello.txt', text);
// console.log('task 3');
// const data = fs.readFileSync('./hello.txt', {encoding: 'utf8'});
// console.log('task 4');

// console.log(data);


const { error } = require('console');
const fs = require('fs');


// const text = 'writing testing';


// fs.readFile('./hello-test.txt',{encoding: 'utf-8'}, (err, data) => {
//     if (err) {
//         console.error('Error reading hello.txt:', err);
//         return;
//     }  

//     fs.writeFile('./hello.txt', data, (err) => {
//         if(err){
//             console.error('Error writing to hello.txt:', err);
//             return;
//         }    
//     })
// });

const readStream = fs.createReadStream("./hello-test.txt", {encoding: 'utf-8'});
const writeStream = fs.createWriteStream("./hello.txt", {encoding: 'utf-8'});

readStream.on('data', (data)=>{
    console.log(data);

    writeStream.write(data, (err)=> {
        if (err) {
            throw Error('Error:', err);
        }
    });
})
readStream.on('Error', (err) => {
    if(err){
        throw Error('Error:', err);
    }
})
readStream.on('end', () => {
    console.log('File reading completed');
    writeStream.end();
})
writeStream.on('finish', () => {
    console.log('File writing completed');
});


