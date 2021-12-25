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
})