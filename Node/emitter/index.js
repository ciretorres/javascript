// https://nodejs.org/en/learn/asynchronous-work/the-nodejs-event-emitter
// https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick
// https://nodejs.org/api/events.html#events_events
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error

// importando la clase EventEmitter de 'events'
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

/**
 * Clase MyEmitter
 * Hereda o exitiende las propiedades y métodos
 * de la clase EventEmmitter.
 */
class MyEmitter extends EventEmitter {/** está vacía */}
// se crea un objeto o instancia
const myEmitter = new MyEmitter();

// creando evento listener on
myEmitter.on('eventName', () => {
    // funciones attached synchronously
  console.log('myEmitter - an event occurred!');
});
// emitiendo evento
myEmitter.emit('eventName');

// --
// importando clase utilizando método require para nodejs
const MyEmitterRequire = require('./my-emitter')
const myEmitterRequire = new MyEmitterRequire();

myEmitterRequire.on('event', () => {
    console.log('myEmitterRequire - a second event occurred!');
});
// emit
myEmitterRequire.emit('event');

myEmitterRequire.on('event1', (result) => {
    console.log('myEmitterRequire', result);
});
// emit
myEmitterRequire.emit('event1', 'a third event occurred!');

myEmitterRequire.on('error', (err) => {
    console.error('myEmitterRequire - whoops! there was an error');
});
// emit
myEmitterRequire.emit('error', new Error('whoops!'));

// accediento a métodos de la clase
myEmitterRequire.emitFunction('myEmitterRequire - hola');
