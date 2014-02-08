var Resources = {
  surface: new createjs.Container(),

  WIDTH: 200,
  HEIGHT: 350,
  X: 600,
  Y: 0,
  ICONWIDTH:50,
  RESOURCEWIDTH:150,
  color:"#ff7700",
  textcolor:"#ff7700",
  resourceArrow: new createjs.Shape(),
  iconContainer: new createjs.Container(),
  
  updateResource: function(){
	this.resourceText.text = Game.data.resources.toString();
  },
  decrementResource: function(num){
	if(num==0){
		this.resourceArrow.visible=false;
		this.resourceText2.visible=false;
	}
	else{
		this.resourceArrow.visible=true;
		this.resourceText2.visible=true;
		this.resourceText2.text = (Game.data.resources-num).toString();
	}
  },
  
  updateCurrentActions: function(){
	this.iconContainer.removeAllChildren();
	function removeIndexCallback(index){
		return function(){
			Game.removeAction(index);
		};
	}
	for(var i=0;i<Game.data.currentActions.length;i++){
		var container = new createjs.Container();
		var gfx = new createjs.Shape();
		var action = Constants.ALL_ACTIONS[Game.data.currentActions[i].action];
		var location = Constants.ALL_LOCATIONS[Game.data.currentActions[i].location];
		gfx.graphics.beginFill(action.color).drawRect(0,0,this.ICONWIDTH,this.ICONWIDTH);
		gfx.graphics.beginFill(location.color).drawCircle(10, 10,8);
		gfx.x =5;
		gfx.y = 5+ (i*(this.ICONWIDTH+5));
		container.addChild(gfx);
		if(Game.data.currentActions[i].count>1){
			var text = new createjs.Text(Game.data.currentActions[i].count.toString(),"20px GameFont",this.textcolor);
			text.x=55;
			text.y=35;
			text.textAlign="right";
			container.addChild(text);
		}
		this.iconContainer.addChild(container);
		gfx.addEventListener("click",removeIndexCallback(i));
	}
  },
  
  
  init: function() {
    this.surface.x = this.X;
    this.surface.y = this.Y;
	//Load resource text and position
	this.resourceText= new createjs.Text("0","50px GameFont",this.color);
	this.resourceText.x = this.ICONWIDTH+this.RESOURCEWIDTH/2;
	this.resourceText.y = 20;
	this.resourceText.textAlign="center";
	
	//Load ghost resource text and position
	this.resourceText2= new createjs.Text("0","50px GameFont",this.color);
	this.resourceText2.x = this.ICONWIDTH+this.RESOURCEWIDTH/2;
	this.resourceText2.y = 160;
	this.resourceText2.textAlign="center";
	
	
	//Load resource arrow
	this.resourceArrow.graphics.beginFill(this.color).drawRect(25,0,10,60);
	this.resourceArrow.graphics.beginFill(this.color).moveTo(0,60).lineTo(60,60).lineTo(30,80);
	this.resourceArrow.x = this.ICONWIDTH+this.RESOURCEWIDTH/2 - 30;
	this.resourceArrow.y = 80;
	
	//load background
    var background = new createjs.Shape();
    background.graphics.beginFill("#00FF00").drawRect(0, 0, this.WIDTH, this.HEIGHT);
	this.surface.addChild(background);
	this.surface.addChild(this.resourceText);
	this.surface.addChild(this.resourceText2);
	this.surface.addChild(this.resourceArrow);
	this.surface.addChild(this.iconContainer);
	this.updateResource();
	this.decrementResource(0);
    Game.canvas.addChild(this.surface);
  },
};
