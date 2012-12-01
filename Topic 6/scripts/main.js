require.config({
    paths: {
        'jquery': 'lib/jquery-1.7.1.min',
        'jquerymobile': 'lib/jquery.mobile-1.1.0-rc.1.min',
	'underscore': 'lib/underscore',
	'backbone' : 'lib/backbone'
    },

    shim: { 

        'jquerymobile' : { 
            deps: ['jquery'],
            exports: 'jquerymobile'
        },
	'underscore' : { exports : '_'},
	
	'backbone' : {
	    deps: ['underscore','jquery'],
	    exports: 'backbone'

	}
    }

});

require(['backbone','jquerymobile'], function(backbone,jqm) {
  
	//$('body').attr("style", "visibility : visible");
	   	
        /*var Todo = Backbone.Model.extend({
		// Default attributes for the todo
		defaults: {
			title: '',
			completed: false
		}
	});
	var firstTodo = new Todo();

	console.log("Todo s default title: " + firstTodo.get('title')); // ""
	console.log("Todo s default status: " + firstTodo.get('completed')); // false
	firstTodo.set('title', 'Enjoy reading the book');
	console.log('Title changed: ' + firstTodo.get('title'));
	//new todo instantiated with todo specific data
	var secondTodo = new Todo({ title: 'Try this code in chrome console'});
	console.log("Second todo title: " + secondTodo.get('title'));
	console.log("Second todo status: " + secondTodo.get('completed'));*/

	







	console.log('termino el main....');
});

