console.log('test1.js started')

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

  // document.getElementsByTagName( "head" )[0].appendChild( script );
}

loadScript('test1a.js', function () {

});

function doSomething1() {
  console.log('doSomething1 function')
}

doSomething1();

