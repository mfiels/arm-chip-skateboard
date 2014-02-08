(function() {
  $(document).keypress(function(e) {
    switch (e.keyCode) {
      case 122:
        Modal.showGameOver('money');
        break;
      case 120:
        Modal.showGameOver('time');
        break;
      case 99:
        Modal.showGameOver('awareness');
        break;
      case 109:
        Game.data.money += 100000;
        break;
      default: 
        break;
    }
  });
})();
