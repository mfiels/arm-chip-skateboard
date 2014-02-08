var Textbox = {
  surface: new createjs.Container(),

  WIDTH: 800,
  HEIGHT: 100,
  X: 0,
  Y: 500,

  titleTextBox: new createjs.Text('Title', "20px GameFont", '#FF0000'),

  init: function() {
    this.surface.x = this.X;
    this.surface.y = this.Y;

    var background = new createjs.Shape();
    background.graphics.beginFill("#FF00FF").drawRect(0, 0, this.WIDTH, this.HEIGHT);
    this.surface.addChild(background);

    this.surface.addChild(this.titleTextBox);

    Game.canvas.addChild(this.surface);
  },

  setTitle: function(text) {
    this.titleTextBox.text = text;
  }
};
