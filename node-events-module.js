const eventEmitter = require('events')

const emitter = new eventEmitter()

// listening for response event
emitter.on('response', (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`)
})

emitter.on('response', () => {
  console.log('some other logic here')
})


// emitted response event
emitter.emit('response', 'john', 34)