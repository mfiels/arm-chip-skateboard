var Resources = {
  surface: new createjs.Container(),

  WIDTH: 200,
  HEIGHT: 350,
  X: 600,
  Y: 0,
  color:"#ff7700",
  resourceArrow: new createjs.Shape(),
  
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
  
  init: function() {
    this.surface.x = this.X;
    this.surface.y = this.Y;
	//Load resource text and position
	this.resourceText= new createjs.Text("0","50px Arial",this.color);
	this.resourceText.x = this.WIDTH/2;
	this.resourceText.y = 20;
	this.resourceText.textAlign="center";
	
	//Load ghost resource text and position
	this.resourceText2= new createjs.Text("0","50px Arial",this.color);
	this.resourceText2.x = this.WIDTH/2;
	this.resourceText2.y = 160;
	this.resourceText2.textAlign="center";
	
	
	//Load resource arrow
	this.resourceArrow.graphics.beginFill(this.color).drawRect(25,0,10,60);
	this.resourceArrow.graphics.beginFill(this.color).moveTo(0,60).lineTo(60,60).lineTo(30,80);
	this.resourceArrow.x = this.WIDTH/2 - 30;
	this.resourceArrow.y = 80;
	
	//load background
    var background = new createjs.Shape();
    background.graphics.beginFill("#00FF00").drawRect(0, 0, this.WIDTH, this.HEIGHT);
	this.surface.addChild(background);
	this.surface.addChild(this.resourceText);
	this.surface.addChild(this.resourceText2);
	this.surface.addChild(this.resourceArrow);
	this.updateResource();
	this.decrementResource(0);
    Game.canvas.addChild(this.surface);
  },
};
