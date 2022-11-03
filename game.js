const start = document.querySelector(".start");
const game = document.querySelector("#game");
const sco  = document.getElementById("score");
const audio = document.getElementById("bgMusic");
const ply = document.getElementById("play");
const out = document.getElementById("out");
const results = document.getElementById("result");
const result_box = document.querySelector(".result_box");
const restart = result_box.querySelector(".restart");
const text = result_box.querySelector(".score_text");
let a;
let timeOnScreen = 2400;
let bool1 = bool2 = bool3 = bool4 = true; //Bool value for the four tiles
var count=1;
var score = 0;
var step = 0;
var margin=randomMargin(), margin2; //creating margins

// Accessing and updating the result box
function viewResult(){
  game.style.display = "none";
  results.play();
  result_box.classList.add("activeResult");
  text.innerText = "You've scored " + score + " points";
}

// Resetting score and audio after clicking restart button
restart.onclick = ()=>{
  start.style.display = "block";
  result_box.classList.remove("activeResult");
  sco.innerText = 0;
  audio.currentTime = 0;
}

// Playing the audio 
function startAudio(){
  audio.play();
}

// Audio on end 
audio.addEventListener("ended", () => {
  audio.currentTime = 0;
  audio.play();
});

// Appending black tiles with parameter e 
function speed(e){
  a = setInterval(appendDiv, e);
}

// Resetting the black tiles 
function reset(){
  bool1 = bool2 = bool3 = bool4 = true;
}

// View result after missing one tile 
function outs(){
  audio.pause();
  out.play();
  setTimeout(viewResult, 1000);
}

// Creating div(tiles) and setting them not above each other
function appendDiv(){
  var object = document.createElement("div");
  do{
    margin2 = randomMargin()
  }while(margin == margin2){
    margin = margin2
  }

  // Setting object margin 
  object.style.marginLeft = margin2+"%";
  setTimeout(moveDown, 100, object);

  // Changing opacity and updating score on click object 
  object.onclick = () =>{
    object.style.background = "rgba(0,0,0,0.2)"
    updateScore();
  }

  // Defining conditions for levels 
  if(score >= 100 && score < 200) step = 1;
  else if(score >= 200 && score < 400) step = 2;
  else if(score >= 400 && score < 800) step = 3;
  else if(score >= 800) step = 4;
  document.getElementById("tiles").prepend(object);
}

function randomMargin(){
  return 25*Math.floor(Math.random()*4)
}

// Aliging speed with levels 
function moveDown(e){
  e.classList.add("move");
  if(step == 1){
    e.classList.add("speedX1");
    if(bool1 == true){
      clearInterval(a);
      speed(300);
      reset();
      bool1 = false;
      timeOnScreen = 1600;
    }
  } 
  else if(step == 2){
    e.classList.add("speedX2");
    if(bool2 == true){
      clearInterval(a);
      speed(250);
      reset();
      bool2 = false;
      timeOnScreen = 1600;
    }
  }
  else if(step == 3){
    e.classList.add("speedX3");
    if(bool3 == true){
      clearInterval(a);
      speed(200);
      reset();
      bool3 = false;
      timeOnScreen = 1200;
    }
  } else if(step == 4){
    e.classList.add("speedX4");
    if(bool4 == true){
      clearInterval(a);
      speed(160);
      reset();
      bool4 = false;
      timeOnScreen = 1000;
    }
  }
  setTimeout(removeDiv, timeOnScreen, e)
}

// Updating score 
function updateScore(){
  score++;
  sco.innerText = score;
}

// Discarding divs(tiles) after the render once 
function removeDiv(e){
  var bg = e.style.background;
  if(bg == ""){
    clearInterval(a);
    outs();
  }
  e.remove()
}

// Play audio with initialised score as zero on button click 
start.querySelector("button").onclick = ()=>{
  ply.play();
  game.style.display = "block";
  start.style.display = "none";
  score = 0;
  speed(400);
  setTimeout(startAudio, 1000);
}