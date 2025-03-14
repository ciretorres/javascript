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