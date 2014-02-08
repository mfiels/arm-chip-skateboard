/**
 * Game model stuff goes here
 **/
var Game = {
  canvas: {},
  data: {},

  init: function(){
    this.canvas = new createjs.Stage('canvas');
    createjs.Ticker.addEventListener('tick', this.canvas);
    this.data = new Data();
  },
};

var Data = function(){
  this.money= Constants.INITIAL_MONEY;
  this.resources= Constants.INITIAL_RESOURCES;
  this.days= 0;
  this.locations= Constants.INITIAL_LOCATIONS;
  this.actions= Constants.INITIAL_ACTIONS;
  this.risk= 0;

  this.currentResources= 0;
  this.currentActions= [];
}