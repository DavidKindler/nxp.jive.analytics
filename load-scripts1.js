console.log('load-scripts.js started')

function loadScript(url, callback, location) {
  var scriptTag = document.createElement("script")
  scriptTag.type = "text/javascript";
  if (scriptTag.readyState) {  // only required for IE <9
    scriptTag.onreadystatechange = function () {
      if (scriptTag.readyState === "loaded" || scriptTag.readyState === "complete") {
        scriptTag.onreadystatechange = null;
        callback();
      }
    };
  } else {  //Others
    scriptTag.onload = function () {
      callback();
    };
  }

  scriptTag.src = url;
  scriptTag.async = false;

  var location = location || window.document.body;

  location.appendChild(scriptTag);

}


// loadScript('test1.js', function () {
//   loadScript('test2.js', function () {
//     loadScript('test3.js', function () {

//     });
//   });
// });


loadScript('test1.js', function () { });

loadScript('test2.js', function () { });

loadScript('test3.js', function () { });



console.log('load-scripts.js ended')