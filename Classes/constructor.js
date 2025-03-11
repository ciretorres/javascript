/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
 */

export class Polygon {
    constructor() {
        this.name = 'Polygon';
    }
}

export class Rectangle {
    constructor() {
        this.name = 'Rectangle';
    }
}

export class Square extends Polygon {
    constructor() {
        super();
    }
    // constructor(length) {
    //     super(length, length);
    //     this.name = "Square";
    // }
    // get area() {
    //     return this.height * this.width;
    // }
    // set area(value) {
    //     this.height = value ** 0.5;
    //     this.width = value ** 0.5;
    // }
}

// Make Square extend Rectangle (which is a base class) instead of Polygon
Object.setPrototypeOf(Square, Rectangle)

export class Person {
    constructor(name = "Anonymous") {
        this.name = name;
    }
    introduce() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

// class ValidationError extends Error {
//     printCustomerMessage() {
//         return `Validation failed :-( (details: ${this.message})`;
//     }
// }
  
// try {
//     throw new ValidationError("Not a valid phone number");
// } catch (error) {
//     if (error instanceof ValidationError) {
//         console.log(error.name); // This is Error instead of ValidationError!
//         console.log(error.printCustomerMessage());
//     } else {
//         console.log("Unknown error", error);
//         throw error;
//     }
// }

class ValidationError extends Error {
    constructor(message) {
        super(message); // call parent class constructor
        this.name = "ValidationError";
        this.code = "42";
    }
    printCustomerMessage() {
        return `Validation failed :-( (details: ${this.message}, code: ${this.code})`;
    }
}

try {
    throw new ValidationError("Not a valid phone number");
} catch (error) {
    if (error instanceof ValidationError) {
        console.log(error.name); // Now this is ValidationError!
        console.log(error.printCustomerMessage());
    } else {
        console.log("Unknown error", error);
        throw error;
    }
}

export class ParentClass {
    constructor() {
        return 1;
    }
}

export class ChildClass extends ParentClass {
    constructor() {
        return 1;
    }
}

export class Foo {
    ["constructor"]() {
        console.log('called');
        this.a = 1;
    }
}
  

  