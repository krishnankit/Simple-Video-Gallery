// LIST OF ALL VIDEOS
const videoList = document.querySelectorAll(".video-list .video");
let mainVideo = document.querySelector(".main-video .video video");
let mainTitle = document.querySelector(".main-video .video .main-video-title");

function playVideo(){
  videoList.forEach(item => item.classList.remove("active"));
  this.classList.add("active");
  let playing = this.children[0].getAttribute("src");
  let playingTitle = this.children[1].innerHTML;
  mainVideo.setAttribute("src", playing);
  mainTitle.innerHTML = playingTitle;
}

// ADDING EVENT LISTENER TO VIDEOS
videoList.forEach(vid => vid.addEventListener("click", playVideo));
