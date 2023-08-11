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

// Boolean Logic
var isLoggedIn = false;

// Comparison Operators
/* 
> greather than x > 15 
>= greather than or equal x >= 10
< less than x < 18
less than or equal x <= 20
== Equal to(just look at the value) x == '10'
!= Not equal x != 5
=== Equal to (look at both value and sign ) x === '10
!== Not Equal x !== '10'
*/

/*
 Logical Operators
 && -> AND (x> 7) && (x === '10') false
 || -> OR (x > y) || (y  < 5 ) true
 ! -> NOT !( y !== '8) false
*/
var a = 15;
var b = 11;

var result = a > b || (a != "11" && b != "15");
console.log("Result: ", result);

// Conditional Statements
// if, else if, else
var grade;
grade = 44;
if (grade < 47) {
  console.log("You can not go to next class!");
} else if (grade > 40 && grade < 45) {
  console.log("You can not go to next class but you can enter the exam!");
} else {
  console.log("You can go to the next class!");
}

// exercise
var age = 35;

if (age < 18) {
  console.log("You can not enter to the cafe");
} else if (age < 23) {
  console.log("You can enter to the cafe but you can not drink alcohol");
} else {
  console.log("You can enter to the cafe and you can drink the alcohol");
}

// Ternary Operator
var grade = 80;

grade < 45
  ? console.log("You can not go to next class")
  : console.log("You can go to next class");

var result = grade < 45 ? "failure" : "success";
console.log(result);

if (grade < 45) {
  console.log("failure");
} else {
  console.log("success");
}

// Switch Statements
var day;
day = "monday";
switch (day) {
  case "saturday":
    console.log("I like saturday");
    break;
  case "monday":
    console.log("i do not like monday");
    break;
  case "friday":
    console.log("I really like friday");
    break;
  default:
    console.log("I do not know the day");
    break;
}

// Code quiz 2
/*
Alex, Sara and Nancy are in the same class.
In math class, Alex's grades are 90, 80, 95
Sara's grades are 89, 76, 98
Nancy's grades are 42, 98, 83

1.Calculate the average score for each student, then save that value into a variable
2. Find the highest score and then console.log the student who has the highest average.
3. Averages may be the same

*/
var alexGrades = [90, 80, 95];
var saraGrades = [99, 99, 100];
var nancyGrades = [99, 98, 100];

var alexAv = (alexGrades[0] + alexGrades[1] + alexGrades[2]) / 3;
var saraAv = (saraGrades[0] + saraGrades[1] + saraGrades[2]) / 3;
var nancyAv = (nancyGrades[0] + nancyGrades[1] + nancyGrades[2]) / 3;

highestAv = 0;

if (alexAv > saraAv && alexAv > nancyAv) {
  highestAv = alexAv;
  console.log("Highest Average is  Alex: ", highestAv);
} else if (saraAv > alexAv && saraAv > nancyAv) {
  highestAv = saraAv;
  console.log("Highest Average is  Sara: ", highestAv);
} else {
  highestAv = nancyAv;
  console.log("Highest Average is  Nancy: ", highestAv);
}

console.log(">>>>", alexAv, saraAv, nancyAv);

console.log(">>>>>> Quiz 2 solution:");

var gradeAlex = (80 + 90 + 95) / 3;
var gradeSara = (80 + 90 + 95) / 3;
var gradeNancy = (42, 98, 83) / 3;

if (gradeAlex > gradeSara && gradeAlex > gradeNancy) {
  console.log("Alex has the highest Average:", gradeAlex);
} else if (gradeSara > gradeAlex && gradeSara > gradeNancy) {
  console.log("Sara has the highest Average:", gradeSara);
} else if (gradeNancy > gradeAlex && gradeNancy > gradeSara) {
  console.log("Nancy has the highest Average:", gradeNancy);
} else {
  console.log("There is a draw");
}
