export default class Year{
  constructor(age, lifeExpectancy){
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  getMercury(){
    return this.age * 4.1667;
  }
}