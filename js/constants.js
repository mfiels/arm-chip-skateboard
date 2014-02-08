var Constants = {
  CANVAS_WIDTH: 800,    // NOTE: These need to be changed in index.html on the canvas tag too!
  CANVAS_HEIGHT: 600,    // NOTE: Same as above

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
      description: 'Someone forgot to log off!',
      image: 'hello.png',
	  color: '#af0000',
    },
  },

  ALL_DUDES: {
    'Highscooler': {
      risk: 0,
      count: 1,
      description: 'Shady High School Kid',
      image: 0,
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
};
