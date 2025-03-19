// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// https://www.w3schools.com/Js/js_modules.asp
console.log('class.js')

// importando clase js desde módulo js
import { MyClass } from './class.js'
// de este objeto saco la instancia de la clase
const myClass = new MyClass();
// devuelve el objeto de la clase
console.log(myClass)
// accedo a su métodos
myClass.speak()