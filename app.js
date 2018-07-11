//Carousel

//contains all the images in an array
var image = ['a', 'b', 'c', 'd', 'e'];
var i = 0; //counter
var carousel;

// function for next slide
function nextImage() {

  if (i < image.length - 1) {
    i = i + 1;
  } else {
    i = 0;
  }
  document.getElementById('carousel').innerHTML = "<img src='assets/" + image[i] + ".png'>";
}

// function for previous slide
function prevImage() {

  if (i < image.length && i > 0) {
    i = i - 1;
  } else {
    i = image.length - 1;
  }
  document.getElementById('carousel').innerHTML = "<img src='assets/" + image[i] + ".png'>";
}






//Slider

window.onload = function () {
  var slider = document.getElementById("slider");
  var colours = ['red', 'orange', 'yellow', 'green', 'blue'];
  var counter = 0; //counts which poisition we are in, in the array, starts at 0 (red)


  function colourChange() {

      //to reset the counter back to 0, 
      //if the counter is greater than or equal to the total number of colours in array
      //the array starts at 0 again
    if (counter >= colours.length){
      counter = 0;
    }


    slider.style.background = colours[counter]; //changes the colour of the slider
    console.log(colours[counter]);
    counter++; //adds 1 to the counter
  

  }
//myTimer variable
//assigned to start a timer, colours change every second, for the autosrcoll

  var myTimer = setInterval(colourChange, 1000); 

  slider.onclick =  function(){

    clearInterval(myTimer); // stops the timer when the slider is clicked
    slider.innerHTML = "Timer stopped"; //Inserts the text Timer stoped onto the carosoul
  };
}