const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u26D4 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//given an object and a callback,
//loop through object, when callback returns truthy value, return current key
const findKey = (obj, callback) => {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};


//TODO: send to test file
const constellations = {
  "Blue Hill": {stars: 1},
  "Akaleri": {stars: 3},
  "noma": {stars: 2},
  "elBulli": {stars: 3},
  "Ora": {stars: 2},
  "Akelarre": {stars: 3}
};

const horoscopes = {
  Capricorn : {
    start: new Date(new Date().getFullYear(), 11, 22),
    end: new Date(new Date().getFullYear(), 0, 19),
    sign: 'goat',
    element: 'earth'
  },
  Aquarius: {
    start: new Date(new Date().getFullYear(), 0, 20),
    end: new Date(new Date().getFullYear(), 1, 18),
    sign: 'waves',
    element: 'air'
  },
  Pisces: {
    start: new Date(new Date().getFullYear(), 1, 19),
    end: new Date(new Date().getFullYear(), 2, 20),
    sign: 'fish',
    element: 'water'
  },
  Aries: {
    start: new Date(new Date().getFullYear(), 2, 21),
    end: new Date(new Date().getFullYear(), 3, 19),
    sign: 'ram',
    element: 'fire'
  },
  Taurus: {
    start: new Date(new Date().getFullYear(), 3, 20),
    end: new Date(new Date().getFullYear(), 4, 20),
    sign: 'bull',
    element: 'earth'
  },
  Gemini: {
    start: new Date(new Date().getFullYear(), 4, 21),
    end: new Date(new Date().getFullYear(), 5, 20),
    sign: 'twins',
    element: 'air'
  },
  Cancer: {
    start: new Date(new Date().getFullYear(), 5, 21),
    end: new Date(new Date().getFullYear(), 6, 22),
    sign: 'crab',
    element: 'water'
  },
  Leo: {
    start: new Date(new Date().getFullYear(), 6, 23),
    end: new Date(new Date().getFullYear(), 7, 22),
    sign: 'lion',
    element: 'fire'
  },
  Virgo: {
    start: new Date(new Date().getFullYear(), 7, 23),
    end: new Date(new Date().getFullYear(), 8, 22),
    sign: 'virgin',
    element: 'earth'
  },
  Libra: {
    start:new Date(new Date().getFullYear(), 8, 23),
    end: new Date(new Date().getFullYear(), 9, 22),
    sign: 'scales',
    element: 'air'
  },
  Scorpio: {
    start: new Date(new Date().getFullYear(), 9, 23),
    end: new Date(new Date().getFullYear(), 10, 21),
    sign: 'scorpion',
    element: 'water'
  },
  Sagittarius: {
    start: new Date(new Date().getFullYear(), 10, 22),
    end: new Date(new Date().getFullYear(), 11, 21),
    sign: 'archer',
    element: 'fire'
  }

};

const isCurrHoroscope = (horoObj) => {
  let today = new Date();
  if (today.getMonth() === horoObj.start.getMonth()) {
    if (today.getDate >= horoObj.start.getDate) {
      return true;
    } else {
      return false;
    }
  } else if (today.getMonth() === horoObj.end.getMonth()) {
    if (today.getDate <= horoObj.end.getDate) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

assertEqual(findKey(constellations, x => x.stars === 2), 'noma');


assertEqual(findKey(horoscopes, isCurrHoroscope), "Virgo"); //as of Sept 17
assertEqual(findKey(horoscopes, item => item.element === 'water'), 'Pisces');

module.exports = findKey;