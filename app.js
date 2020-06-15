//Chapter 1

//Task 1:-
alert("Welcome to my Website");

//Task 2:-
alert("Error! Please enter a valid password.");

//Task 3:-
alert("Welcome to JS Land...\nHappy Coding!");

//Task 5:-
var a = "Hello...I can run JS through my web browser's console "
console.log(a)


//Chapter 2

//Task 1:-
var username;

//Task 2:-
var myName = "Full Name";

//Task 3:-
var message = "Hello World";
alert(message);

//Task 4:-
var Name = "Jhone Doe";
var age = "15 years old";
var Message = "Certified Mobile Application Development";
alert(Name);
alert(age);
alert(Message);

//Task 5:-
alert("PIZZA\nPIZZ\nPIZ\nPI\nP");

//Task 6:-
var email = "sameermohsin316@gmail.com";
alert("My email address is sameermohsin316@gmail.com");

//Task 7:-
var Book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book A smarter\nway to learn JavaScript");

//Task 8:-
var a = "Yah! I can write HTML content through JavaScript";
document.write(a);

//Task 9:-
var a = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(a);


//Chapter 3

//Task 1:-
var age = "I am 21 years old";
alert(age);

//Task 2:-
var a = "12 times";
alert("You have visited this site 14 times");

//Task 3:-
var birthYear = "1999";
document.write("My birth year is 2000 <br> Data type of my declared variable is number");

//Task 4:-
var visitorName = "Sameer Mohsin";
var Producttitle = "T-Shirt";
var Quantity = 6;
document.write("<b>Sameer Mohsin</b> ordered <b>5 T-shirt</b>(s) on XYZ clothing store");


//Chapter 4

//Task 1:-
var a = 3;
var b = 4;
var c = 5;
document.write(a, b, c);

//Task 2:-

//Legal:
var sameerMohsin;
var muhammadZohain;
var $;
var muhammad_12;
var muhammad$_Zohaib;

//Illegal:
var Muhammadzohaib;
var itemcost;
var Nameofbrand;
var Superhighway;
var Super30;

//Task 3:-
document.write("<h1>Rules for naming JS variables</h1>" + "<br" + "<br>" + "<br>");
document.write("Variable names can only contain , numbers,$ and _ . For example:$my_1st variable" + "<br>");
document.write("Variable must begin with a letter, $ or_ . For example : $name, _name or name" + "<br>");
document.write("Variable name are case sensitive" + "<br>");
document.write("Variable names should not be JS keywords");


//Chapter 5

//Task 1:-
var a = 9;
var b = 5;
var c = a + b;
document.write("Sum of 9 and 5 is 14");

//Task 2:-
//For Subtraction:
var a = 6;
var b = 4;
var c = a - b;
document.write("Difference of 6 and 4 is 2");

//For Multipication:
var a = 8;
var b = 3;
var c = a * b;
document.write("Product of 8 and 3 is 24");

//For Division:
var a = 7;
var b = 4;
var c = a / b;
document.write("Division of 7 and 4 is 1.75");

//For Modulus:
var a = 8;
var b = 4;
var c = a % b;
document.write("Modulus of 8 and 5 is 0");

//Task 3:-
var a = "Value after variable declaration is:??";
document.write("Value after variable declaration is undefined" + "<br>");
var a = 4;
document.write("Initial value:5" + "<br>");
var a = a++;
document.write("Value after increment is:5" + "<br>");
var a = a + 7;
document.write("Value after addition is:11" + "<br>");
var a = a--;
document.write("Value after decrement is:3" + "<br>");
var a = a / 3;
document.write("The remainder is:1");

//Task 4:
var priceofticket = 600;
var Total = 600 * 5;
document.write("Total cost to buy 5 tickets to a movie is 3000PKR");

//Task 5:
document.write("<h1>Table of 5</h1>");
for (var i = 1; i <= 10; i++) {
    document.write("5" + "x" + i + "=" + 5 * i + "<br>");
}

//Task 6:
var celsius = "25&#8451";
var ConvertFehrenheit = ("&#8457" - 32) * 5 / 9;
document.write("25&#8451 is 77&#8457" + "<br>");
var fehrenheit = "77&#8457";
var ConvertCelsius = ("&#8451*9/5") + 32;
document.write("70&#8457 is 21.11111111111111&#8451");

//Task 7:
document.write("<h1>Shopping Cart</h1>" + "<br>" + "<br>");
var p1 = 650;
document.write("Price of item 1 is 650" + "<br>");
var q1 = 3;
document.write("Quantity of item 1 is 3" + "<br>");
var p2 = 100;
document.write("Price of item 2 is 100" + "<br>");
var q2 = 7;
document.write("Quantity of item 2 is 7" + "<br>");
var shp = 100;
document.write("Shipping charges 100" + "<br>" + "<br>");
var Total = (p1 * q1 + p2 * q2) + shp;
document.write("Total cost of your order is 2750");

//Task 8:
document.write("<h1>Marks Sheet</h1>" + "<br>" + "<br>")
var Totalmarks = 500;
document.write("Total marks: 500" + "<br>");
var marksobtained = 430;
document.write("Marks obtained: 430" + "<br>");
var percentage = 430 / 500 * 100;
document.write("percentage: 86%");

//Task 9:
document.write("<h1>Currency in PKR</h1>" + "<br>" + "<br>");
var usDollar1 = 104.80;
var usDollar10 = 10 * 104.80;
var a = 1048;
var saudiriyal1 = 28;
var saudiriyal25 = 25 * 28;
var b = 700;
var Totalcurrency = a + b;
document.write("Total Currency in PKR: 1748");

//Task 10:
var a = 4;
var b = a + 5;
var c = a * 10;
var d = a / 2;
document.write(a, b, c, d);

//Task 11:
document.write("<h1>Age Calculator</h1>" + "<br>" + "<br>");
var currentYear = 2020;
document.write("Current Year: 2020" + "<br>");
var birthYear = 2000;
document.write("Birth Year: 2000" + "<br>");
var age = currentYear - birthYear;
document.write("Your Age is: 20");

//Task 12:
document.write("<h1>The Geometrizer</h1>" + "<br>" + "<br>");
var radius = 24;
document.write("Radius of a circle: 24" + "<br>");
var circumference = 2 * 3.142 * 24;
document.write("The circumference is: 150.816" + "<br>");
var area = 3.142 * 24 ^ 2;
document.write("The area is: 1809.792");

//Task 13:
document.write("<h1>The Lifetime Supply Calculator</h1>" + "<br>" + "<br>");
var FavouriteSnack = "Lays";
document.write("Favourite Snack: Lays" + "<br>");
var Currentage = 20;
document.write("Current age: 20" + "<br>");
var EstimatedMaximum = 65;
document.write("Estimated Maximum age: 65" + "<br>");
var Amount = 5;
document.write("Amount of snack per day: 5" + "<br>");
var Total = 70 - 20 * 5;
document.write("You will need 225 Lays to last you until the ripe old age of 65");


//Chapter 6-9

//Task 1:
document.write("Results:" + "<br>");
var a = 4;
document.write("The value of a is: 4" + "<br>");
document.write("......................................" + "<br>" + "<br>");
var a = ++a;
document.write("The value of ++a is: 5" + "<br>");
document.write("Now the value of a is: 5" + "<br>" + "<br>" + "<br>");
var a = a++;
document.write("The value of a++ is: 4" + "<br>");
document.write("Now the value of a is: 5" + "<br>" + "<br>" + "<br>");
var a = --a;
document.write("The value of --a is: 4" + "<br>");
document.write("Now the value of a is: 3" + "<br>" + "<br>" + "<br>");
var a = a--;
document.write("The value of a-- is: 4" + "<br>");
document.write("Now the value of a is: 4");

//Task 2:
var a = 2,
    b = 1;
document.write("a is ??" + "<br>");
document.write("b is ??" + "<br>");
var result = --a - --b + ++b + b--;
document.write("result is ??");

//Part a:
var a = 2;
var s = --a;

//Output is 1.
//Part b:
var a = 2;
var b = 3;
var t = --a - --b;

//Output is -1.
//Part c:
var a = 2;
var b = 3;
var u = --a - --b + ++b;

//Output is 2.
//Part d:
var a = 2;
var b = 3;
var v = --a - --b + ++b + b--;

//Output is 5.
//Task\ 3:
var a = prompt("Enter your name");
alert("welcome")


//Chapter 9-11

//Task 1:
var a = prompt("Enter your city name");
if (a == "Karachi") {
    alert("Welcome to city of lights");
}

//Task 2:
var gender = prompt("Enter your gender")
if (gender === "male") {
    alert("Good Morning Sir")
} else if (gender === "female") {
    alert("Good Morning Ma'am")
}

//Task 3:
var signals = prompt("Enter the traffic signal colour");
if (signals == "Red") {
    alert("Must Stop")
} else if (signals == "Yellow") {
    alert("Ready to move")
} else {
    alert("Move now")
}

//Task 4:
var fuel = prompt("Enter your remaining fuel");
if (fuel < "0.25litres") {
    alert("Please refill the fuel in your car")
}

//Task 5:

//Part a:
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

//Part b:
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

//Output is given condition for variable a is true
//Part c:

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}

if (c === 13) {
    alert("condition 2 is true");
}

if (++c < 14) {
    alert("condition 3 is true");
}

if (c === 14) {
    alert("condition 4 is true");
}

//Output is condition 2 is true
//Output is condition 4 is true
//Part d:
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

//Output is the cost equals
//Part e:
if (true) {
    alert("True");
}

if (false) {
    alert("False");
}

//Output is True
//Part f:
if ("car" < "cat") {
    alert("car is smaller than cat");
}

//Output is car is smaller than cat
//Task 6:
var marksobtained = prompt("Enter your obtained marks");
var Totalmarks = prompt("Enter your total marks");
var percentage = prompt("Enter your percentage");
if (percentage >= 80 && percentage <= 100) {
    alert("A+")
} else if (percentage >= 70 && percentage <= 80) {
    alert("A")
} else if (percentage >= 60 && percentage <= 70) {
    alert("B")
} else if (percentage >= 50 && percentage <= 80) {
    alert("C")
} else if (percentage >= 40 && percentage <= 80) {
    alert("D")
} else if (percentage >= 33 && percentage <= 40) {
    alert("E")
} else if (percentage >= 0 && percentage <= 33) {
    alert("F")
} else {
    alert("You didn't write correct percentage");
}
document.write("<h1>Marks Sheet</h1>" + "<br>" + "<br>");
document.write("Total marks: 300" + "<br>");
document.write("Marks obtained: 219" + "<br>");
document.write("Percentage: 73%" + "<br>");
document.write("Grade: B" + "<br>");
document.write("Remarks: You need to improve");

//Task 7:
var a = 10;
var c = 9;
var b = prompt("Guess the secret number");
if (b == a) {
    alert("Bingo! Correct answer");
} else if (b == c) {
    alert("Close enough to the correct answer")
}

//Task 9:
var x = prompt("Enter a number");
for (x = 2; x <= 100; x = x + 2) {
    alert("This number is even");
}
for (x = 1; x <= 100; x = x + 2) {
    alert("This number is odd");
}

//Task 10:
var T = prompt("Enter the temperature");
if (T > 40) {
    alert("It is too hot outside.")
} else if (T > 30) {
    alert("The Weather today is Normal.")
} else if (T > 20) {
    alert("Today's Weather is cool.")
} else if (T > 10) {
    alert("OMG!Today's Weather is soo cool.")
}

//Task 11:
var a = +prompt("Enter your first number");
var b = prompt("Enter your operator");
var c = +prompt("Enter your second number");
if (b == '+') {
    document.write(a + c);
} else if (b == '-') {
    document.write(a - c);
} else if (b == '*') {
    document.write(a * c);
} else if (b == "/") {
    document.write(a / c);
}


//Chapter 12-13

//Task 3:-
var a = +prompt("Enter a number");
if ("a == +") {
    alert("The number is positive");
} else if ("a == -") {
    alert("The number is negative");
} else if ("a == 0") {
    alert("The number is zero");
}

//Task 2:-
var a = prompt("Enter your first integer");
var b = prompt("Enter your second integer");
if (a > b) {
    alert("The first integer is larger than second integer")
} else if (a == b) {
    alert("Two integers are equal")
}

//Task 4:-
var vowels = "aeiou";
var a = prompt("Enter a character");
if (a == vowels) {
    alert("True")
} else {
    alert("False")
}

//Task 5:-
var password = "@iqra";
var a = prompt("Enter your password");
if (a == password) {
    alert("Correct!")
} else {
    alert("Incorrect password")
}

//Task 6:-
var greeting;
var a = prompt("Enter the greeting");
var hour = 20;
if (hour < 20) {
    alert = ("Good day");
} else {
    alert("Good evening");
}


//Chapter 14-16

//Task 1:-
var arr = []

//Task 2:-
var arr = new Arr = []

//Task 3:-
var strings = ["Asad", "Moiz", "Maaz", "Ibad", "Rashid"]

//Task 4:-
var numbers = [43, 76, 87, 765, 772, 45]

//Task 5:-
var boolean = ["True", "Flase"]

//Task 6:-
var mixed = ["Moiz", 6565, "Asad", 34, "Maaz", "Pakistan"]

//Task 7:-
var education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]
document.write("Qualifications:" + "<br>" + "<br>");
document.write("1)SSC" + "<br>");
document.write("2)HSC" + "<br>");
document.write("3)BCS" + "<br>");
document.write("4)BS" + "<br>");
document.write("5)BCOM" + "<br>");
document.write("6)MS" + "<br>");
document.write("7)M.phil." + "<br>");
document.write("8)phD");

//Task 8:-
var studentsName = ["Ali", "Shayan", "Ibad"]
var obtainedmarks = [340, 430, 230];
var TotalMarks = 500;
var percentage = obtainedmarks / Totalmarks * 100;
document.write("Score of Ali is 340.Percentage:64%" + "<br>");
document.write("Score of Shayan is 430.Percentage:86%" + "<br>");
document.write("Score of Ibad is 230.Percentage:46%");

//Task 10:-
var scores = [320, 543, 433, 120]
document.write("Scores of Students: 320,543,433,120" + "<br>");
var orderedscore = [120, 320, 433, 543]
document.write("Ordered Scores of Students: 120,320,433,543");

//Task 11:-
var cities = ["Karachi", "Lahore", "Islamabad", "Peshawar"]
document.write("cities list:" + "<br>");
document.write("Karachi,Lahore,Islamabad,Peshawar" + "<br>" + "<br>");
document.write("Selected cities list:" + "<br>")
var copystudents = cities.slice(1, 4)
document.write(copystudents);

//Task 12:-
var arr = ["This", "is", "my", "cat" + "<br>"];
document.write("<h1>Array:</h1>");
document.write("This,is,my,cat" + "<br>");
document.write("<h1>String:</h1>");
document.write("This is my cat");

//Task 13:-
var arr = ["Keyboard", "Mouse", "Printer", "Monitor"]
document.write("Devices:" + "<br>");
document.write("Keyboard,Mouse,Printer,Monitor" + "<br>" + "<br>");
document.write("Out:" + "<br>");
document.write("Keyboard" + "<br>");
document.write("Out:" + "<br>");
document.write("Mouse" + "<br>");
document.write("Out:" + "<br>");
document.write("Printer" + "<br>");
document.write("Out:" + "<br>");
document.write("Monitor");

//Task 14:-
var arr = ["Keyboard", "Mouse", "Printer", "Monitor"]
document.write("Devices:" + "<br>");
document.write("Keyboard,Mouse,Printer,Monitor" + "<br>" + "<br>");
document.write("Out:" + "<br>");
document.write("Monitor" + "<br>");
document.write("Out:" + "<br>");
document.write("Printer" + "<br>");
document.write("Out:" + "<br>");
document.write("Mouse" + "<br>");
document.write("Out:" + "<br>");
document.write("Keyboard");

//Chapter17-20

//Task 1:-
var arr = [];

//Task 2:-
var a = [0, 1, 2, 3]
document.write("0 1 2 3" + "<br>");
var b = [1, 0, 1, 2]
document.write("1 0 1 2" + "<br>");
var c = [2, 1, 0, 1]
document.write("2 1 0 1");

//Task 3:-
var a;
for (a = 1; a <= 10; a++) {
    document.write(a + "<br>");
}

//Task 5:-
var fruits = ["Mango", "Grapes", "Orange", "Apple", "Strawberry"]
document.write("Mango" + "<br>");
document.write("Grapes" + "<br>");
document.write("Orange" + "<br>");
document.write("Apple" + "<br>");
document.write("Strawberry" + "<br>" + "<br>");
document.write("Element at index 0 is Mango" + "<br>");
document.write("Element at index 1 is Grapes" + "<br>");
document.write("Element at index 2 is Orange" + "<br>");
document.write("Element at index 3 is Apple" + "<br>");
document.write("Element at index 4 is Strawberry");

//Task 6:-
document.write("<h1>Counting:</h1>" + "<br>");
document.write("1,2,3,4,5,6,7,8,9,10,11,12,13,14,15," + "<br>");
document.write("<h1> Reverse counting:</h1>" + "<br>");
document.write("10,9,8,7,6,5,4,3,2,1," + "<br>");
document.write("<h1>Even:</h1>" + "<br>");
document.write("0,2,4,6,8,10,12,14,16,18,20," + "<br>");
document.write("<h1>Odd:</h1>" + "<br>");
document.write("1,3,5,7,9,11,13,15,17,19," + "<br>");
document.write("<h1>Series:</h1>" + "<br>");
document.write("2k,4k,6k,8k,10k,12k,14k,16k,18k,20k,");

//Task 7:-
var a = ["Cake", "Apple Pie", "Cookie", "Chips", "Patties"]
var b = prompt("Welcome to Dilpasand Bakers and Sweets. What do you want to order Sir/Mam?");
if ("b === Cookies") {
    alert("Cookie is available at index 2 in our bakery");
} else if ("b === Patties") {
    alert("We are sorry, Patties is not available in our bakery");
}

//Task 8:-
var a = [24, 53, 78, 91, 12]
document.write("<h1>Array items:24,53,78,91,12</h1>");
document.write("<h1>The largest number is 91</h1>");

//Task 9:-
var a = [24, 53, 78, 91, 12]
document.write("<h1>Array items:24,53,78,91,12</h1>");
document.write("<h1>The smallest number is 12</h1>");

//Task 10:-
var i;
for (i = 5; i <= 100; i = i + 5) {
    document.write(i + ",");
}