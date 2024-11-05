// a function that takes a year as input and determines whether it is a leap year or not. 
// Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.
function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isLeapYear(2020)); // Output: true
console.log(isLeapYear(1900)); // Output: false
console.log(isLeapYear(2000)); // Output: true
console.log(isLeapYear(2021)); // Output: false

// a program that asks the user for the current temperature and whether it is raining or not.
//  Based on this information, advise the user on what clothing to wear.
function clothingAdviser() {
  let temperature = prompt("What's the current temperature (in Celsius)?");
  let isRaining = prompt("Is it raining? (yes or no)");
  temperature = parseInt(temperature);
  isRaining = isRaining.toLowerCase() === "yes";
  if (isNaN(temperature)) {
    console.log("Please enter a valid temperature.");
    return;
  }
  if (isRaining) {
    console.log("Don't forget your umbrella!");
  }
  if (temperature < 0) {
    console.log("It's freezing outside. Wear a heavy coat, gloves, and a hat.");
  } else if (temperature >= 0 && temperature <= 10) {
    console.log("It's quite cold. Wear a coat and maybe a scarf.");
  } else if (temperature > 10 && temperature <= 20) {
    console.log("It's a bit chilly. A light jacket should be fine.");
  } else if (temperature > 20 && temperature <= 30) {
    console.log("The weather is warm. Dress comfortably in lighter clothes.");
  } else {
    console.log("It's really hot. Wear shorts and a t-shirt.");
  }
}
clothingAdviser();

// a recursive function to check if a given string is a palindrome
function isPalindrome(str) {
  str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  if (str.length <= 1) {
    return true;
  }
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, -1));
  }
  return false;
}
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("Hello")); // Output: false

// function to calculate the result of raising a number to a given power.
function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}
console.log(power(2, 3)); // Output: 8
console.log(power(5, 0)); // Output: 1
console.log(power(3, 4)); // Output: 81
