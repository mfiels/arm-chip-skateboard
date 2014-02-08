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

  addMoney: function(amount){
    Activities.moneyCounter.color='#00FF00'
    if (this.data.money + amount > 0) {
      this.data.money += amount;
      Activities.moneyCounter.text="$"+this.data.money;
      return true;
    }
    return false;
  },
  tempMoney: function(amount){
    if (this.data.money + amount < 0) {
      Activities.moneyCounter.color='#FF0000';
    }
    Activities.moneyCounter.text="$"+this.data.money+"  ->  $"+(this.data.money+amount);
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
  step: function(){
  
  },
  addResources: function(deltaResources) {
    this.data.resources += deltaResources;
	Resources.updateResource();
	Resources.modifyGhostResource(deltaResources);
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
  this.stepLogic=function(){
	
	};

  this.useResources = function(deltaResources) {
    if(this.resources - deltaResources >= 0) {
      this.resources -= deltaResources;
	  Resources.updateResource();
      return true;
    }
    else {
      return false;
    }
  };

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
    new createjs.ButtonHelper(newButton);
    return newButton;
  }
}
