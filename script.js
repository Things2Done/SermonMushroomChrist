
const video = document.getElementById("churchVideo");
video.addEventListener("click", function() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});
