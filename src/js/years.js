export default class Year{
  constructor(age, lifeExpectancy){
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  getMercury(age){
    return age * 4.1667;
  }

  getVenus(age){
    return age * 1.6129;
  }

  getMars(age){
    return age * .5319;
  }

  getJupiter(age){
    return age * .0843;
  }

  getSolar(){
    const mercury = this.getMercury(this.age);
    const venus = this.getVenus(this.age);
    const earth = this.age;
    const mars = this.getMars(this.age);
    const jupiter = this.getJupiter(this.age);

    return [mercury, venus, earth, mars, jupiter];
  }

  getLife(){
    let remaining = this.lifeExpectancy - this.age;
  
    let mercury = this.getMercury(remaining);
    let venus = this.getVenus(remaining);
    let earth = remaining;
    let mars = this.getMars(remaining);
    let jupiter = this.getJupiter(remaining);
    let planetArray = [mercury, venus, earth, mars,jupiter];
    if(remaining < 0){
      for(let i=0; i <planetArray.length; i++){
        planetArray[i] *= -1;
      }
    }
    return planetArray;
  }
}