import Year from './../src/js/years.js'

describe('Year', ()=>{
  let testYear;
  beforeEach(()=>{
    testYear = new Year(31, 80);
  });

  test('should create a Year object with age and lifeExpectancy attributes', ()=>{
    expect(testYear.age).toEqual(31);
    expect(testYear.lifeExpectancy).toEqual(80);
  });

  test('should return the mercury equivelant of the user\'s age', ()=>{
    expect(testYear.getMercury()).toEqual(129.1677);
  });

  test('should return the venus equivelant of the user\'s age', ()=>{
    expect(testYear.getVenus()).toEqual(49.9999);
  });

  test('should return the mars equivelant of the user\'s age', ()=>{
    expect(testYear.getMars()).toEqual(16.4889);
  });

  test('should return the jupiter equivelant of the user\'s age', ()=>{
    expect(testYear.getJupiter()).toEqual(2.6133);
  });

  test('should return an array of the user\'s age on each planet', ()=>{
    expect(testYear.getSolar()).toEqual([129.1677, 49.9999, 31, 16.4889, 2.6133])
  });

  test('should return the remaining years to live for the user in each planets years. If the user has exceeded life expectancy then it will say so and by how many years', ()=>{
    expect(testYear.getLife()).toEqual([204.1683, 79.0321, 49, 26.0631, 4.1307])
  });
})