   if(remaining < 0){
      remaining *= -1;
      mercury = this.getMercury(remaining);
      venus = this.getVenus(remaining);
      earth = remaining;
      mars = this.getMars(remaining);
      jupiter = this.getJupiter(remaining);
      return `You have exceeded your life expectancy by ${mercury} mercury years, ${venus} venus years, ${earth} earth years, ${mars} mars years and ${jupiter} jupiter years`;
    } else{