var Modal = {
  underlay: new createjs.Container(),
  surface: new createjs.Container(),
  content: new createjs.Container(),
  title: new createjs.Text('Title', '20px GameFont', 'white'),

  WIDTH: 600,
  HEIGHT: 400,
  X: 100,
  Y: 100,

  CONTENT_PADDING_HORIZONTAL: 10,
  CONTENT_PADDING_VERTICAL: 30,

  init: function() {
    this.surface.x = this.X;
    this.surface.y = this.Y;

    var background = new createjs.Shape();
    background.graphics
      .beginFill('#404040')
      .drawRect(0, 0, Constants.CANVAS_WIDTH, Constants.CANVAS_HEIGHT);
    background.alpha = 0.95;
    this.underlay.addChild(background);

    background = new createjs.Shape();
    background.graphics
      .beginFill('#FF0000')
      .drawRect(0, 0, this.WIDTH, this.HEIGHT);
    this.surface.addChild(background);

    this.title.textAlign = 'center';
    this.title.x = this.WIDTH / 2;
    this.surface.addChild(this.title);

    var closeButton = new createjs.Bitmap(Game.data.images['ModalClose']);
    this.surface.addChild(closeButton);
    closeButton.x = this.WIDTH - Game.data.images['ModalClose'].width;
    closeButton.addEventListener('click', function() {
      Modal.hide();
    });

    this.content.x = this.CONTENT_PADDING_HORIZONTAL;
    this.content.y = this.CONTENT_PADDING_VERTICAL;
    this.surface.addChild(this.content);
  },

  hide: function() {
    Game.canvas.removeChild(this.underlay);
    Game.canvas.removeChild(this.surface);
  },

  show: function() {
    Game.canvas.addChild(this.underlay);
    Game.canvas.addChild(this.surface);
  },

  setTitle: function(text) {
    this.title.text = text;
  },

  setContent: function(displayObject) {
    this.content.removeAllChildren();
    this.content.addChild(displayObject);
  }
};
