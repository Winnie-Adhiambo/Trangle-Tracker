function triangleTester(){
var ThreeSides = []

ThreeSides.push(document.getElementById('1').value);
ThreeSides.push(document.getElementById('2').value);
ThreeSides.push(document.getElementById('3').value);

var side1 = ThreeSides[0];
var side2 = ThreeSides[1];
var side3 = ThreeSides[2];

if (side1 + side2 <= side3 || side1 + side3 <= side2 ||side2 + side3 <= side1) {
alert("not a triangle");
} else if(side1==side2 && side2==side3 && side1==side3) {
  alert("Equilateral");
}else if(side1==side2 || side2==side3 || side1==side3) {
  alert("Isosceles");
}else if(side1!==side2 && side2!==side3 && side1!==side3) {
  alert("scalene");
}
}
