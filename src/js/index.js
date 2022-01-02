import $ from "jquery";
import Year from './years.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';

function displayAges(currentYear){
  const planetDisplay = ['#mercuryAge', '#venusAge', '#earthAge', '#marsAge', "#jupiterAge"];
  const planetYears = currentYear.getSolar();
  for(let i=0; i<planetDisplay.length; i++){
    planetYears[i] = parseFloat(planetYears[i]).toFixed(2);  
    $(planetDisplay[i]).html(planetYears[i]);
  }
  $("#ageDisplay").show();
}
function displayLife(currentYear){
  const remainingDisplay = ['#mercuryRemaining', '#venusRemaining', '#earthRemaining', '#marsRemaining', "#jupiterRemaining"];
  const exceededDisplay = ['#mercuryExceeded', '#venusExceeded', '#earthExceeded', '#marsExceeded', "#jupiterExceeded"];
  const expectancy = currentYear.getLife();
  if(currentYear.age > currentYear.lifeExpectancy){
    for(let i = 0; i < exceededDisplay.length; i++){
      expectancy[i] = parseFloat(expectancy[i]).toFixed(2);
      $(exceededDisplay[i]).html(expectancy[i]);
      $("#exceededDisplay").show();
    }
  } else {
    for(let i = 0; i < exceededDisplay.length; i++){
      expectancy[i] = parseFloat(expectancy[i]).toFixed(2);
      $(remainingDisplay[i]).html(expectancy[i]);
      $("#remainingDisplay").show()
    }
  }
}
$(document).ready(function(){
  $("#formOne").submit(function(){
    const age = $("#age").val();
    const life = $("#lifeExpectancy").val();
    const currentYear = new Year(age, life);
    displayAges(currentYear);
    displayLife(currentYear);
    event.preventDefault();

  });
});