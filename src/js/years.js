export default class Year{
  constructor(age, lifeExpectancy){
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  getMercury(){
    return this.age * 4.1667;
  }

  getVenus(){
    return this.age * 1.6129;
  }

  getMars(){
    return this.age * .5319;
  }

  getJupiter(){
    return this.age * .0843;
  }

  getSolar(){
    const mercury = this.getMercury();
    const venus = this.getVenus();
    const earth = this.age;
    const mars = this.getMars();
    const jupiter = this.getJupiter();

    return [mercury, venus, earth, mars, jupiter];
  }
}