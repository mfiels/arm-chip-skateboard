var Activities = {
  surface: new createjs.Container(),

  WIDTH: 600,
  HEIGHT: 200,
  X: 0,
  Y: 350,

  moneyCounter: new createjs.Text('$', '22px GameFont', '#00FF00'),

  init: function() {
    this.surface.x = this.X;
    this.surface.y = this.Y;

    var background = new createjs.Shape();
    background.graphics
      .beginFill("#000000")
      .beginStroke('#00FF00')
      .drawRect(0, 0, this.WIDTH, this.HEIGHT);
    this.surface.addChild(background);

    this.moneyCounter.x=30;
    this.moneyCounter.y=18;
    this.surface.addChild(this.moneyCounter);
    Game.addMoney(0);

    var icon = ButtonHelper.newButton(
        Game.data.images['Forgot'],
        'Forgot',
        Constants.ALL_ACTIONS.Forgot,
        52,
        64,
        handleHover,
        handleUnhover,
        handleClick
    );
    this.surface.addChild(icon);
    
    icon = ButtonHelper.newButton(
        Game.data.images['SpoofLocked'],
        'Spoof Website',
        Constants.ALL_ACTIONS.SpoofWebsite,
        158,
        64,
        handleHover,
        handleUnhover,
        handleClick
    );
    this.surface.addChild(icon);

    icon = ButtonHelper.newButton(
        Game.data.images['KeyloggerLocked'],
        'Keylogger',
        Constants.ALL_ACTIONS.Keylogger,
        264,
        64,
        handleHover,
        handleUnhover,
        handleClick
    );
    this.surface.addChild(icon);

    icon = ButtonHelper.newButton(
        Game.data.images['WifiLocked'],
        'Wifi',
        Constants.ALL_ACTIONS.Wifi,
        370,
        64,
        handleHover,
        handleUnhover,
        handleClick
    );
    this.surface.addChild(icon);

    icon = ButtonHelper.newButton(
        Game.data.images['ScamLocked'],
        'Scam',
        Constants.ALL_ACTIONS.Scam,
        478,
        64,
        handleHover,
        handleUnhover,
        handleClick
    );
    this.surface.addChild(icon);
 
    function handleHover(event) {
      Textbox.setTitle(event.currentTarget.name);
      Textbox.setBody(event.currentTarget.eventID.description);
      if (-1==$.inArray(event.currentTarget.name.replace(/ /g,''),Game.data.actions)){
        Game.tempMoney(-event.currentTarget.eventID.cost);
      }
    }
    function handleUnhover(event) {
      Textbox.setTitle('');
      Textbox.setBody(Constants.DEFAULT_TEXTBOX_TEXT);
      Game.addMoney(0);
    }
    function handleClick(event) {
      if (-1==$.inArray(event.currentTarget.name.replace(/ /g,''),Game.data.actions)){
        enoughMoney = Game.addMoney(-event.currentTarget.eventID.cost);
        if (enoughMoney) {
          Game.data.actions.push(event.currentTarget.name.replace(/ /g,''));
          Map.newActionUnlocked(event.currentTarget.name.replace(/ /g,''));
		  event.currentTarget.image = Game.data.images[event.currentTarget.name.replace(/ /g,'')]
		  
        } else {
          Game.tempMoney(-event.currentTarget.eventID.cost);
        }
      }
      if (Modal[event.currentTarget.eventID.modalMethod]) {
        // deal with it
        Modal[event.currentTarget.eventID.modalMethod]();
      } else {
        console.log('need to implement a modal for this');
      }
    }

    Game.canvas.addChild(this.surface);
  }
};
