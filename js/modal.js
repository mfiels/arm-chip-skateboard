var Modal = {
  underlay: new createjs.Container(),
  surface: new createjs.Container(),
  content: new createjs.Container(),
  title: new createjs.Text('Title', '20px GameFont', '#00FF00'),
  okayButton: new createjs.Container(),

  WIDTH: 600,
  HEIGHT: 400,
  X: 100,
  Y: 100,

  CONTENT_PADDING_HORIZONTAL: 10,
  CONTENT_PADDING_VERTICAL: 40,

  init: function() {
    this.surface.x = this.X;
    this.surface.y = this.Y;

    var background = new createjs.Shape();
    background.graphics
      .beginFill('#404040')
      .drawRect(0, 0, Constants.CANVAS_WIDTH, Constants.CANVAS_HEIGHT);
    background.alpha = 0.95;
    this.underlay.addChild(background);

    background = new createjs.Shape();
    background.graphics
      .beginStroke("#00FF00")
      .beginFill('#000000')
      .drawRect(0, 0, this.WIDTH, this.HEIGHT);
    this.surface.addChild(background);

    this.title.textAlign = 'center';
    this.title.x = this.WIDTH / 2;
    this.title.y = 30;
    this.surface.addChild(this.title);

    var OKAY_BUTTON_WIDTH = 150;

    var okayButton = new createjs.Container();
    var okayButtonBackground = new createjs.Shape();
    okayButtonBackground.graphics
      .beginFill('#000000')
      .beginStroke('#00FF00')
      .drawRect(0, 0, OKAY_BUTTON_WIDTH, 30);
    var okayButtonText = new createjs.Text('OK', '20px GameFont', '#00FF00');
    okayButtonText.textAlign = 'center';
    okayButtonText.x = OKAY_BUTTON_WIDTH / 2.0;
    okayButtonText.y = 3;
    this.okayButton.x = this.WIDTH / 2 - OKAY_BUTTON_WIDTH / 2;
    this.okayButton.y = this.HEIGHT - 80;
    this.okayButton.addChild(okayButtonBackground);
    this.okayButton.addChild(okayButtonText);
    new createjs.ButtonHelper(this.okayButton);
    this.surface.addChild(this.okayButton);

    this.content.x = this.CONTENT_PADDING_HORIZONTAL;
    this.content.y = this.CONTENT_PADDING_VERTICAL;
    this.surface.addChild(this.content);

    // Modal.show('Welcome!', Content.withText(Constants.INTRO_STRING), function() {
    //   Modal.hide();
    //   Modal.showForgotMethod();
    // });
  },

  hide: function() {
    Map.surface.mouseEnabled = true;
    Resources.surface.mouseEnabled = true;
    Activities.surface.mouseEnabled = true;
    Dudes.surface.mouseEnabled = true;
    Textbox.surface.mouseEnabled = true;

    Game.canvas.removeChild(this.underlay);
    Game.canvas.removeChild(this.surface);
  },

  show: function(title, content, onOkayClicked) {
    this.setTitle(title);
    this.setContent(content);
    this.okayButton.removeAllEventListeners();
    this.okayButton.addEventListener('click', onOkayClicked);

    Map.surface.mouseEnabled = false;
    Resources.surface.mouseEnabled = false;
    Activities.surface.mouseEnabled = false;
    Dudes.surface.mouseEnabled = false;
    Textbox.surface.mouseEnabled = false;

    Game.canvas.addChild(this.underlay);
    Game.canvas.addChild(this.surface);
  },

  setTitle: function(text) {
    this.title.text = text;
  },

  setContent: function(content) {
    this.content.removeAllChildren();
    this.content.addChild(content.surface);
  },

  showForgotMethod: function() {
    Modal.show('Method 1: Forgetfulness', new Content(Content.FORGOT), function() {
      Modal.hide();
    });
  },

  showSpoofMethod: function() {
    Modal.show('Method 2: Spoofing', new Content(Content.SPOOF), function() {
      Modal.hide();
    });
  },

  showKeyLoggerMethod: function() {
    Modal.show('Method 3: Keylogger', new Content(Content.KEY_LOGGER), function() {
      Modal.hide();
    });
  },

  showWifiMethod: function() {
    Modal.show('Method 4: Compromised Wifi', new Content(Content.WIFI), function() {
      Modal.hide();
    });
  },

  showScamMethod: function() {
    Modal.show('Method 5: Scams', new Content(Content.SCAM), function() {
      Modal.hide();
    });
  }
};

var Content = function(render) {
  this.surface = new createjs.Container();
  this.surface.x = Content.X;
  this.surface.y = Content.Y;
  render(this.surface);
};

Content.WIDTH = Modal.WIDTH - 4 * Modal.CONTENT_PADDING_HORIZONTAL;
Content.HEIGHT = Modal.HEIGHT - 4 * Modal.CONTENT_PADDING_VERTICAL;
Content.X = Modal.CONTENT_PADDING_HORIZONTAL;
Content.Y = Modal.CONTENT_PADDING_VERTICAL;

Content.RESULTS = function(surface) {
  var background = new createjs.Shape();
  background.graphics
    .beginFill('#00FF00')
    .drawRect(0, 0, Content.WIDTH, Content.HEIGHT);
  surface.addChild(background);
  // Render stuff for the results screen here...
};

Content.FORGOT = function(surface) {
  var signOutImage = new createjs.Bitmap(Game.data.images['ForgotSignOut']);
  signOutImage.x = Content.WIDTH / 2.0 - Game.data.images['ForgotSignOut'].width / 2.0 - 60;
  signOutImage.y = 60;
  surface.addChild(signOutImage);

  var staySignedIn = new createjs.Bitmap(Game.data.images['ForgotStaySignedIn']);
  staySignedIn.x = Content.WIDTH / 2.0 - Game.data.images['ForgotStaySignedIn'].width / 2.0 + 60;
  staySignedIn.y = 64;
  surface.addChild(staySignedIn);

  var dontSaveImage = new createjs.Bitmap(Game.data.images['ForgotDontSave']);
  dontSaveImage.x = Content.WIDTH / 2.0 - Game.data.images['ForgotDontSave'].width / 2.0;
  dontSaveImage.y = 180;
  surface.addChild(dontSaveImage);

  var text = new createjs.Text('These people often forget to sign out of their accounts when they are finished...', '16px GameFont', '#00FF00');
  text.lineWidth = Content.WIDTH;
  text.lineHeight = 30;
  text.textAlign = 'center';
  text.x = Content.WIDTH / 2.0;
  surface.addChild(text);

  text = new createjs.Text('And even worse, they save their passwords on a public computer!', '16px GameFont', '#00FF00');
  text.lineWidth = Content.WIDTH;
  text.lineHeight = 30;
  text.textAlign = 'center';
  text.x = Content.WIDTH / 2.0;
  text.y = 120;
  surface.addChild(text);
};

Content.SPOOF = function(surface) {
  var spoofImage = new createjs.Bitmap(Game.data.images['SpoofBadUrl']);
  spoofImage.x = Content.WIDTH / 2.0 - Game.data.images['SpoofBadUrl'].width / 2.0;
  spoofImage.y = 60;
  surface.addChild(spoofImage);

  var text = new createjs.Text('Let\'s try to get even more user data, by leaving a browser window open with a spoofed URL...', '16px GameFont', '#00FF00');
  text.lineWidth = Content.WIDTH;
  text.lineHeight = 30;
  text.textAlign = 'center';
  text.x = Content.WIDTH / 2.0;
  surface.addChild(text);

  text = new createjs.Text('These users don\'t know any better and when they \'log in\' on this spoofed page their passwords get sent directly to us!', '16px GameFont', '#00FF00');
  text.lineWidth = Content.WIDTH;
  text.lineHeight = 30;
  text.textAlign = 'center';
  text.x = Content.WIDTH / 2.0;
  text.y = 120;
  surface.addChild(text);
};

Content.KEY_LOGGER = function(surface) {
  var keyLogImage = new createjs.Bitmap(Game.data.images['KeyLoggingKeyboard']);
  keyLogImage.x = Content.WIDTH / 2.0 - Game.data.images['KeyLoggingKeyboard'].width / 2.0;
  keyLogImage.y = 60;
  surface.addChild(keyLogImage);

  var text = new createjs.Text('By installing keyloggers on computers we can target even the more careful users...', '16px GameFont', '#00FF00');
  text.lineWidth = Content.WIDTH;
  text.lineHeight = 30;
  text.textAlign = 'center';
  text.x = Content.WIDTH / 2.0;
  surface.addChild(text);

  text = new createjs.Text('Every keystroke is recorded, so anything they log in to will also be available to us!', '16px GameFont', '#00FF00');
  text.lineWidth = Content.WIDTH;
  text.lineHeight = 30;
  text.textAlign = 'center';
  text.x = Content.WIDTH / 2.0;
  text.y = 170;
  surface.addChild(text);
};

Content.WIFI = function(surface) {
  var wifiImage = new createjs.Bitmap(Game.data.images['BadWifi']);
  wifiImage.x = Content.WIDTH / 2.0 - Game.data.images['BadWifi'].width / 2.0 + 80;
  wifiImage.y = 65;
  surface.addChild(wifiImage);

  var ssidImage = new createjs.Bitmap(Game.data.images['BadSsid']);
  ssidImage.x = Content.WIDTH / 2.0 - Game.data.images['BadSsid'].width / 2.0 - 80;
  ssidImage.y = 70;
  surface.addChild(ssidImage);

  var text = new createjs.Text('People tend to be willing to connect to free and open public wifi, let\'s exploit this...', '16px GameFont', '#00FF00');
  text.lineWidth = Content.WIDTH;
  text.lineHeight = 30;
  text.textAlign = 'center';
  text.x = Content.WIDTH / 2.0;
  surface.addChild(text);

  text = new createjs.Text('By planting an \'innocent\' open wireless network in public we can record connected web traffic!', '16px GameFont', '#00FF00');
  text.lineWidth = Content.WIDTH;
  text.lineHeight = 30;
  text.textAlign = 'center';
  text.x = Content.WIDTH / 2.0;
  text.y = 150;
  surface.addChild(text);
};

Content.SCAM = function(surface) {
  var scamImage = new createjs.Bitmap(Game.data.images['EmployeeScam']);
  scamImage.x = Content.WIDTH / 2.0 - Game.data.images['BadWifi'].width / 2.0;
  scamImage.y = 75;
  surface.addChild(scamImage);

  var text = new createjs.Text('Many customers don\'t think twice before entering their passwords on store computers when a \'trained professional\' instructs them to...', '16px GameFont', '#00FF00');
  text.lineWidth = Content.WIDTH;
  text.lineHeight = 30;
  text.textAlign = 'center';
  text.x = Content.WIDTH / 2.0;
  text.y = -20;
  surface.addChild(text);

  text = new createjs.Text('Let\'s dress some attackers up in company colors and send them out on the front line to harvest customer information!', '16px GameFont', '#00FF00');
  text.lineWidth = Content.WIDTH;
  text.lineHeight = 30;
  text.textAlign = 'center';
  text.x = Content.WIDTH / 2.0;
  text.y = 150;
  surface.addChild(text);
};

Content.withText = function(displayText) {
  return new Content(
    function(surface) {
      var text = new createjs.Text(displayText, '16px GameFont', '#00FF00');
      text.lineWidth = Content.WIDTH;
      text.lineHeight = 30;
      text.textAlign = 'center';
      text.x = Content.WIDTH / 2.0;
      text.y = 1 * Content.HEIGHT / 3.0  - text.getMeasuredHeight() / 2.0;
      surface.addChild(text);
    }
  );
};
