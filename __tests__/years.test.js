import Year from './../src/js/years.js'

describe('Year', ()=>{
  const testYear;
  beforeEach(()=>{
    testYear = new Year(31, 80);
  });

  test('should create a Year object with age and lifeExpectancy attributes', ()=>{
    
    expect(testYear.age).toEqual(31);
    expect(testYear.lifeExpectancy).toEqual(80);
  })

  test('should return the mercury equivelant of the user\'s age'){

  }
})