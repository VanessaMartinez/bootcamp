define( ['jquerymobile'],function () {
  	  	
		//var name = '';
		//var quotes = [];
 		 
		// constructor
   		 var director = function (name) {this.name = name;};

    		// prototype
    		director.prototype = {
    		    constructor: director,
		    set : function(attr,value){this[attr]=value;},
		    get : function(attr){return this[attr];},
		    speak : function(){
				/*var something = this.get('name')+' says: ';quotes=this.get('quotes');
				for(key in quotes) something = something + quotes[key]+', ';
				something = something + ' ...';
				alert(something);*/
			    	

				quotes=this.get('quotes');
							
				$("#dialogheader").html('<h1>'+this.get('name')+' says: </h1>');
				
				for(key2 in quotes) $("#quotes").append('<p>' + quotes[key2] + '</p>');
				
											    
			},
 		    randomquote : function(){ 
				quotes=this.get('quotes');
				var randomnumber=Math.floor(Math.random()*quotes.length);
				//var something = this.get('name')+' says: '+quotes[randomnumber]+'...';
				//alert(something);
			    	
				$("#d2dialogheader").html('<h1>'+this.get('name')+' says: </h1>');
				
				$("#d2quotes").html('<p>' + quotes[randomnumber] + '</p>');
				
										    
		     }
			
    		};

    		// return module
   		 return director;
	}
);