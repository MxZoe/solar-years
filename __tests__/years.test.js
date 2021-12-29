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
    expect(testYear.getMercury(testYear.age)).toEqual(129.1677);
  });

  test('should return the venus equivelant of the user\'s age', ()=>{
    expect(testYear.getVenus(testYear.age)).toEqual(49.9999);
  });

  test('should return the mars equivelant of the user\'s age', ()=>{
    expect(testYear.getMars(testYear.age)).toEqual(16.4889);
  });

  test('should return the jupiter equivelant of the user\'s age', ()=>{
    expect(testYear.getJupiter(testYear.age)).toEqual(2.6133);
  });

  test('should return an array of the user\'s age on each planet', ()=>{
    expect(testYear.getSolar()).toEqual([129.1677, 49.9999, 31, 16.4889, 2.6133])
  });

  test('should return the remaining years to live for the user in each planets years', ()=>{
    expect(testYear.getLife()).toEqual([204.1683, 79.0321, 49, 26.063100000000002, 4.1307])
  });

  test('should return years the life expectancy was exceeded by if the age is greater than the life expectancy', ()=>{
    const oldAge = new Year(90, 80);
    expect(oldAge.getLife()).toEqual([41.667, 16.129, 10, 5.319, 0.843])
  })
  
})