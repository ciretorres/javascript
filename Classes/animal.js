/**
 * Class Animal
 * @see https://lenguajejs.com/javascript/oop/clases/
 */
export class Animal {
    name;
    constructor(name){
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`)
    }
}
/**
 * Class Dog
 */
export class Dog extends Animal {
    constructor(name){
        // call the super class constructor 
        // and pass in the name parameter
        super(name);
    }
    speak() {
        console.log(`${this.name} barks.`)
    }
}
/**
 * Class Cat
 */
export class Cat {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}
/**
 * Class Lion
 */
export class Lion extends Cat {
    speak() {
        super.speak();
        console.log(`${this.name} roars.`);
    }
}