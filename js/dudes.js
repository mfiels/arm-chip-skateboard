var Dudes = {
  surface: new createjs.Container(),

  WIDTH: 200,
  HEIGHT: 200,
  X: 600,
  Y: 350,

  init: function() {
    this.surface.x = this.X;
    this.surface.y = this.Y;

    var background = new createjs.Shape();
    background.graphics.beginFill("#000000")
      .beginStroke('#00FF00')
      .drawRect(0, 0, this.WIDTH, this.HEIGHT);
    this.surface.addChild(background);

    //added high schoolers
    highschooler = ButtonHelper.newButton(
        Game.data.images['Highschooler'],
        'Highschooler',
        Constants.ALL_DUDES.Highschooler,
        10,
        10,
        handleHover,
        handleUnhover,
        handleClick
    );
    this.surface.addChild(highschooler);

    netCafeOwner = ButtonHelper.newButton(
        Game.data.images['NetCafeOwner'],
        'Net Cafe Owner',
        Constants.ALL_DUDES.NetCafeOwner,
        105,
        10,
        handleHover,
        handleUnhover,
        handleClick
    );

    apartmentOwner = ButtonHelper.newButton(
        Game.data.images['ApartmentOwner'],
        'Apartment Owner',
        Constants.ALL_DUDES.ApartmentOwner,
        10,
        105,
        handleHover,
        handleUnhover,
        handleClick
    );

    targetEmployee = ButtonHelper.newButton(
        Game.data.images['AppleGenius'],
        'Apple Genius',
        Constants.ALL_DUDES.AppleGenius,
        105,
        105,
        handleHover,
        handleUnhover,
        handleClick
    );

    this.surface.addChild(apartmentOwner);
    this.surface.addChild(highschooler);
    this.surface.addChild(netCafeOwner);
    this.surface.addChild(targetEmployee);

    Game.canvas.addChild(this.surface);
    
    function handleHover(event) {
      Textbox.setTitle(event.currentTarget.name);
      Textbox.setBody(event.currentTarget.eventID.description);
	  Resources.modifyGhostResource(event.currentTarget.eventID.resourceGain);
    }
    function handleUnhover(event) {
      Textbox.setTitle('');
      Textbox.setBody('');
	  Resources.modifyGhostResource(0);
    }
    function handleClick(event) {
      console.log('clicked' + event.currentTarget.eventID);
      Game.addResources(event.currentTarget.eventID.resourceGain);
    }
  },

  purchaseDude: function(dudeType) {
    console.log("purchaseDude");
  },
};
