//Carousel

//contains all the images in an array
var image = ['a', 'b', 'c', 'd', 'e'];
var i = 0;

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

var block = [];
var slide = 0;

function nextSlide(){
  for(var slide = 0; slide < array.length; slide++){
    array.length[block]
    document.getElementById("slider")
}
}
