let play = document.getElementsByClassName("play")[0];
let pause = document.getElementsByClassName("pause")[0];
let reset = document.getElementsByClassName("reset")[0];

let count;

let hours, minutes, seconds;

play.addEventListener("click", function() {
  hours = parseInt(document.getElementsByClassName("h")[0].value);
  minutes = parseInt(document.getElementsByClassName("m")[0].value);
  seconds = parseInt(document.getElementsByClassName("s")[0].value);
  let time = (hours*3600) + (minutes*60) + seconds;
  
  count = setInterval(() => {
    if (time === 0) {
      clearInterval(count);
    } else {
      time --;
      hours = document.getElementsByClassName("h")[0].value = Math.floor(time/3600);
      minutes = document.getElementsByClassName("m")[0].value = Math.floor((time % 3600) / 60);
      seconds = document.getElementsByClassName("s")[0].value = Math.floor(time % 60);
    }
  },1000);
});

pause.addEventListener("click", function () {
  clearInterval(count);
})


reset.addEventListener("click", function () {
  clearInterval(count);
  for (let i = 0; i<3; i++)
    document.getElementsByTagName("input")[i].value = 0;
})


let clBtn = document.getElementsByClassName("cl")[0];

let f = true;

clBtn.onclick = function () {
  if(f){
    f = false
    let face = document.getElementById("face");
    face.style.cssText = "display: none";
    clBtn.innerHTML = "BMO";
  } else {
    f = true;
    let face = document.getElementById("face");
    face.style.cssText = "display: block";
    clBtn.innerHTML = "Timer";
  }

};