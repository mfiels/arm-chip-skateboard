var Map = {
  surface: new createjs.Container(),

  WIDTH: 600,
  HEIGHT: 350,
  X: 0,
  Y: 0,
  WIN_WIDTH:120,
  WIN_HEIGHT:100,
  color:"#00ff00",
  boundedArea:{},
  hoverWindow: new createjs.Container(),
  currLocation:"",
  numActions:0,
  newLocationUnlocked: function(location){
	if(this.boundedArea[location]){
		this.boundedArea[location].lock.visible=false;
		this.boundedArea[location].area.visible=true;
	}
  },
  newActionUnlocked: function(action){
	var act = Constants.ALL_ACTIONS[action];
	function genHover(action){
		return function(event){
			Textbox.setTitle(action);
			Textbox.setBody("use description for action?");
			Resources.modifyGhostResource(-Constants.ALL_ACTIONS[action].resources);
		};
	}
	var handleUnhover = function(event){
		Textbox.setTitle("");
		Textbox.setBody("");
		Resources.modifyGhostResource(0);
	};
	function genClick(act){
		return function(){
			Game.addAction(act,Map.currLocation);
			
		};
	}
	var btn = ButtonHelper.newButtonSpecial(
		Game.data.images[action+"_sm"],
        action,
        1,
        10+(Math.floor(this.numActions/2))*35,
        15+(this.numActions%2)*35,
        genHover(action),
        handleUnhover,
        genClick(action));
	this.hoverWindow.addChild(btn);
	this.numActions++;
  },
  init: function() {
    this.surface.x = this.X;
    this.surface.y = this.Y;
    var background = new createjs.Bitmap(Game.data.images['map']);
	  this.surface.addChild(background);
	
	var hoveron=function(event){
		Map.hoverWindow.visible=true;
		Map.hoverWindow.x = event.currentTarget.locx;
		Map.hoverWindow.y = event.currentTarget.locy;
	}
	var hoverout =function(event){}
	var click = function (event){}
	var genHoverFunc = function(loc){
		return function(event){
			hoveron(event);
			Map.currLocation=loc;
		}
	}
	for(var key in Constants.ALL_LOCATIONS){
		var loc = Constants.ALL_LOCATIONS[key];
		var container = new createjs.Container();
		
		container.x=loc.mapx;
		container.y=loc.mapy;
		var boundShape = new createjs.Shape();
		var innerShape = new createjs.Shape();
		function setTextboxFunc(title,body){
			return function(){
				Textbox.setTitle(title);
				Textbox.setBody(body);
			};
		}
		this.boundedArea[key]={};
		if(Constants.INITIAL_LOCATIONS.indexOf(key)==-1){
			var lock =  ButtonHelper.newButton(
				Game.data.images["Lock"],
				'Scammer',
				1,
				-25,
				-25,
				setTextboxFunc(key, "Unlock "+Constants.ALL_LOCATIONS[key].unlock+" to use this location."),
				setTextboxFunc("",""),
				function(){}
			);
			this.boundedArea[key].lock = lock;
			container.addChild(lock);
			innerShape.visible=false;
		}
		

		innerShape.alpha=.01;
		innerShape.graphics.beginFill(this.color).drawCircle(0,0,loc.mapr);
		//boundShape.graphics.beginStroke(this.color).setStrokeStyle(4).drawCircle(0,0,loc.mapr);
		ButtonHelper.newButtonObj(innerShape,key,genHoverFunc(key),hoverout,click);
		innerShape.locx = loc.mapx;
		innerShape.locy = loc.mapy;
		this.boundedArea[key].area=innerShape;
		container.addChild(boundShape);
		container.addChild(innerShape);
		this.surface.addChild(container);
	}
    
	var box = new createjs.Shape();
	box.graphics.beginFill("#000000").beginStroke("#00ff00").drawRect(0,0,this.WIN_WIDTH,this.WIN_HEIGHT);
	ButtonHelper.newButtonObj(this.hoverWindow,"",function(){},function(evt){
		var pt=Map.hoverWindow.globalToLocal(evt.stageX,evt.stageY);
		if(pt.x>0 && pt.y>0 && pt.x<Map.WIN_WIDTH && pt.y < Map.WIN_HEIGHT);
		else
			Map.hoverWindow.visible=false;
	},click);
	this.hoverWindow.visible=false;
	
	//add action buttons
	
	
	this.hoverWindow.addChild(box);
	this.surface.addChild(this.hoverWindow);
    var icon = new createjs.Bitmap(Game.data.images['Library']);
    icon.x = 200;
    icon.y = 200;
    this.surface.addChild(icon);
    Game.canvas.addChild(this.surface);
  }
};
