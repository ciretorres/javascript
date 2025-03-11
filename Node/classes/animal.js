class Animal {
    // variables o propiedades
    name;

    constructor(name){
        // constructor
        this.name = name;
    }    

    setName(name){
        this.name = name;
    }
}

function speak() {
    console.log(`${this.name} makes a noise.`)
}

export {
    Animal,
    speak
}
// module.exports = {
//     Animal,
//     speak
// }
