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
	for(var key in Constants.INITIAL_ACTIONS){
		Map.newActionUnlocked(Constants.INITIAL_ACTIONS[key]);
	}
  },

  addMoney: function(amount){
    Activities.moneyCounter.color='#00FF00'
    if (this.data.money + amount >= 0) {
      this.data.money += amount;
      Activities.moneyCounter.text="$"+this.data.money.toFixed(2);
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
	var act = Constants.ALL_ACTIONS[action];
	if(act.resources<=this.data.resources){
		this.data.resources-=act.resources;
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
		Resources.updateResource();
		if(this.data.resources-act.resources<0)
			Resources.modifyGhostResource(0);
		else
			Resources.modifyGhostResource(-act.resources);
	}
  },
  removeAction: function(index){
	if(this.data.currentActions.length>index){
		this.data.resources+=Constants.ALL_ACTIONS[this.data.currentActions[index].action].resources;
		if(this.data.currentActions[index].count>1)
			this.data.currentActions[index].count--;
		else
			this.data.currentActions.splice(index,1);
	}
	else return;
	Resources.updateResource();
	Resources.updateCurrentActions();
  },
  step: function(){
	this.data.stepLogic();
	Resources.updateResource();
	Resources.updateCurrentActions();
	Game.addMoney(0);
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
  this.actionUsage= {
    'Forgot': 0,
    'SpoofWebsite': 0,
    'Keylogger': 0,
    'Wifi': 0,
    'Scam': 0,
  };
  this.locationUsage= {
    'Library': 0,
    'Netcafe': 0,
    'Apartment': 0,
    'Computer Store': 0,
  };
  this.stepLogic=function() {
		for(var i=0;i<this.currentActions.length;i++){
			//
			var action = Constants.ALL_ACTIONS[this.currentActions[i].action];
			var location = Constants.ALL_LOCATIONS[this.currentActions[i].location];
			var count = this.currentActions[i].count;
			for(var j =0;j<count;j++) {
				this.resources+=action.resources;
        profit = location.reward - Game.data.locationUsage[Map.currLocation] / location.rewardDeath;
				this.money+=profit;
				action.risk+=.02;
				location.risk+=.02;
        this.actionUsage[action.parent]++;
        this.locationUsage[location.parent]++;
				if((action.risk*action.riskModifier+location.risk*location.riskModifier)*Math.random()>1){
					//UHOH
					Console.log("Gameover?");
					//break;
				}
			}
		}
		
		

		this.currentActions.length=0;
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
  },
  newButtonObj : function(obj, name, overFunc, outFunc, clickFunc) {
    var newButton = obj;
    newButton.name = name;
    newButton.addEventListener("mouseover", overFunc);
    newButton.addEventListener("mouseout", outFunc);
    newButton.addEventListener("click", clickFunc);
    new createjs.ButtonHelper(newButton);
    return newButton;
  },
  newButtonSpecial : function(img, name, obj, x, y, overFunc, outFunc, clickFunc) {
    var newButton = new createjs.Bitmap(img);
    newButton.name = name;
    newButton.eventID = obj;
    newButton.x = x;
    newButton.y = y;
    newButton.addEventListener("mouseover", overFunc,false);
    newButton.addEventListener("mouseout", outFunc,false);
    newButton.addEventListener("click", clickFunc);
    new createjs.ButtonHelper(newButton);
    return newButton;
  },
}
