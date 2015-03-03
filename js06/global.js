//6B

// var password = "blue skies";
// var user_pass = prompt("Enter password:");
// if (user_pass === password) {
//   alert("Good job!");
// } else {
//   alert("Sorry, the password is actually "+password);
// }

//6C

// var secret_number = 25;
// var guess = prompt("Enter number:");
// check();
//
// function check() {
//   if (parseInt(guess) > secret_number) {
//     alert("Secret number is less than " + parseInt(guess));
//     guess = prompt("Enter next guess:");
//     check();
//   } else if (parseInt(guess) < secret_number) {
//     alert("Secret number is greater than " + parseInt(guess));
//     guess = prompt("Enter next guess:");
//     check();
//   } else {
//     alert("You got it!");
//   }
// }

//6D

// var age = parseInt(prompt("What is your age?"));
//
// if (isNaN(age)) {
//   console.log("Sorry, but that's not a number!");
// }
//
// if (age < 0) {
//   console.log("You haven't been born yet!");
// }
//
// if (age >= 0 && age <= 15) {
//   console.log("You can't drive yet, but you'll be able to in a few years.");
// }
//
// if (age >= 16) {
//   console.log("You're eligible for a driver's license.");
//   if (age >= 21) {
//     console.log("Please don't drink and drive.");
//     if (age >= 25) {
//       console.log("You can rent a car.");
//     }
//   }
// }

//6E

// var age = parseInt(prompt("What is your age?"));
//
// if (isNaN(age)) {
//   console.log("Sorry, but that's not a number!");
// } else if (age < 0){
//     console.log("You haven't been born yet!");
// } else if (age >= 0 && age <= 15) {
//     console.log("You can't drive yet, but you'll be able to in a few years.");
// } else if (age >= 16 && age <= 21) {
//     console.log("You're eligible for a driver's license.");
// } else if (age >= 21 && age <= 25) {
//     console.log("Please don't drink and drive.");
// } else {
//     console.log("You can rent a car.");
// }

//6F

alert("Triangle Validity Test. Enter triangle side lengths.")
var side1 = parseFloat(prompt("Side 1:"));
if (isNaN(side1)) {
  console.log("First side value is not a number.");
}
var side2 = parseFloat(prompt("Side 2:"));
if (isNaN(side2)) {
  console.log("Second side value is not a number.");
}
var side3 = parseFloat(prompt("Side 3:"));
if (isNaN(side3)) {
  console.log("Third side value is not a number.");
}

if ((side1 + side2) > side3 && (side1 + side3) > side2 && (side2 + side3) > side1) {
  alert("It's a valid triangle!");
} else {
  alert("It's not a valid triangle.");
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  