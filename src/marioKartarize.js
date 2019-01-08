var Raptorize = function (extended) {
	'use strict';

	var body, defaults, options,
		audioTemplate, sourceAudioTemplate, imageTemplate,
		audio, image;

	body = document.body;
	options = {};

	//--- OPTIONS ---//
	defaults = {
		audioPath: [chrome.extension.getURL('MarioKartCountdown.mp3')],
		imagePath: chrome.extension.getURL('mario.png'),

		className: 'raptor',
		animationTime: 3000
	};

	extend(options, defaults, extended);

	//--- SETUP ---//
	audioTemplate = document.createElement('audio');
	audioTemplate.className = options.className + '-source';

	for (var source in options.audioPath) {
		sourceAudioTemplate = document.createElement('source');
		sourceAudioTemplate.src = options.audioPath[source];
		audioTemplate.appendChild(sourceAudioTemplate);
	}

	imageTemplate = document.createElement('img');
	imageTemplate.className = options.className;
	imageTemplate.src = options.imagePath;

	audio = body.appendChild(audioTemplate);
	image = body.appendChild(imageTemplate);

	image.style.display = 'none';

	//--- THE HILARITY ---//
	function go() {
		audio.play();

		image.style.display = 'block';
		setTimeout(function () {
			image.classList.add(options.className + '-go');
		}, options.animationTime);


		setTimeout(function () {
			image.classList.remove(options.className + '-go');
		}, options.animationTime * 2);
	}

	//--- EXTEND (COMMON) ---//
	// Use Object.assign() for EcmaScript 6.
	function extend(out) {
		out = out || {};

		for (var i = 1; i < arguments.length; i++) {
			if (!arguments[i]) {
				continue;
			}
			for (var key in arguments[i]) {
				if (arguments[i].hasOwnProperty(key)) {
					out[key] = arguments[i][key];
				}
			}
		}

		return out;
	}

	// return {
	// 	go: go
	// };
	go();
};



//--- USAGE ---//
// var myRaptor = Raptorize();
// setTimeout(function() {
// 	myRaptor.go();
// }, 3000);
