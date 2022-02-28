const{createReadStream}  = require('fs')

// reading stream data applying utf-8 encoding
const stream_data = createReadStream('./content/big.txt', { encoding: 'utf8' })

// catching a on event and console.log result
stream_data.on('data', (result) => console.log(result))

stream_data.on('error', (error) => console.error(error))