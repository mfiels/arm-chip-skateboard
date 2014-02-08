var Constants = {
  CANVAS_WIDTH: 800,    // NOTE: These need to be changed in index.html on the canvas tag too!
  CANVAS_HEIGHT: 650,    // NOTE: Same as above

  INITIAL_MONEY: 50000,
  INITIAL_RESOURCES: 100,

  INITIAL_LOCATIONS: [
    'Library',
  ],
  INITIAL_ACTIONS: [
    'Forgot',
  ],

  MAP_IMAGE: 'map.png',

  DEFAULT_TEXTBOX_TEXT: 'Welcome to Hackmaster 3000!',

  ALL_ACTIONS: {
    'Forgot': {
      parent: 'Forgot',
      risk: 0,
      riskDeath: 100,
	    riskModifier: 1,
      resources: 1,
      cost: 1,
      description: 'Someone forgot to log off!',
      image: 'forgot.png',
	    color: '#af0000',
      modalMethod: 'showForgotMethod',
    },
    'SpoofWebsite': {
      parent: 'SpoofWebsite',
      risk: 0,
      riskDeath: 200,
      resources: 2,
      cost: 2,
      description: 'Leave a fake website open to lure people into logging in.',
      image: 'spoof.png',
      color: '#af0000',
      modalMethod: 'showSpoofMethod',
    },
    'Keylogger': {
      parent: 'Keylogger',
      risk: 0,
      riskDeath: 300,
      resources: 3,
      cost: 10,
      description: 'Leave a fake website open to lure people into logging in.',
      image: 'keylogger.png',
      color: '#af0000',
      modalMethod: 'showKeyLoggerMethod',
    },
    'Wifi': {
      parent: 'Wifi',
      risk: 0,
      riskDeath: 400,
      resources: 6,
      cost: 20,
      description: 'Leave a fake website open to lure people into logging in.',
      image: 'wifi.png',
      color: '#af0000',
      modalMethod: 'showWifiMethod',
    },
    'Scam': {
      parent: 'Scam',
      risk: 0,
      riskDeath: 500,
      resources: 8,
      cost: 30,
      description: 'Leave a fake website open to lure people into logging in.',
      image: 'scam.png',
      color: '#af0000',
      modalMethod: 'showScamMethod',
    },
  },

  ALL_DUDES: {
    'Highschooler': {
      resourceGain: 1,
      cost: 100,
      lockDescription: 'Gain access to the local high school.\n\nThose poor kids...',
      description: 'Shady high school kid',
      image: 'highschooler.png',
    },
    'NetCafeOwner': {
      cost: 500,
      resourceGain: 5,
      lockDescription: 'Unlocks the local cafe.\n\nFree donuts and coffee 4Life!',
      description: 'Hates his customers',
      image: 'netcafe.png',
    },
    'ApartmentOwner': {
      cost: 2000,
      resourceGain: 10,
      lockDescription: 'Receive keys to the apartment.\n\nI will give you the keys to happiness....',
      description: 'Has acces to lots of things ;)',
      image: 'apartmentowner.png',
    },
    'Scammer': {
      cost: 5000,
      resourceGain: 20,
      lockDescription: 'Unlock access to the computer score.\n\nI will do whatever you want... For a price ;)',
      description: 'Hates life and loves money',
      image: 'scammer.png',
    },
  },
  
  ALL_LOCATIONS: {
    'Library': {
      parent: 'Library',
      awarness: 0,
  	  riskModifier: .1,
      rewardDeath: 100,
      reward: 10,
      description: 'Library',
      image: 'hello.png',
  	  mapx:50,
  	  mapy:50,
  	  mapw:80,
  	  maph:80,
    },
	'Netcafe': {
    parent: 'Netcafe',
    risk: 0,
	  riskModifier: .1,
    rewardDeath: 100,
    reward: 20,
    description: 'Netcafe',
    image: 'hello.png',
	  color: '#ff0000',
	  mapx:340,
	  mapy:80,
	  mapw:80,
	  maph:80,
    },
	'Apartment': {
    parent: 'Apartment',
    risk: 0,
	  riskModifier: .1,
    rewardDeath: 100,
    reward: 30,
    description: 'Apartment',
    image: 'hello.png',
	  color: '#ff0000',
	  mapx:30,
	  mapy:210,
	  mapw:80,
	  maph:80,
    },
	'Computer Store': {
    parent: 'Computer Store',
    risk: 0,
	  riskModifier: .1,
    rewardDeath: 100,
    reward: 50,
    description: 'Computer Store',
    image: 'hello.png',
	  color: '#ff0000',
	  mapx:320,
	  mapy:230,
	  mapw:80,
	  maph:80,
    },
  },

  LOCK_IMAGES: {
    'SpoofLocked' : 'SpoofLocked.png',
    'KeyloggerLocked' : 'KeyloggerLocked.png',
    'WifiLocked' : 'WifiLocked.png',
    'ScamLocked' : 'ScamLocked.png',
  },

  LESSON_IMAGES: {
    'ForgotDontSave': 'DontSave.png',
    'ForgotSignOut': 'SignOut.png',
    'ForgotStaySignedIn': 'StaySignedIn.png',
    'SpoofBadUrl': 'Spoofed.png',
    'KeyLoggingKeyboard': 'KeyLogging.png',
    'BadWifi': 'BadWifi.png',
    'BadSsid': 'BadWifi2.png',
    'EmployeeScam': 'EmployeeScam.png'
  },

  INTRO_STRING: 'Thank you for purchasing the Hackmaster 3000!' + 
                ' There are plenty of uneducated computer users in this town,' +
                ' let\'s see how much $$$ we can make off of them...'
};
