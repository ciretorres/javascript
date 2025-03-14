// https://web.dev/articles/promises?hl=es
// https://glitch.com/~promises-sync-example
console.log("promises.js")

// var img1 = document.querySelector('.img-1')

// // img1.addEventListener('load', function(){
// //     // woo yey image loaded
// // });
// function loaded() {
//     // woo yey image loaded
// }
// if(img1.complete) {
//     loaded();
// } else {
//     img1.addEventListener('load', loaded);
// }

// img1.addEventListener('error', function(){
//     // argh everything's broken
// });

// img1.callThisIfLoaderOrWhenLoaded(function() {
//     // loaded
// }).orIfFailedCallthis(function() {
//     // failed
// });

// // and...
// whenAllTheseHaveLoaded([img1, img2]).callThis(function() {
//     // all loaded
// }).orIfSomeFailedCallThis(function() {
//     // one or more failed
// });

// img1.ready()
//   .then(function() {
//     // loaded
//   }, function() {
//     // failed
//   });

// // and…
// Promise.all([img1.ready(), img2.ready()])
//   .then(function() {
//     // all loaded
//   }, function() {
//     // one or more failed
//   });

var promise = new Promise(function(resolve, reject) {
  // do a thing, a possibly async, then ...
  let everythingTurnedOutFine = true

  // if(/**everything turned out fine */) {
  if(everythingTurnedOutFine) {
    //resolve("Stuff worked!");
    resolve("Stuff worked!");
  } else {
    reject(Error("It broke"));
  }
});
console.log('promise,',promise);

promise
  .then((result) => {
    console.log(result); // "Stuff worked!"
  }, (err) => {
    console.log(err); // Error: "It broke"
  });

// XMLHttpRequest
function get(url) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    console.log('req,',req);
    req.open('GET', url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        // console.log(Error(req.statusText)
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
}

// get('story.json')
//   .then(function(response){
//     console.log("Success!", response);
//   }, function(error) {
//     console.error("Failed!", error);
//   });
get('story.json')
  .then(function(response){
    console.log("Success!", response);
  }).catch(function(error) {
    console.error("Failed!", error);
  });

// get('story.json')
//   .then(function(response){
//     return JSON.parse(response);
//   }).then(function(response) {
//     console.log("Yey JSON!", response);
//   });
get('story.json')
  .then(JSON.parse)
  .then(function(response) {
    console.log("Yey JSON!", response);
  });

function getJSON(url) {
  return get(url).then(JSON.parse).catch(function(err) {
    console.log("getJSON failed for", url, err);
    throw err;
  });
}

getJSON('story.json')
  .then(function(story) {
    return getJSON(story.chapterUrls[0]);
  })
  .then(function(chapter1) {
    console.log("Got chapter 1!", chapter1);
  });

var storyPromise;

function getChapter(i) {
  storyPromise = storyPromise || getJSON('story.json');

  return storyPromise.then(function(story) {
    return getJSON(story.chapterUrls[i]);
  });
}

// and using it is simple:
getChapter(0)
  .then(function(chapter) {
    console.log(chapter);
    return getChapter(1);
  })
  .then(function(chapter) {
    console.log(`Got chapter ${chapter.chapter}!`, chapter);
    // console.log(chapter)
  });

Promise.resolve(true).then(function() {
    return asyncThing2();
  }).then(function() {
    return asyncThing3();
  }).catch(function(err) {
    return asyncRecovery1();
  }).then(function() {
    return asyncThing4();
  }, function(err) {
    return asyncRecovery2();
  }).catch(function(err) {
    console.log("Don't worry about it");
  }).then(function() {
    console.log("All done!");
  });

var jsonPromise = new Promise(function(resolve, reject) {
  // JSON.parse throws an error if you feed it some
  // invalid JSON, so this implicitly rejects:
  resolve(JSON.parse("This ain't JSON"));
});

jsonPromise.then(function(data) {
  // This never happens:
  console.log("It worked!", data);
}).catch(function(err) {
  // Instead, this happens:
  console.log("It failed!", err);
})
  
get('/').then(JSON.parse).then(function() {
  // This never happens, '/' is an HTML page, not JSON
  // so JSON.parse throws
  console.log("It worked!", data);
}).catch(function(err) {
  // Instead, this happens:
  console.log("It failed!", err);
})

// Manejo de errores
var storyDiv = document.querySelector('.story');

function addHtmlToPage(content) {
  var div = document.createElement('div');
  div.innerHTML = content;
  storyDiv.appendChild(div)
}

function addTextToPage(content) {
  var p = document.createElement('p');
  p.textContent = content;
  storyDiv.appendChild(p);
}

getJSON('story.json').then(function(story) {
  return getJSON(story.chapterUrls[0]);
}).then(function(chapter1) {
  addHtmlToPage(chapter1.html);
}).catch(function() {
  addTextToPage("Failed to show chapter");
}).then(function() {
  document.querySelector('.spinner')
    .style.display = 'none';
})

// --
// var fakeSlowNetwork;

// function getSync(url) {
//   var startTime = Date.now();
//   var waitTime = 3000 * Math.random() * fakeSlowNetwork;

//   var req = new XMLHttpRequest();
//   req.open('get', url, false);
//   req.send();

//   while (waitTime > Date.now() - startTime);

//   if (req.status == 200) {
//     return req.response;
//   }
//   else {
//     throw Error(req.statusText || "Request failed");
//   }
// }

// function getJsonSync(url) {
//   return JSON.parse(getSync(url));
// }

try {
  var story = getJSONSync('story.json');
  var chapter1 = getJSONSync(story.chapterUrls[0]);
  addHtmlToPage(chapter1.html);
}
catch (e) {
  addTextToPage("Failed to show chapter");
}
document.querySelector('.spinner').style.display = 'none'

try {
  var story = getJSONSync('story.json');
  addHtmlToPage(story.heading);

  story.chapterUrls.forEach(function(chapterUrl) {
    var chapter = getJSONSync(chapterUrl);
    addHtmlToPage(chapter.html);
  });

  addTextToPage("All done");
}
catch (err) {
  addTextToPage("Argh, broken: " + err.message);
}
document.querySelector('.spinner').style.display = 'none'
