var Dudes = {
  surface: new createjs.Container(),

  WIDTH: 200,
  HEIGHT: 150,
  X: 600,
  Y: 350,

  init: function() {
    this.surface.x = this.X;
    this.surface.y = this.Y;

    var background = new createjs.Shape();
    background.graphics.beginFill("#FFFF00").drawRect(0, 0, this.WIDTH, this.HEIGHT);
    this.surface.addChild(background);

    //added high schoolers
    var highschooler = new createjs.Bitmap(Game.data.images['Highschooler']);
    highschooler.x = 10;
    highschooler.y = 10;
    this.surface.addChild(highschooler);

    Game.canvas.addChild(this.surface);


    var helper = new createjs.ButtonHelper(this.surface);
    this.surface.addEventListener("click", handleClick);
    
    function handleClick(event) {
       console.log("Button Clicked");
    }
  },

  purchaseDude: function(dudeType) {
    console.log("purchaseDude");
  },
};
