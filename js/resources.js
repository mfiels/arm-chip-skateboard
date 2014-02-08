var Resources = {
  surface: new createjs.Container(),

  WIDTH: 200,
  HEIGHT: 500,
  X: 600,
  Y: 0,

  init: function() {
    this.surface.x = this.X;
    this.surface.y = this.Y;

    var background = new createjs.Shape();
    background.graphics.beginFill("#00FF00").drawRect(0, 0, this.WIDTH, this.HEIGHT);
    this.surface.addChild(background);

    Game.canvas.addChild(this.surface);
  }
};

Resources.init();
