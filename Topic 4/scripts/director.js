define( ['jquerymobile'],function () {
  // constructor
  var director = function (name) {
    this.name = name;
  };
  // prototype
  director.prototype = {
    constructor: director,
    set : function(attr,value){
      this[attr]=value;
    },
    get : function(attr){
      return this[attr];
    },
    speak : function(){
      quotes=this.get('quotes');
      $("#dialogheader").html('<h1>'+this.get('name')+' says: </h1>');
      for(key2 in quotes){
        $("#quotes").append('<p>' + quotes[key2] + '</p>');
      },
    randomquote : function(){ 
      quotes=this.get('quotes');
      var randomnumber=Math.floor(Math.random()*quotes.length);
      $("#d2dialogheader").html('<h1>'+this.get('name')+' says: </h1>');
      $("#d2quotes").html('<p>' + quotes[randomnumber] + '</p>');
    }
  };
  // return module
  return director;
});