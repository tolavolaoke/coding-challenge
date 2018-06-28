
// All the HTML elements in the form of variables

var numSquares = 6; //stores the number of squares that will be available in the game as per mode
var colors = []; //an empty array which contains six or three RGB colour code generated every time the game is reset or the mode is changed
var pickedColor; //the colour/option block selected by the user on every click
var squares = document.querySelectorAll(".square"); //an array of all the squares on the page that are available as options. No of elements depend on the mode of the game.
var resetButton = document.querySelector("#reset"); //the new game button
var modeButtons = document.querySelectorAll(".mode");//an array that has the easy and hard mode buttons in.

