function setup() {
  createCanvas(windowWidth, windowHeight);
}
opacityVar = 400;
var bounce1 = 0;
var bounce1var = false;
var bounceSpeed = 6;
var bounce1finish = false;
var bounce2finish = false;
var bounce3 = 0;
var bounce3var = false;
var bounce2 = 0;
var bounce2var = false;
var bounce3finish = false;
var circleWidth = 15;
function programRestart(){
opacityVar = 400;
var bounce1 = 0;
var bounce1var = false;
var bounceSpeed = 6;
var bounce1finish = false;
var bounce2finish = false;
var bounce3 = 0;
var bounce3var = false;
var bounce2 = 0;
var bounce2var = false;
var bounce3finish = false;
var circleWidth = 15;
var httpRe = false;
}
    function getQueryVariable(variable){
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
var loc1 = getQueryVariable("id");
if (loc1 === false){
window.open(loc1, "_self");
}
if (loc1.indexOf('https://') > -1 && httpRe === false){
httpRe = true;
}
if (loc1.indexOf('http://') > -1 && httpRe === false)
{
} else {
loc1 = "http://" + loc1;
}

function draw() {
  if (bounce1var === true){
  bounce1 = bounce1 + bounceSpeed;
  } else {
  bounce1 = bounce1 - bounceSpeed;
  }
  if (bounce1 < -50){
  bounce1var = true;
  }
  if (bounce1 >= 0){
  bounce1 = bounce1 - bounceSpeed;
  bounce1finish = true;
  }

if (bounce1finish === true){
  if (bounce2var === true){
  bounce2 = bounce2 + bounceSpeed;
  } else {
  bounce2 = bounce2 - bounceSpeed;
  }
  if (bounce2 < -50){
  bounce2var = true;
  }
  if (bounce2 >= 0){
  bounce2 = bounce2 - bounceSpeed;
  bounce2finish = true;
  }
}
  
if (bounce2finish === true){
  if (bounce3var === true){
  bounce3 = bounce3 + bounceSpeed;
  } else {
  bounce3 = bounce3 - bounceSpeed;
  }
  if (bounce3 < -50){
  bounce3var = true;
  }
  if (bounce3 >= 0){
  bounce3 = bounce3 - bounceSpeed;
  bounce3finish = true;
  }
}
  
if (bounce3finish === true){
circleWidth = circleWidth + 0.5;
opacityVar = opacityVar - 10;
}
  clear();
if (opacityVar < -100){
window.open(loc1, "_self");
opacityVar = 400;
bounce1 = 0;
bounce1var = false;
bounceSpeed = 6;
bounce1finish = false;
bounce2finish = false;
bounce3 = 0;
bounce3var = false;
bounce2 = 0;
bounce2var = false;
bounce3finish = false;
circleWidth = 15;
}
  background(255);
  background(255, 255, 255, opacityVar);
  fill(0, 0, 0, opacityVar);
  noStroke();
  ellipse(windowWidth/2 - 50 - 30, windowHeight/2 + bounce1, circleWidth, circleWidth);
  ellipse(windowWidth/2 - 30, windowHeight/2 + bounce2, circleWidth, circleWidth);
  ellipse(windowWidth/2 + 50 - 30, windowHeight/2 + bounce3, circleWidth, circleWidth);
}