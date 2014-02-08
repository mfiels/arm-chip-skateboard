var Activities = {
  surface: new createjs.Container(),

  WIDTH: 600,
  HEIGHT: 150,
  X: 0,
  Y: 350,

  init: function() {
    this.surface.x = this.X;
    this.surface.y = this.Y;

    var background = new createjs.Shape();
    background.graphics.beginFill("#0000FF").drawRect(0, 0, this.WIDTH, this.HEIGHT);
    this.surface.addChild(background);

    Game.canvas.addChild(this.surface);
  }
};