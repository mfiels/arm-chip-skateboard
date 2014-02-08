var Activities = {
  surface: new createjs.Container(),

  WIDTH: 600,
  HEIGHT: 200,
  X: 0,
  Y: 350,

  init: function() {
    this.surface.x = this.X;
    this.surface.y = this.Y;

    var background = new createjs.Shape();
    background.graphics.beginFill("#0000FF").drawRect(0, 0, this.WIDTH, this.HEIGHT);
    this.surface.addChild(background);

    var icon = ButtonHelper.newButton(
        Game.data.images['Forgot'],
        'Forgot',
        Constants.ALL_ACTIONS.Forgot,
        22,
        22,
        handleHover,
        handleUnhover,
        handleClick
    );
    this.surface.addChild(icon);
    
    icon = ButtonHelper.newButton(
        Game.data.images['Forgot'],
        'Forgot',
        Constants.ALL_ACTIONS.Forgot,
        114,
        22,
        handleHover,
        handleUnhover,
        handleClick
    );
    this.surface.addChild(icon);

    var icon = ButtonHelper.newButton(
        Game.data.images['Forgot'],
        'Forgot',
        Constants.ALL_ACTIONS.Forgot,
        208,
        22,
        handleHover,
        handleUnhover,
        handleClick
    );
    this.surface.addChild(icon);
    
    function handleHover(event) {
      Textbox.setTitle(event.currentTarget.name);
      Textbox.setBody(event.currentTarget.eventID.description);
    }
    function handleUnhover(event) {
      Textbox.setTitle('');
      Textbox.setBody('');
    }
    function handleClick(event) {
      console.log('clicked' + event.currentTarget.eventID);
    }

    Game.canvas.addChild(this.surface);
  }
};