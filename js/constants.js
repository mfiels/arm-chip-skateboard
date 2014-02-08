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
      Risk: 0,
      Resources: 1,
      Description: 'Someone forgot to log off!',
      Image: 0,
    },
  },
  ALL_LOCATIONS: {
    'Library': {
      Risk: 0,
      Reward: 0,
      Description: 'Library',
      Image: 0,
    },
  },
};
