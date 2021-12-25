import Year from './../src/js/years.js'

describe('Year', ()=>{

  test('should create a Year object with lifeExpectancy, mecurity, venus, earth, mars and jupiter attributes', ()=>{
    const testYear = new Year(31, 80);
    expect(testYear.mecury).toEqual(31*4.1667);
    expect(testYear.venus).toEqual(31*1.1629);
    expect(testYear.earth).toEqual(31);
    expect(testYear.mars).toEqual(31*.5319);
    expect(testYear.jupiter).toEqual(31*.0843);
    expect(testYear.life).toEqual(80)
  })
})