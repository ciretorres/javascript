console.log('index.js')

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("foo")
    }, 300);
})
// este es el primer registro de la primera vuelta
console.log('myPromise',myPromise);
// myPromise
//     .then(console.log("handleResolveA"), console.log("handleRejectA"))
//     .then(console.log("handleResolveB"), console.log("handleRejectB"))
//     .then(console.log("handleResolveC"), console.log("handleRejectC"));

// myPromise
//     .then(console.log("handleResolveA"))
//     .then(console.log("handleResolveB"))
//     .then(console.log("handleResolveC"))
//     .catch(console.log("handleRejectAny"));

myPromise
    .then((value) => `${value} y barra`)
    .then((value) => `${value} y barra de nuevo`)
    .then((value) => `${value} y de nuevo`)
    .then((value) => `${value} y de nuevo`)
    .then((value) => {
      console.log(value+'a');
    })
    .catch((err) => {
      console.error(err);
    });

const promiseA = new Promise((resolutionFunc, rejectionFunc) => {
    resolutionFunc(777);
})
// En este punto, "promiseA" ya está resuelto.
promiseA.then((val) => 
    console.log("el registro asíncrono tiene val: " + val));
// Aquí termina la primera vuelta de lectura
console.log("registro inmediato");


// Ejemplo básico
let myFirstPromise = new Promise((resolve, reject) => {
    // Llamamos a resolve(...) cuando lo que estábamos haciendo de forma
    // asíncrona fue exitoso, y reject(...) cuando falló.
    // En este ejemplo, usamos setTimeout(...) para simular código asíncrono.
    // En realidad, probablemente usuará algo como XHR o una API HTML5.
    setTimeout(() => {
        resolve("Éxito!")
    }, 250);
});

myFirstPromise.then((successMessage) => {
    // successMessage es lo que hayamos pasado a la función resolve(...) anterior.
    // No tiene que ser una cadena, pero si es solo un mensaje de texto,
    // probablemente lo sea.
    console.log("¡Hurra! " + successMessage);
})