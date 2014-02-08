var Textbox = {
  surface: new createjs.Container(),

  WIDTH: 800,
  HEIGHT: 100,
  X: 0,
  Y: 500,

  titleTextBox: new createjs.Text('Title', '20px GameFont', '#00FF00'),
  bodyTextBox: new createjs.Text('Body', '16px GameFont', '#00FF00'),

  init: function() {
    this.surface.x = this.X;
    this.surface.y = this.Y;

    var background = new createjs.Shape();
    background.graphics.beginFill("black").drawRect(0, 0, this.WIDTH, this.HEIGHT);
    this.surface.addChild(background);

    this.titleTextBox.x = 15;
    this.titleTextBox.y = 10;
    this.surface.addChild(this.titleTextBox);

    this.bodyTextBox.x = 25;
    this.bodyTextBox.y = 40;
    this.bodyTextBox.lineWidth = this.WIDTH;
    this.surface.addChild(this.bodyTextBox);

    Game.canvas.addChild(this.surface);
  },

  setTitle: function(text) {
    this.titleTextBox.text = text;
  },

  setBody: function(text) {
    this.bodyTextBox.text = text;
  }
};
