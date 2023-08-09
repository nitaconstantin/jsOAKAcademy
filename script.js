/* 
Basic JavaScript Data Types:
1. String:It is used for text, shown between quotation marks
2. Number: Integers, Decimal numbers, Percentages
3. Boolean: True or False
4. Udefined: Data type of a variable that does not yet have a value
5. Null: nonexistent

*/
var name = "Alex";
console.log(name);

var schoolTeam = "basketball";
var schoolNumber = 20;
console.log(schoolNumber);

var isRegistered = true;
console.log(isRegistered);

// Type Coercion
var job;
console.log(job);
job = "student";
console.log(job);

console.log(name + " " + schoolNumber);

var schoolName, hasCourse;
schoolName = "OAKAcademy";
hasCourse;
// console.log(
//   schoolName + " has 35 courses. Does it have any course?" + hasCourse
// );
/* 
console.log("Hello from separated file!");
*/

console.log(
  schoolName + " has 35 courses. Does it have any course?" + hasCourse
);

schoolNumber = "twenty two";
console.log(schoolNumber);
schoolTeam = "tennis";
console.log(schoolTeam);

// alert(schoolTeam);
// var age = prompt("How old is he?");
// console.log("Alex is " + age + " years old");

///////////////////////////////////Basic Operators////////////////////////////
var totalDistance, distaceAlex, distanceSam;
var totalDistance = 20;
var distanceAlex = totalDistance - 12;
console.log(distanceAlex);
var distanceSam = totalDistance - 7;
console.log(distanceSam);
console.log(distanceSam * 2);
console.log(distanceSam / 2);

// Logical Operators:
var distanceToSchool, distanceToHome;
distanceToHome = 14;
distanceToSchool = 6;

var isCloser = distanceToHome > distanceToSchool;
console.log(isCloser);
