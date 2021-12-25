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
}