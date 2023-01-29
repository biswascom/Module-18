var studentRoll = [23, 33, 44, 88, 90, 99];
console.log (studentRoll);

var serialOfRoll = studentRoll[3];
console.log (serialOfRoll);

studentRoll [1] = 100;
studentRoll [5] = 200;
console.log (studentRoll);

var positionOfContent = studentRoll.indexOf(90);
console.log (positionOfContent);

var studentNames = ["Rahim", "Karim", "Jabbar", "Hashem", "Kashem"];
console.log (studentNames);

var positionOne = studentNames[1];
console.log (positionOne);

studentNames[2] = "Raihan";
console.log (studentNames);

var positionOfName = studentNames.indexOf("Raihan");
console.log (positionOfName);

var serial = [23, 33, 45, 56];
var exact = serial[0] = 50;
console.log (serial);
console.log (exact);

var serialOfPush = [22, 34, 44, 77];
console.log (serialOfPush);

serialOfPush.push(100);
console.log (serialOfPush);

var popElement = serialOfPush.pop();
console.log (popElement);
console.log (serialOfPush);