const os = require('os')

// info about current user
const user = os.userInfo()

console.log(user)

// method returns the system uptime in seconds

console.log(`The System Uptime is ${os.uptime()}`)

const currentOS = {
    name: os.type(),       // Get operating system type
    release:os.release(),   // Gets OS release
    totalMem: os.totalmem(), // Get total mem in bytes
    freeMem: os.freemem(),   // Get total free mem in bytes
}

console.log(currentOS)