console.log('ejemplo-avanzado.js')
"use strict";
let promiseCount = 0;

function testPromise() {
  let thisPromiseCount = ++promiseCount;
  let log = document.getElementById("log");
  // inicio
  log.insertAdjacentHTML("beforeend", thisPromiseCount + ") Inicio<br>");
  // Hacemos una nueva promesa: prometemos un recuneto numérico de esta promesa,
  // a partir de 1 (después de esperar 3 segundos)
  let p1 = new Promise((resolve, reject) => {
    // Se llama a la función ejectura con la capacidad de resolver
    // o rechazar la promesa.
    log.insertAdjacentHTML(
        "beforeend",
        thisPromiseCount + ") Promesa construida<br>",
    );
    // Esto es solo un ejemplo para crear asíncronismo.
    window.setTimeout(
      function() {
        // ¡Cumplimos la promesa!
        resolve(thisPromiseCount);
      }, 
      Math.random() * 2000 + 1000,
    );
  });


  // Definimos qué hacer cuando la promesa se resuelve con la llamada then()
  // y qué hacer cuando la rpomesa se rechaza con la llamda catch()
  p1.then(function(val) {
    // Mostrar el valor de cumplimiento
    log.insertAdjacentHTML("beforeend", val + ") Promesa completada<br>");
  }).catch((reason) => {
    // Mostrar el motivo del rechazo
    console.log(`Manejar la promesa rechazada (${reason}) aquí.`);
  });
  // fin
  log.insertAdjacentHTML(
    "beforeend",
    thisPromiseCount + ") Promesa creada<br>",
  );
}

if ("Promise" in window) {
  let btn = document.getElementById("make-promise");
  btn.addEventListener("click", testPromise);
} else {
  log = document.getElementById("log")
  log.textContent =
    "El ejemplo en vivo no está disponible porque su navegador no es compatible con la interfaz <code>Promise<code>.";
}