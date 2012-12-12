require.config({
  paths: {
    'jquery': 'lib/jquery-1.7.1.min',
    'jquerymobile': 'lib/jquery.mobile-1.1.0-rc.1.min'
  },
  shim: { 
    'jquerymobile' : { 
      deps: ['jquery'],
      exports: 'jquerymobile'
    }
  }
});
require(['jquerymobile','director','movie'], function(jqm,director,movie) {
  $('body').attr("style", "visibility : visible");
  var alien = new movie();
  var scott = new director('Ridley Scott');
  scott.set('quotes',['Cast is everthing','Do what..','Bla, bla']);
  alien.set('director',scott);
  alien.get('director').speak();
  alien.get('director').randomquote();
  console.log('end....');
});

