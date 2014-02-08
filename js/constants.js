var Constants = {
  CANVAS_WIDTH: 800,    // NOTE: These need to be changed in index.html on the canvas tag too!
  CANVAS_HEIGHT: 650,    // NOTE: Same as above

  INITIAL_MONEY: 100,
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
      resources: 1,
      cost: 1,
      description: 'Someone forgot to log off!',
      image: 'forgot.png',
	  color: '#af0000',
    },
  },

  ALL_DUDES: {
    'Highschooler': {
      risk: 0,
      resourceGain: 1,
      cost: 100,
      description: 'Shady high school kid',
      image: 'highschooler.png',
    },
    'NetCafeOwner': {
      risk: 0,
      cost: 500,
      resourceGain: 5,
      description: 'Hates his customers',
      image: 'highschooler.png',
    },
    'ApartmentOwner': {
      risk: 0,
      cost: 2000,
      resourceGain: 10,
      description: 'Has acces to lots of things ;)',
      image: 'highschooler.png',
    },
    'AppleGenius': {
      risk: 0,
      cost: 5000,
      resourceGain: 20,
      description: 'Hates life and loves money',
      image: 'highschooler.png',
    },
  },
  
  ALL_LOCATIONS: {
    'Library': {
      risk: 0,
      reward: 0,
      description: 'Library',
      image: 'hello.png',
	  color: '#ff0000',
    },
  },

  INTRO_STRING: 'Welcome to the Hackmaster 3000!!1 You think you got it what it takes to be a big shot? I don\'t think you do...'
};
