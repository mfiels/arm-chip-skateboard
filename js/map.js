var Map = {
  surface: new createjs.Container(),

  WIDTH: 600,
  HEIGHT: 350,
  X: 0,
  Y: 0,
  WIN_WIDTH:300,
  WIN_HEIGHT:100,
  color:"#00ff00",
  boundedArea:{},
  hoverWindow: new createjs.Container(),
  currLocation:"",
  numActions:0,
  newActionUnlocked: function(action){
	var act = Constants.ALL_ACTIONS[action];
	function genHover(action){
		return function(event){
			Textbox.setTitle(action);
			Textbox.setBody("use description for action?");
			if(Constants.ALL_ACTIONS[action].resources<=Game.data.resources)
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
		Game.data.images['Highschooler'],
        'Highschooler',
        1,
        10+this.numActions*80,
        15,
        genHover(action),
        handleUnhover,
        genClick(action));
	this.hoverWindow.addChild(btn);
	this.numActions++;
  },
  init: function() {
    this.surface.x = this.X;
    this.surface.y = this.Y;
	var background = new createjs.Shape();
    background.graphics.beginFill("#FF0000").drawRect(0, 0, this.WIDTH, this.HEIGHT);
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
		innerShape.alpha=.01;
		innerShape.graphics.beginFill(this.color).drawRect(0,0,loc.mapw,loc.maph);
		boundShape.graphics.beginStroke(this.color).setStrokeStyle(4).drawRect(0,0,loc.mapw,loc.maph);
		ButtonHelper.newButtonObj(innerShape,key,genHoverFunc(key),hoverout,click);
		innerShape.locx = loc.mapx;
		innerShape.locy = loc.mapy;
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
