function triangleTester(){
var ThreeSides = []

ThreeSides.push(parseInt(prompt("enter first side")));
ThreeSides.push(parseInt(prompt("enter second side")));
ThreeSides.push(parseInt(prompt("enter third side")));

var side1 = ThreeSides[0];
var side2 = ThreeSides[1];
var side3 = ThreeSides[2];

if (side1===side2  &&  side2===side3 && side1===side3){
result.innerHTML=(" It is an Equilateral Triangle")
}

else if (side1===side2  &&  side1!==side3 || side1===side3  &&  side1!==side2 || side2===side3  &&  side2!==side1){
result.innerHTML=("It is an Isosceles Triangle")
}

else if(side1!==side2 && side2!==side3 && side1!==side3){
result.innerHTML=("It is a Scalene Triangle")
}
else {
alert("NOT a triangle")
}
}
