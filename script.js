// let onClick = "document.getElementById('about-us').scrollIntoView();";
let button = document.getElementById('exp-button');

function scrollTo() {
  window.scroll(0, 550);
}

button.addEventListener('click', scrollTo);

let i = 0;
let images = [];
let time = 3000;

images[0] = 'slide1.jpg';
images[1] = 'slide2.jpg';
images[2] = 'slide3.jpg';

function slideShow() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout('slideShow()', time);
}

window.onload = slideShow;
