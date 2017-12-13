
/*
Title: Creative Commons: Click and Explore
Imagined, Designed, and Programmed by: Connor Nakamura

Date: December 11th 2017
Description:
The app is very easy to use:
You can use the slider and buttons to find out more information.
Scroll down to get a full sense of the project.

Sources of ideas and inspiration (title, author, URL):
 * History, Creative Commons, https://creativecommons.org/about/history/
 * Creative Commons, Wikipedia, https://en.wikipedia.org/wiki/Creative_Commons
 * (note: I know Wikipedia is not the most reliable source; I used it to display an example of the effectiveness of creative commons)

Includes code from (title, author, URL):
  * Animation, p5, https://p5js.org/examples/hello-p5-animation.html
  * Slider, p5, https://p5js.org/examples/dom-slider.html
  * Button and inputs, p5, https://p5js.org/examples/dom-input-and-button.html

Includes images from (author, website)
  * wikipedia, https://www.wikipedia.org/
  * soundcloud, https://soundcloud.com/stream
  * flickr, https://www.flickr.com/
  * youtube, https://www.youtube.com/
  * arduino, https://www.arduino.cc/
  * wired, https://www.wired.com/
  * plos, https://www.plos.org/
*/

//array with all the timeline text
var phrases = ["2001 Creative Commons founded.", "2001 Creative Commons founded.", "2002 Version 1.0 licenses released", "2003 Approximately 1 million licenses in use.", "2004 Estimated 4.7 million licensed works by the end of the year. Version 2.0 released.", "2005 Estimated 20 million works.Version 2.5 release. Science projects at Creative Commons launched.","2006 Estimated 50 million works", "2007 Estimated 90 million licensed works.  Version 3.0 released.", "2009 350 million CC licensed works. First mainstream album release. Wikipedia moves to CC platform."]

//image variables
let img;
let img1;
let wikipedia;

var firstslider;

//objects for moving images
var xval= {
  one: 0,
  two: 0,
  three: 0,
  four: 0,
  five: 0,
  six: 0

}

var yval = {
  one: 2000,
  two: 1500,
  three: 1500,
  four: 1500,
  five: 1700,
  six: 1900

}

function setup() {

  createCanvas(windowWidth,2000);
  background(0);

  //change the xval
  xval.one=windowWidth/8;
  xval.two=windowWidth/2.5;
  xval.three=windowWidth/1.3;
  xval.four=windowWidth;
  xval.four=windowWidth;
  xval.four=windowWidth;


  firstslider = createSlider(0, 400, 0); //create the timeline slider
  firstslider.position(150,200);
  firstslider.style('width', windowWidth-200+"px"); //proportion to window

  button = createButton('Click me'); //create the two buttons for biographies
  button.position(windowWidth/8, 1150);
  button.mousePressed(aa);

  button1 = createButton('Click me');
  button1.position(windowWidth/8, 650);
  button1.mousePressed(ll);


  img = loadImage("lawrence.jpg"); //load all images
  img1 = loadImage("aaron.jpg");
  wikipedia = loadImage("wikipedia.jpg");
  arduino = loadImage("arduino.jpg");
  wired = loadImage("wired.jpg");
  soundcloud = loadImage("soundcloud.jpg");
  flickr = loadImage("flickr.jpg");
  plos = loadImage("plos.jpg");
  flickrwiki = loadImage("flickrwiki.png");
  musicdes = loadImage("musicdes.png");
  video = loadImage("video.png");
  youtube = loadImage("youtube.png");
  music = loadImage("music.jpg");
  shortdescription = loadImage("shortdescription.png");
  uses = loadImage("uses.png");



}



function draw() {


  var val = firstslider.value();

  //heading texts and static image placement
  stroke(255,255,255);
  textSize(30);
  text("Important People",125, 300);
  image(shortdescription, 500, 350, shortdescription.width/2, shortdescription.height/2);
  image(uses, 500, 450, uses.width/2, uses.height/2);
  image(youtube, 500, 510);
  image(video,500,640, uses.width/2, uses.height/2);
  image(music,500,700);
  image(musicdes,500,1250);
  text("Background Info", 500,300);
  text("Creative Commons",windowWidth/2 - windowWidth/7, 50);
  textSize(15);
  text("Timeline: Slide to explore!",windowWidth/2, 100);

  //timeline events triggered by different values
  if (val > 50) {
    textSize(15);
    fill(255, 0, 0);
    text(phrases[1], 10, 10, 100, 100);
  }
  if (val > 100) {
    textSize(15);
    fill(255, 153, 0);
    text(phrases[2], 10, 80, 100, 150);
  }
  if (val > 150){
    textSize(15);
    fill(255, 255, 0);
    text(phrases[3],10, 145, 100, 200);
  }
  if (val > 200){
    textSize(15);
    fill(110, 255, 0);
    text(phrases[4],10, 250, 100, 450);
  }

  if (val > 250){
    textSize(15);
    fill(0, 255, 242);
    text(phrases[5],10, 415, 100, 450);
  }
  if (val > 300){
    textSize(15);
    fill(0, 42, 255);
    text(phrases[6],10, 610, 100, 450);
  }
  if (val > 300){
    textSize(15);
    fill(93, 0, 255);
    text(phrases[7],10, 680, 100, 450);
  }
  if (val > 350){
    textSize(15);
    fill(255, 0, 178);
    text(phrases[8],10, 820, 100, 450);
  }

  //Heading for the lower part of the example
  fill(255);
  textSize(20)
  text("Creative Commons examples" ,windowWidth/2 - windowWidth/7, 1400);

  //moving images
  image(wikipedia, xval.one, yval.one);

  yval.one = yval.one - 2;

    // Reset to the bottom
    if (yval.one < 1500) {
      yval.one = 2000;
    }


  image(arduino, xval.two, yval.two);

  yval.two = yval.two + 2;

    // Reset to the bottom
    if (yval.two > 2000) {
      yval.two = 1500;
    }

  image(soundcloud, xval.three, yval.three);

  yval.three = yval.three - 2;

    // Reset to the bottom
    if (yval.three < 1500) {
      yval.three = 2000;
    }

  image(flickr, xval.four, yval.four);

  xval.four = xval.four - 2;

      if (xval.four < -400) {
        xval.four = windowWidth;
          }

  image(plos, xval.five, yval.five);

  xval.five = xval.five - 2;

      if (xval.five < -400) {
        xval.five = windowWidth;
      }

  image(wired, xval.six, yval.six);

  xval.six = xval.six - 2;

      if (xval.six < -400) {
        xval.six = windowWidth;
      }


}

function ll () {
  var xpos = windowWidth/8;

  //function for lawrence lessig info/pic
  image(img, xpos, 350);
  fill(0);
  textSize(20);
  text("Lawrence Lessig",xpos, 700);
  textSize(15);
  text("Lawyer in favor of open access who supported a middle way to copyright law.  Founded creative commons.", xpos, 750, xpos + 100, 1300); // Text wraps within text box
}
function aa () {
  var xpos1 = windowWidth/8;

  //function for Aaron Swartz info/pic
  image(img1, xpos1, 850);
  fill(0);
  textSize(20);
  text("Aaron Swartz",xpos1, 1200);
  textSize(15);
  text("Technical genius involved in many open source, free access movements.  Helped form creative commons and other projects, most notably reddit.", xpos1, 1250, xpos1 + 100, 1800); // Text wraps within text box
}
