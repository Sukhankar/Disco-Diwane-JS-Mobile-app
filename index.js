let discoBall = document.getElementById("ball");
let cat = document.getElementById("cat");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const audio = document.getElementById("audio");
const audio1 = document.getElementById("audio1");
const cryaudio = document.getElementById("cryaudio");

const preloadedCatImage = new Image();
preloadedCatImage.src = "./happy-cat.gif";

function getRandomColor() {
  return `#${Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, "0")}`;
}

let intervalId = null;

start.addEventListener("click", () => {
  discoBall.src = "./glowball.gif";
  cat.src = preloadedCatImage.src;

  audio.src = "./song.mp3";
  audio1.src = "./SpotifyMate.com-Blinding Lights-The Weeknd.mp3";
  document.querySelector("h4").innerText = "press Stop to End";
  console.log("start");

  if (!intervalId) {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomColor();
    }, 200);
  }
});

stop.addEventListener("click", () => {
  document.querySelector("h4").innerText = "press Start to begin";
  clearInterval(intervalId);
  intervalId = null;
  document.body.style.backgroundColor = "#181616";
  discoBall.src = "./offball.png";
  cat.src = "./banana-cat.gif";
  audio.src = "";
  audio1.src = "";
  cryaudio.src = "./crysong.mp3";
});
