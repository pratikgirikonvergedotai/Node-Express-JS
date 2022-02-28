const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)


// method returns the system uptime time in seconds 
const uptime = os.uptime()
console.log(uptime)

// returns os type
const type = os.type()
console.log(type)

// returns os release
const release = os.release()
console.log(release)

// returns total memory
const totalmemory = os.totalmem()
console.log(totalmemory)

// returns free memory
const freememory = os.freemem()
console.log(freememory)


