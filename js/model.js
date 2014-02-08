/**
 * Game model stuff goes here
 **/
var Game = {
  canvas: {},
  data: {},

  init: function(){
    this.canvas = new createjs.Stage('canvas');
    this.canvas.enableMouseOver(10);
    this.data = new Data();
    Loader.init();
  },

  start: function(){
    Map.init();
    Activities.init();
    Textbox.init();
    Resources.init();
    Dudes.init();
    Modal.init();
    createjs.Ticker.addEventListener('tick', this.canvas);
  },
  addAction: function(action, location){
	this.data.currentActions.push(new Pair(action,location));
	Resources.updateCurrentActions();
  }

};

var Pair = function(initialAction,initialLocation){
	this.action = initialAction;
	this.location= initialLocation;
}


var Data = function(){
  this.money= Constants.INITIAL_MONEY;
  this.resources= Constants.INITIAL_RESOURCES;
  this.days= 0;
  this.locations= Constants.INITIAL_LOCATIONS;
  this.actions= Constants.INITIAL_ACTIONS;
  this.risk= 0;
  this.images= {};

  this.currentResources= 0;
  this.currentActions= [];
}

var ButtonHelper = {
  newButton : function(img, name, obj, x, y, overFunc, outFunc, clickFunc) {
    var newButton = new createjs.Bitmap(img);
    newButton.name = name;
    newButton.eventID = obj;
    newButton.x = x;
    newButton.y = y;
    newButton.addEventListener("mouseover", overFunc);
    newButton.addEventListener("mouseout", outFunc);
    newButton.addEventListener("click", clickFunc);
    return newButton;
  }
}
