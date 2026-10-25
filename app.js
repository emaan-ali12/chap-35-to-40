// 1
function showDateTime() {
    document.write(new Date());
}

showDateTime();
// 2
function greetUser(firstName, lastName) {
    alert("Hello " + firstName + " " + lastName);
}

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

greetUser(firstName, lastName);
// 3
function addNumbers(num1, num2) {
    return num1 + num2;
}

var a = Number(prompt("Enter first number:"));
var b = Number(prompt("Enter second number:"));

document.write("Sum: " + addNumbers(a, b));
// 4
function calculator(num1, num2, operator) {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    } else {
        return "Invalid operator";
    }
}

var n1 = Number(prompt("Enter first number:"));
var n2 = Number(prompt("Enter second number:"));
var op = prompt("Enter operator (+, -, *, /):");

document.write("Result: " + calculator(n1, n2, op));
// 5
function square(num) {
    return num * num;
}

document.write(square(Number(prompt("Enter a number:"))));
// 6
function factorial(num) {
    var result = 1;

    for (var i = 1; i <= num; i++) {
        result = result * i;
    }

    return result;
}

var num = Number(prompt("Enter a number:"));

document.write("Factorial: " + factorial(num));
// 7
function counting(start, end) {
    for (var i = start; i <= end; i++) {
        document.write(i + "<br>");
    }
}

var start = Number(prompt("Enter start number:"));
var end = Number(prompt("Enter end number:"));

counting(start, end);
// 8
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num) {
        return num * num;
    }

    return Math.sqrt(
        calculateSquare(base) + calculateSquare(perpendicular)
    );
}

var base = Number(prompt("Enter base:"));
var perpendicular = Number(prompt("Enter perpendicular:"));

document.write("Hypotenuse: " +
    calculateHypotenuse(base, perpendicular));
// 9  a
function area(width, height) {
    return width * height;
}

document.write("Area: " + area(5, 10));
// 9 b 
function area(width, height) {
    return width * height;
}

var w = 8;
var h = 4;

document.write("Area: " + area(w, h));
// 10
function checkPalindrome(str) {
    var reverse = str.split("").reverse().join("");

    if (str === reverse) {
        document.write("It is a palindrome");
    } else {
        document.write("It is not a palindrome");
    }
}

checkPalindrome(prompt("Enter a word:"));
// 11
function capitalizeWords(str) {
    return str.replace(/\b\w/g, function(letter) {
        return letter.toUpperCase();
    });
}

document.write(capitalizeWords("the quick brown fox"));
// 12
function longestWord(str) {
    var words = str.split(" ");
    var longest = "";

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    return longest;
}

document.write(longestWord("Web Development Tutorial"));
// 13
function countLetter(str, letter) {
    var count = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }

    return count;
}

document.write(countLetter("JSResourceS.com", "o"));
// 14
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    document.write("The circumference is " +
        circumference.toFixed(2) + "<br>");
}

function calcArea(radius) {
    var area = Math.PI * radius * radius;
    document.write("The area is " + area.toFixed(2));
}

var radius = Number(prompt("Enter the radius of the circle:"));

calcCircumference(radius);
calcArea(radius);


