const os = require('os');

console.log('Operating System Info:');
console.log(`OS Type: ${os.type()}`);
console.log(`OS Platform: ${os.platform()}`);
console.log(`OS Architecture: ${os.arch()}`);
console.log(`Total Memory: ${os.totalmem()}`);
console.log(`Free Memory: ${os.freemem()}`);
console.log(`Uptime: ${os.uptime()} seconds`);
