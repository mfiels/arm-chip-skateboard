/**
 * Game model stuff goes here
 **/
var Game = {
  money: Constants.INITIAL_MONEY,
  resources: Constants.INITIAL_RESOURCES
  canvas: {}

  init: function(){
    this.canvas = new createjs.Stage('canvas');
  }
};
