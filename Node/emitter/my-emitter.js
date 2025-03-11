// importando event emitter
const EventEmitter = require('events');

// exportando clase MyEmitter heredada de EventEmitter
module.exports = class MyEmitter extends EventEmitter {
    constructor(){
        // heredando propiedades del padre
        super()
    }
    // emitFunction(){
    //     console.log('hola')
    // }
    emitFunction = (message) => {
        console.log(message)
        // console.log(result)
    }
}

// class MyEmitter extends EventEmitter {}
// export default { MyEmitter }

// export default class MyEmitter {}