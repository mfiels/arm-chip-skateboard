var Constants = {
  CANVAS_WIDTH: 800,    // NOTE: These need to be changed in index.html on the canvas tag too!
  CANVAS_HEIGHT: 650,    // NOTE: Same as above

  INITIAL_MONEY: 1,
  INITIAL_RESOURCES: 3,

  INITIAL_LOCATIONS: [
    'Library',
  ],
  INITIAL_ACTIONS: [
    'Forgot',
  ],

  ALL_ACTIONS: {
    'Forgot': {
      risk: 0,
	  riskModifier: 1,
      resources: 1,
      cost: 1,
      description: 'Someone forgot to log off!',
      image: 'forgot.png',
	    color: '#af0000',
    },
    'SpoofWebsite': {
      risk: 0,
      resources: 1,
      cost: 2,
      description: 'Leave a fake website open to lure people into logging in.',
      image: 'spoof.png',
      color: '#af0000',
    },
  },

  ALL_DUDES: {
    'Highschooler': {
      risk: 0,
      resourceGain: 1,
      cost: 100,
      lockDescription: 'Gain access to the local high school.\n\nThose poor kids...',
      description: 'Shady high school kid',
      image: 'highschooler.png',
    },
    'NetCafeOwner': {
      risk: 0,
      cost: 500,
      resourceGain: 5,
      lockDescription: 'Unlocks the local cafe.\n\nFree donuts and coffee 4Life!',
      description: 'Hates his customers',
      image: 'highschooler.png',
    },
    'ApartmentOwner': {
      risk: 0,
      cost: 2000,
      resourceGain: 10,
      lockDescription: 'I will give you the keys to happiness....',
      description: 'Has acces to lots of things ;)',
      image: 'highschooler.png',
    },
    'AppleGenius': {
      risk: 0,
      cost: 5000,
      resourceGain: 20,
      lockDescription: 'I will do whatever you want ;)',
      description: 'Hates life and loves money',
      image: 'highschooler.png',
    },
  },
  
  ALL_LOCATIONS: {
    'Library': {
      risk: 0,
	  riskModifier: .1,
      reward: 0,
      description: 'Library',
      image: 'hello.png',
	  color: '#ff0000',
	  mapx:50,
	  mapy:50,
	  mapw:80,
	  maph:80,
    },
  },

  INTRO_STRING: 'Welcome to the Hackmaster 3000!!1 You think you got it what it takes to be a big shot? I don\'t think you do...'
};
