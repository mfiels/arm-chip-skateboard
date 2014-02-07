var Map = {
  surface: new createjs.Container(),
  init: function() {
    var background = new createjs.Shape();
    background.graphics.beginFill("#FF0000").drawRect(0, 0, 100, 100);
    this.surface.addChild(background);
  }
};

Map.init();
