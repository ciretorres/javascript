console.log("index.js")

// importando clase animal 
// y generando instancias del objeto
import { Animal } from './animal.js'
const pato = new Animal();

import { Dog } from './animal.js'
const dog = new Dog('Mitzie');
dog.speak();

import { Lion } from './animal.js'
const lion = new Lion('Fuzzy');
lion.speak();

// import { Rectangle } from './rectangle.js'
// const square = new Rectangle(10, 10);
// console.log('square.area', square.area);
// console.log('[...square.getSides()]', [...square.getSides()])

// --
import { Point } from './point.js'
const p1 = new Point(5, 5);
p1.displayName; // undefined
p1.distance; // undefined

const p2 = new Point(10, 10);
p2.displayName; // undefined
p2.distance; // undefined

// accediendo a propiedades y métodos estáticos
console.log('Point.displayName', Point.displayName);
console.log('Point.distance(p1, p2)', Point.distance(p1, p2));

// --
import { Polygon } from './constructor.js'
const polygon = new Polygon();
console.log('polygon.name', polygon.name);

import { Person } from './constructor.js'
const otto = new Person('Otto');
otto.introduce();
const person = new Person();
person.introduce();

import { Foo } from './constructor.js'
const foo = new Foo();
console.log('foo', foo)
foo.constructor();
console.log('foo', foo)

import { Rectangle, Square } from './constructor.js'
const newInstance = new Square();

// pregunta e imprime si newInstance es instancia de las formas
console.log('newIntance instanceof Polygon', newInstance instanceof Polygon);
console.log('newIntance instanceof Rectangle', newInstance instanceof Rectangle);

console.log('newInstance.name', newInstance.name)