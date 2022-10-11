const { EventEmitter } = require('events')

const ev = new EventEmitter()

ev.once('saySomething', (message) => {
    console.log('Eu ouvi você: ', message)
})

ev.emit('saySomething', "Flávia")
ev.emit('saySomething', "Danielle")
ev.emit('saySomething', "Maria")



