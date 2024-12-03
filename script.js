let audio = document.getElementById('background-audio');
let isPlaying = false;
let currentTime = 0;

document.addEventListener("DOMContentLoaded", function () {
    audio.play();
    isPlaying = true;
});

function playAudio() {
    if (!isPlaying) {
        audio.currentTime = currentTime;
        audio.play();
        isPlaying = true;
    }
}

function pauseAudio() {
    if (isPlaying) {
        currentTime = audio.currentTime;
        audio.pause();
        isPlaying = false;
    }
}

// Ensure only one audio plays at a time
document.addEventListener('play', function(e) {
    let audios = document.getElementsByTagName('audio');
    for (let i = 0, len = audios.length; i < len; i++) {
        if (audios[i] != e.target) {
            audios[i].pause();
        }
    }
}, true);