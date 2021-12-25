import Year from './../src/js/years.js'

describe('Year', ()=>{

  test('should create a Year object with age and lifeExpectancy attributes', ()=>{
    const testYear = new Year(31, 80);
    expect(testYear.age).toEqual(31);
    expect(testYear.lifeExpectancy).toEqual(80);
  })
})