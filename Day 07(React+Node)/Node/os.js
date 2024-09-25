const os = require('os');

let homeDir = os.homedir();
console.log(`Home directory: ${homeDir}`);

let platform = os.platform();
console.log(`Platform: ${platform}`);

let arch = os.arch();
console.log(`Architecture: ${arch}`);

let totalMem = os.totalmem();
let freeMem = os.freemem();
console.log(`Total memory: ${totalMem} bytes`);
console.log(`Free memory: ${freeMem} bytes`);

let numCpus = os.cpus().length;
console.log(`Number of CPUs: ${numCpus}`);

let endianness = os.endianness();
console.log(`Endianness: ${endianness}`);

let hostname = os.hostname();
console.log(`Hostname: ${hostname}`);

let interfaces = os.networkInterfaces();
console.log(`Network interfaces: ${JSON.stringify(interfaces)}`);