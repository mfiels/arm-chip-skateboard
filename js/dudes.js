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

    Game.canvas.addChild(this.surface);


    var helper = new createjs.ButtonHelper(background, "out", "over", "down", false);
    this.surface.addEventListener("click", handleClick);
    function handleClick(event) {
       console.log("Button Clicked");
    }
  },

  purchaseDude: function(dudeType) {
    console.log("purchaseDude");
  },
};
