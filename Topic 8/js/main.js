var worker = new Worker('js/task.js');
worker.addEventListener('message', function(e) {
  console.log('Worker said: ', e.data);
}, false);

worker.postMessage('Hello World'); // Send data to our worker.

var connection = new WebSocket('ws://echo.websocket.org/');

// When the connection is open, send some data to the server
connection.onopen = function () {
  connection.send('Testing web socket');
};

// Log errors
connection.onerror = function (error) {
  console.log('WebSocket Error ' + error);
};

// Log messages from the server
connection.onmessage = function (e) {
  console.log('Server: ' + e.data);
};
