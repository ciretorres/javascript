# Usar promesas
El objeto Promise representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante. Una Promise (promesa en castellano) es un objeto que representa la terminación o el fracaso de una operación asíncrona.

```javascript
function exitoCallback(resultado) {
    console.log("Archivo de audio disponible en la URL " + resultado);
}
function falloCallback(error) {
    console.log("Archivo de audio disponible en la URL " + error);
}

crearArchivoAudioAsync(audioConfig, exitoCallback, falloCallback);
crearArchivoAudioAsync(audioConfig).then(exitoCallback, falloCallback);
```

```javascript
const promesa = crearArchivoAudioAsync(audioConfig);
// llamada a función asíncrona
promesa.then(exitoCallback, falloCallback);
```

Una de las grandes ventajas de usar promises es el encadenamiento. Una necesidad común es el ejecutar dos o más operaciones asíncronas seguidas, donde cada operación posterior se inicia cuando la operación previa tiene éxito, con el resultado del paso previo. Logramos esto creando una cadena de objetos promises.

```javascript
const promesa1 = hazAlgo();
const promesa2 = promesa1.then(exitoCallback, falloCallback);
let promesa3 = hazAlgo().then(exitoCallback, falloCallback);

hazAlgo()
    .then(function(resultado) {
        return hazAlgoMas(resultado);
    })
    .then(function(nuevoResultado) {
        return hazLaTerceraCosa(nuevoResultado);
    })
    .then(function(resultadoFinal) {
        console.log("Obteniendo el resultado final: " + resultadoFinal);
    })
    .catch(falloCallback);
```

```javascript
hazAlgo()
    .then((resultado) => hazAlgoMas(resultado))
    .then((nuevoResultado) => hazLaTerceraCosa(nuevoResultado))
    .then((resultadoFinal) => {
        console.log(`Obteniendo el resultado final: ${resultadoFinal}`)
    })
    .catch(falloCallback);
```

```javascript
new Promise((resolver, rechazar) => {
    console.log('Inicial');

    resolver();
})
    .then(() => {
        throw new Error("Algo falló");

        console.log("Haz esto");
    })
    .catch(() => {
        console.log("Haz aquello");
    })
    .then(() => {
        console.log("Haz esto sin que importe lo que sucedió antes");
    })
```

Básicamente, una cadena de promesas se detiene si hay una excepción, y recorre la cadena buscando manejadores de captura. Lo siguiente está mucho más adaptado a la forma de trabajo del código síncrono:

```javascript
try {
    let resultado = synHazAlgo();
    let nuevoResultado = synHazAlgoMas(resultado);
    let resultadoFinal = synHazLaTerceraCosa(nuevoResultado);
    console.log(`Obteniendo el resultado final: ${resultadoFinal}`);
} catch(error) {
    falloCallback(error);
}
```

Esta simetría con el código síncrono culmina con la mejora sintáctica async/await en ECMASCript 2017:

```javascript
async function foo() {
    try {
        let resultado = await hazAlgo();
        let nuevoResultado = await hazAlgoMas(resultado);
        let resultadoFinal = await hazLaTerceraCosa(nuevoResultado);
        console.log(`Obteniendo el resultado final: ${resultadoFinal}`);
    } catch(error) {
        falloCallback(error);
    }
}
```

Una Promise puede ser creada desde cero usando su constructor. Esto debería ser sólo necesario para envolver viejas APIs.

```javascript
setTimeout(() => diAlgo("pasaron 10 segundos", 10000));
```

```javascript
const espera = (ms) => new Promise((resuelve) => setTimeout(resuelve, ms));
```

```javascript
espera(10000)
    .then(() => diAlgo("10 segundos"))
    .catch(falloCallback);
```

```javascript
Promise.all([func1(), func2(), func3()]).then(
    ([resultado1, resultado2, resultado3]) => {
        /** usa resultado1, resultado2 y resultado3 */
    }
)
```

```javascript
let resultado;
for (const f of [func1, func2, func3]) {
    resultado = await f(resultado);
}
```

## Sincronización

```javascript
Promise.resolve().then(() => console.log(2));
console.log(1); // 1, 2
```

```javascript
const espera2 = (ms) => Promise((resuelve) => setTimeout(resuelve, ms));
```

```javascript
espera2().then(() => console.log(4));
Promise.resuelve()
    .then(() => console.log(2))
    .then(() => console.log(3));
console.log(1) // 1, 2, 3, 4
```

## Anidamiento

```javascript
hacerAlgo()
    .then(function(resultado) {
        return hacerOtraCosa(resultado);
    })
    .then((nuevoResultado) => hacerUnaTerceraCosa(nuevoResultado))
    .then(() => hacerUnaCuartaCosa())
    .catch((error) => console.log(error));
```
