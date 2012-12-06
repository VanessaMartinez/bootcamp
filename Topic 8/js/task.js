setInterval(function(){self.postMessage('worker s message');},60000);

/*self.addEventListener('message', function(e) {
  self.postMessage(e.data);
}, false);*/