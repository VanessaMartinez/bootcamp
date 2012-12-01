define( ['director'],function (director) {
  	  	
 		 // constructor
   		 var movie = function () {};

    		// prototype
    		movie.prototype = {
    		    constructor: movie,
		    set : function(attr,value){this[attr]=value;},
		    get : function(attr){return this[attr];},
		    play : function(){return 'Playing '+ this.get('title') + ' ...'},
		    stop : function(){return this.get('title')+' is stopped ...';}
    		};

    		// return module
   		 return movie;
	}
);