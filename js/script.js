// toggle menu
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", function () {
  console.log("click");
  navLinks.classList.toggle("show");
  // Change the inner HTML content
  if (navLinks.classList.contains("show")) {
    menuIcon.innerHTML = "close";
  } else {
    menuIcon.innerHTML = "menu";
  }
});

// off vh for first about div
// const firstAbout = document.getElementById("first-about");
// const headerHeight = document.querySelector("header").offsetHeight;
// firstAbout.style.height = `calc(100vh - ${headerHeight}px)`;

// play button for intro XR vid
const videoXR = document.getElementById("myVideoXR");
const playButtonXR = document.getElementById("playButtonXR");

playButtonXR.addEventListener("click", () => {
  if (videoXR.paused) {
    videoXR.play(); // Play the video
    playButtonXR.textContent = "pause"; // Change button text to "Pause"
  } else {
    videoXR.pause(); // Pause the video
    playButtonXR.textContent = "play"; // Change button text to "Play"
  }
});

// Optional: Update button text if the user interacts with the video directly
videoXR.addEventListener("play", () => {
  playButtonXR.textContent = "pause";
});

videoXR.addEventListener("pause", () => {
  playButtonXR.textContent = "play";
});

// play button for intro appdev vid
const videoAppDev = document.getElementById("myVideoAppDev");
const playButtonAppDev = document.getElementById("playButtonAppDev");

playButtonAppDev.addEventListener("click", () => {
  if (videoAppDev.paused) {
    videoAppDev.play(); // Play the video
    playButtonAppDev.textContent = "pause"; // Change button text to "Pause"
  } else {
    videoAppDev.pause(); // Pause the video
    playButtonAppDev.textContent = "play"; // Change button text to "Play"
  }
});

// Optional: Update button text if the user interacts with the video directly
videoAppDev.addEventListener("play", () => {
  playButtonAppDev.textContent = "pause";
});

videoAppDev.addEventListener("pause", () => {
  playButtonAppDev.textContent = "play";
});
