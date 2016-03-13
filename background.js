var audioElement = document.createElement('audio');
audioElement.setAttribute("preload", "auto");
audioElement.autobuffer = true;
var source1 = document.createElement('source');
source1.type = 'audio/mpeg';
source1.src = 'Jaws_Theme_Song.mp3';
audioElement.appendChild(source1);
audioElement.load;

function isPlaying() {
	return !audioElement.paused && !audioElement.ended && 0 < audioElement.currentTime;
}

chrome.extension.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.action == "play" && isPlaying()) {
			audioElement.play();
			// alert("play");
		} else if (request.action == "stop" && isPlaying()) {
			audioElement.pause();
			audioElement.currentTime = 0;
			// alert("stop");
		}
	});