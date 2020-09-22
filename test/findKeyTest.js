

const findKey = require('../index').findKey;
const assert = require('chai').assert;


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
describe('findKey() test:', () => {
  it('should use callback to find key to object', () => {
    let currDay = new Date();
    //January === 0 and so on
    if (currDay.getMonth() === 0) {
      if (currDay.getDate() <= 19) {
        assert.equal(findKey(horoscopes, isCurrHoroscope), 'Capricorn');
      } else {
        assert.equal(findKey(horoscopes, isCurrHoroscope), 'Aquarius');
      }
    } else if (currDay.getMonth() === 1) {
      if (currDay.getDate() <= 18) {
        assert.equal(findKey(horoscopes, isCurrHoroscope), 'Aquarius');
      } else {
        assert.equal(findKey(horoscopes, isCurrHoroscope), 'Pisces');
      }
    } else if (currDay.getMonth() === 2) {
      if (currDay.getDate() <= 20) {
        assert.equal(findKey(horoscopes, isCurrHoroscope), 'Pisces');
      } else {
        assert.equal(findKey(horoscopes, isCurrHoroscope), 'Aries');
      }
    } else if (currDay.getMonth() === 3) {
      if (currDay.getDate() <= 19) {
        assert.equal(findKey(horoscopes, isCurrHoroscope), 'Aries');
      } else {
        assert.equal(findKey(horoscopes, isCurrHoroscope), 'Taurus');
      }
    } else if (currDay.getMonth() === 4) {
      if (currDay.getDate() <= 20) {
        assert.equal(findKey(horoscopes, isCurrHoroscope), 'Taurus');
      } else {
        assert.equal(findKey(horoscopes, isCurrHoroscope), 'Gemini');
      }
    } else if (currDay.getMonth() === 5) {
      if (currDay.getDate() <= 20) {
        assert.equal(findKey(horoscopes, isCurrHoroscope), 'Gemini');
      } else {
        assert.equal(findKey(horoscopes, isCurrHoroscope), 'Cancer');
      }
    } else if (currDay.getMonth() === 6) {
      if (currDay.getDate() <= 22) {
        assert.equal(findKey(horoscopes, isCurrHoroscope), 'Cancer');
      } else {
        assert.equal(findKey(horoscopes, isCurrHoroscope), 'Leo');
      }
    } else if (currDay.getMonth() === 7) {
      if (currDay.getDate() <= 22) {
        assert.equal(findKey(horoscopes, isCurrHoroscope), 'Leo');
      } else {
        assert.equal(findKey(horoscopes, isCurrHoroscope), 'Virgo');
      }
    } else if (currDay.getMonth() === 8) {
      if (currDay.getDate() <= 22) {
        assert.equal(findKey(horoscopes, isCurrHoroscope), 'Virgo');
      } else {
        assert.equal(findKey(horoscopes, isCurrHoroscope), 'Libra');
      }
    } else if (currDay.getMonth() === 10) {
      if (currDay.getDate() <= 22) {
        assert.equal(findKey(horoscopes, isCurrHoroscope), 'Libra');
      } else {
        assert.equal(findKey(horoscopes, isCurrHoroscope), 'Scorpio');
      }
    } else if (currDay.getMonth() === 11) {
      if (currDay.getDate() <= 21) {
        assert.equal(findKey(horoscopes, isCurrHoroscope), 'Scorpio');
      } else {
        assert.equal(findKey(horoscopes, isCurrHoroscope), 'Sagittarius');
      }
    } else {
      if (currDay.getDate() <= 21) {
        assert.equal(findKey(horoscopes, isCurrHoroscope), 'Sagittarius');
      } else {
        assert.equal(findKey(horoscopes, isCurrHoroscope), 'Capricorn');
      }
    }
  });
  it('should return the first key that evaluates true', () => {
    assert.equal(findKey(horoscopes, item => item.element === 'water'), 'Pisces');
    assert.equal(findKey(horoscopes, item => item.element === 'fire'), 'Aries');
    assert.equal(findKey(horoscopes, item => item.element === 'earth'), 'Capricorn');
  });
});
// assertEqual(findKey(constellations, x => x.stars === 2), 'noma');


// assertEqual(findKey(horoscopes, isCurrHoroscope), "Virgo"); //as of Sept 17
// assertEqual(findKey(horoscopes, item => item.element === 'water'), 'Pisces');

