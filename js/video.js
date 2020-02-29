var video;

function getVid() {
	video = document.querySelector("#myVideo");

	var buttons = document.getElementsByTagName('button');

	b1 = true
	b2 = true

	for (var i = 0; i < buttons.length; i++) {
		if (b1) {
			if (buttons[i].type == 'button' && buttons[i].className == 'play') {
				b1 = false
				buttons[i].innerHTML = '<img src="./img/new_play.png">' + buttons[i].innerHTML
			}
		}
		if (b2) {
			if (buttons[i].type == 'button' && buttons[i].className == 'pause') {
				b2 = false
				buttons[i].innerHTML = '<img src="./img/new_pause.png">' + buttons[i].innerHTML
			}
		}
		if (!b1 && !b2) {
			break;
		}
	}
	/*
	Copyrights Information:
	The above images "./img/new_play.png" and "./img/new_pause.png" is 
	created by Ren Wang
	All rights reserved
	*/

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
	videoVolumeSlider = document.querySelector("#volumeSlider");

	video.volume = videoVolumeSlider.value / 100
	document.querySelector("#volume").innerHTML = videoVolumeSlider.value + '%'

	console.log("Volume is " + videoVolumeSlider.value);
}


function gray() {
	video.className = "grayscale"
	console.log("In grayscale")
}

function color() {
	video.className = ""
	console.log("In color")
}
