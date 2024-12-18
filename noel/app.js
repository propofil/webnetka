//let audioHohoho = new Audio("./audio/hohoho.mp3");
//let audioBell = new Audio("./audio/bell.mp3");
let audioMerryChristmas = new Audio("./audio/merrychristmas.mp3");
let toggleCount = 0;

const htmlAudio = document.querySelector("#htmlAudio");

// window.addEventListener("load", start);
// function start() {
//   console.log("yo");
//   audioMerryChristmas.play();//son auto bloqué par navigateur sans action de user
// }

setInterval(snowFall, 10);

function snowFall() {
  const snow = document.createElement("i");

  snow.classList.add("fas");
  snow.classList.add("fa-snowflake");
  snow.style.left = Math.random() * window.innerWidth + "px";
  snow.style.animationDuration = Math.random() * 20 + "s";
  snow.style.opacity = Math.random() + 0.4;
  //snow.style.fontSize = Math.random() * 20 +'px';
  snow.style.fontSize = (Math.random() + 0.5) * 12 + "px";

  document.body.appendChild(snow);

  setTimeout(() => {
    snow.remove();
  }, 7000);
}

const h1 = document.querySelector("h1");
h1.addEventListener("click", () => {
  if (toggleCount === 0) {
    htmlAudio.pause();
    audioMerryChristmas.play();
    toggleCount++;
  }
	else{
    audioMerryChristmas.pause();
    toggleCount=0;
  }
});
