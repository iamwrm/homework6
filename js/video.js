var video;

function getVid() {
	video = document.querySelector("#myVideo");
}

function playVid() {
	video.play();
	videoVolume = document.querySelector("#volumeSlider");
	volumeIndicator = document.querySelector("#volume")
	volumeIndicator.innerHTML = videoVolume.value + '%'
	console.log("Play Video");
}

function pauseVid() {
	video.pause();
	console.log("Pause Video");
}

function decreaseSpeed() {
	video.playbackRate *= 0.8
	console.log("Speed is " + video.playbackRate);
}

function increaseSpeed() {
	video.playbackRate *= 1.25
	console.log("Speed is " + video.playbackRate);
}

function skipAhead() {
	// TODO: 
	newTime = video.currentTime + 60;

	if (newTime > video.duration) {
		newTime = 0;
		video.playbackRate = 1;
	}

	video.currentTime = newTime;
	console.log("Current location is " + video.currentTime);
}

function mute() {
	muteButton = document.querySelector("#mute");
	if (video.muted) {
		video.muted = false;
		console.log("Unmuted");
		muteButton.innerHTML = 'mute'
	} else {
		video.muted = true;
		console.log("Muted");
		muteButton.innerHTML = 'unmute'
	}
}

function changeVolume() {
	videoVolume = document.querySelector("#volumeSlider");
	video.volume = videoVolume.value / 100
	document.querySelector("#volume").innerHTML = videoVolume.value + '%'

	console.log("Volume is " + videoVolume.value);
	console.log("Inner html is " + videoVolume.value);
}


function gray() {
	video.style.filter = "grayscale(100%)";
	console.log("In grayscale")
}

function color() {
	video.style.filter = "grayscale(0%)";
	console.log("In color")
}
