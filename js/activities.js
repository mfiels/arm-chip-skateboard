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

    var icon = new createjs.Bitmap(Game.data.images['Library']);
    icon.name = 'Forgot';
    icon.eventID = Constants.ALL_ACTIONS.Forgot;
    icon.x = 10;
    icon.y = 20;
    icon.addEventListener("mouseover", handleHover);
    icon.addEventListener("mouseout", handleUnhover);
    icon.addEventListener("click", handleClick);
    this.surface.addChild(icon);

    icon = new createjs.Bitmap(Game.data.images['Library']);
    icon.name = 'Forgot';
    icon.eventID = Constants.ALL_ACTIONS.Forgot;
    icon.x = 40;
    icon.y = 20;
    icon.addEventListener("click", handleClick);
    this.surface.addChild(icon);

    icon = new createjs.Bitmap(Game.data.images['Library']);
    icon.name = 'Forgot';
    icon.eventID = Constants.ALL_ACTIONS.Forgot;
    icon.x = 70;
    icon.y = 20;
    icon.addEventListener("click", handleClick);
    this.surface.addChild(icon);
    
    function handleHover(event) {
      Textbox.setTitle(event.currentTarget.name);
      Textbox.setBody(event.currentTarget.eventID.description);
    }
    function handleUnhover(event) {
      Textbox.setTitle('');
      Textbox.setBody('');
      console.log('hovering over' + event.currentTarget.eventID);
    }
    function handleClick(event) {
      console.log(event.currentTarget.eventID);
    }

    Game.canvas.addChild(this.surface);
  }
};