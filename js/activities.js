var Activities = {
  surface: new createjs.Container(),

  WIDTH: 600,
  HEIGHT: 200,
  X: 0,
  Y: 350,

  moneyCounter: new createjs.Text('$', '16px GameFont', '#00FF00'),

  init: function() {
    this.surface.x = this.X;
    this.surface.y = this.Y;

    var background = new createjs.Shape();
    background.graphics
      .beginFill("#000000")
      .beginStroke('#00FF00')
      .drawRect(0, 0, this.WIDTH, this.HEIGHT);
    this.surface.addChild(background);

    this.moneyCounter.x=20;
    this.moneyCounter.y=6;
    this.surface.addChild(this.moneyCounter);
    Game.addMoney(0);

    var icon = ButtonHelper.newButton(
        Game.data.images['Forgot'],
        'Forgot',
        Constants.ALL_ACTIONS.Forgot,
        22,
        28,
        handleHover,
        handleUnhover,
        handleClick
    );
    this.surface.addChild(icon);
    
    icon = ButtonHelper.newButton(
        Game.data.images['SpoofWebsite'],
        'Spoof Website',
        Constants.ALL_ACTIONS.SpoofWebsite,
        114,
        28,
        handleHover,
        handleUnhover,
        handleClick
    );
    this.surface.addChild(icon);
    
    function handleHover(event) {
      Textbox.setTitle(event.currentTarget.name);
      Textbox.setBody(event.currentTarget.eventID.description);
      if (-1==$.inArray(event.currentTarget.name.replace(/ /g,''),Game.data.actions)){
        Game.tempMoney(event.currentTarget.eventID.cost);
      }
    }
    function handleUnhover(event) {
      Textbox.setTitle('');
      Textbox.setBody('');
      Game.addMoney(0);
    }
    function handleClick(event) {
      if (-1==$.inArray(event.currentTarget.name.replace(/ /g,''),Game.data.actions)){
        Game.data.actions.push(event.currentTarget.name.replace(/ /g,''));
        Game.addMoney(-event.currentTarget.eventID.cost);
      } 
      console.log('clicked' + event.currentTarget.eventID);
    }

    Game.canvas.addChild(this.surface);
  }
};
