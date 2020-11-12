const player = document.querySelector(".player");
const video = player.querySelector("video");
const toggle = player.querySelector(".toggle");
const ranges = document.querySelectorAll("input[type = range]");
const skipBtns = document.querySelectorAll("button[data-skip]");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
//先解决播放和暂停的问题
//点击播放暂停按钮以及屏幕会让视频播放和暂停

//再来解决调整声音和倍速的功能

//再来解决右侧调整进度的按钮功能

//解决进度条跟随播放的功能
function changeIcon() {
  const icon = video.paused ? "►" : "❙❙";
  toggle.textContent = `${icon}`;
}
function playFilm() {
  console.dir(this);
  console.log(this.paused);
  const methods = video.paused ? "play" : "pause";
  video[methods]();
}
function changeValue() {
  video[this.name] = this.value;
}

function changeTime() {
  video.currentTime += parseFloat(this.dataset.skip);
}
function changeProgress(e) {
  video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
}
function changeBar() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}
video.addEventListener("click", playFilm);
video.addEventListener("click", changeIcon);
video.addEventListener("timeupdate", changeBar);
toggle.addEventListener("click", playFilm);
toggle.addEventListener("click", changeIcon);
ranges.forEach((rangeBtn) => {
  rangeBtn.addEventListener("click", changeValue);
  rangeBtn.addEventListener("mousemove", changeValue);
});
skipBtns.forEach((skipBtn) => {
  skipBtn.addEventListener("click", changeTime);
});
let mouseDown = false;
progress.addEventListener("mousedown", () => (mouseDown = true));
progress.addEventListener("mousemove", (e) => mouseDown && changeProgress(e));
progress.addEventListener("mouseup", () => (mouseDown = false));
