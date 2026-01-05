const findTheOldest = require('./findTheOldest')

describe('findTheOldest', () => {
  test('finds the person with the greatest age!', () => {
    const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
    expect(findTheOldest(people).name).toBe('Ray');
  });
<<<<<<< HEAD:12_findTheOldest/findTheOldest.spec.js
  test('finds the person with the greatest age if someone is still living', () => {
=======
  test.skip('finds the oldest person if yearOfDeath field is undefined on a non-oldest person', () => {
>>>>>>> upstream/main:foundations/16_findTheOldest/findTheOldest.spec.js
    const people = [
      {
        name: "Carly",
        yearOfBirth: 2018,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
    expect(findTheOldest(people).name).toBe('Ray');
  });
<<<<<<< HEAD:12_findTheOldest/findTheOldest.spec.js
  test('finds the person with the greatest age if the OLDEST is still living', () => {
=======
  test.skip('finds the oldest person if yearOfDeath field is undefined for the oldest person', () => {
>>>>>>> upstream/main:foundations/16_findTheOldest/findTheOldest.spec.js
    const people = [
      {
        name: "Carly",
        yearOfBirth: 1066,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
    expect(findTheOldest(people).name).toBe('Carly');
  });
});
