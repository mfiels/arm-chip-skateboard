var Loader = {
  queue: new createjs.LoadQueue(true),
  init: function(){
    var q = this.queue;
    q.on("fileload", this.handleFileLoad, this);
    q.on("complete", this.handleComplete, this);
    $.each(Constants.ALL_ACTIONS, function(key,val){
      q.loadFile({id: key, src: "images/"+val.image});
    });
    $.each(Constants.ALL_LOCATIONS, function(key,val){
      q.loadFile({id: key, src: "images/"+val.image});
    });
    q.load();

  },
  handleFileLoad: function(event){
    var item = event.item;
    Game.data.images[item.id] = event.result;
  },
  handleComplete: function(){
    Game.start();
  },
}