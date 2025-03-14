"use strict";

// Para experimentar con el manejo de errores, los valores de "threshold"
// causan errores aleatoriamente
const THRESHOLD_A = 8; // puede usar cero 0 para garantizar el error

function tetheredGetNumber(resolve, reject) {
  try {
    const timeout = 500;
    
    setTimeout(function () {
      const randomInt = Date.now();
      const value = randomInt % 10;

      try {
        if (value >= THRESHOLD_A) {
          throw new Error(`Demasiado grande: ${value}`);
        }
      } catch (msg) {
        reject(`Error en el  callback ${msg}`);
      }

      resolve(value);

      return;
    }, timeout);

    // Para experimentar con un error en la configuración,
    // descomente el siguiente 'throw'.
    // throw new Error("Mala configuración");
  } catch (err) {
    reject(`Error durante la configuración: ${err}`);
  }
  
  return;
}

function determineParity(value) {
  const isOdd = value % 2 ? true : false;
  const parityInfo = { theNumber: value, isOdd: isOdd };
  
  return parityInfo;
}

function troubleWithGetNumber(reason) {
  console.error(`Problemas para obtener el número: ${reason}`);

  throw -999; // debe "lanzar" algo, para mantener el estado de error en la cadena
}

function promiseGetWord(parityInfo) {
  // La función "tetheredGetWord()" obtiene "parityInfo" como variable de cierre.
  const tetheredGetWord = function (resolve, reject) {
    const theNumber = parityInfo.theNumber;
    const threshold_B = THRESHOLD_A - 1;

    if (theNumber >= threshold_B) {
      reject(`Todavía demasiado grande: ${theNumber}`);
    } else {
      // "wordEvenOdd" no era propiedad de "parityInfo"
      parityInfo.wordEvenOdd = parityInfo.isOdd ? "impar" : "par";

      resolve(parityInfo);
    }

    return;
  };

  return new Promise(tetheredGetWord);
}

new Promise(tetheredGetNumber)
  .then(determineParity, troubleWithGetNumber)
  .then(promiseGetWord)
  .then((info) => {
    console.log("Got: ", info.theNumber, " , ", info.wordEvenOdd);
    return info;
  })
  .catch((reason) => {
    if (reason === -999) {
      console.error("Había manejado previamente el error");
    } else {
      console.error(`Problema con promiseGetWord(): ${reason}`);
    }
  })
  .finally((info) => console.log("Todo listo"));
