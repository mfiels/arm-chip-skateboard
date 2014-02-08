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
    createjs.Ticker.addEventListener('tick', this.canvas);
  },
  addAction: function(action, location){
	//search model for action and location pair
	var added=false;
	for(var i=0;i<this.data.currentActions.length;i++){
		if(this.data.currentActions[i].action===action && this.data.currentActions[i].location===location){
			this.data.currentActions[i].count++;
			added=true;
		}
	}
	if(!added)
		this.data.currentActions.push(new Pair(action,location));
	Resources.updateCurrentActions();
  },
  removeAction: function(index){
	if(this.data.currentActions.length>index){
		if(this.data.currentActions[index].count>1)
			this.data.currentActions[index].count--;
		else
			this.data.currentActions.splice(index,1);
	}
	else return;
	Resources.updateCurrentActions();
  },
};

var Pair = function(initialAction,initialLocation){
	this.action = initialAction;
	this.location= initialLocation;
	this.count=1;
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