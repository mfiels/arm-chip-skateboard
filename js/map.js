var Map = {
  surface: new createjs.Container(),

  WIDTH: 600,
  HEIGHT: 350,
  X: 0,
  Y: 0,

  init: function() {
    this.surface.x = this.X;
    this.surface.y = this.Y;

    var background = new createjs.Shape();
    background.graphics.beginFill("#FF0000").drawRect(0, 0, this.WIDTH, this.HEIGHT);
    this.surface.addChild(background);

    Game.canvas.addChild(this.surface);
  }
};

Map.init();
