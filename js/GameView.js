function GameView() {
	initGameView();

	//not in initGameView because this will be moved to the MatchView
	var redLogo = document.createElement("img");
	redLogo.id = "redLogo";
	document.body.appendChild(redLogo);

	var blueLogo = document.createElement("img");
	blueLogo.id = "blueLogo";
	document.body.appendChild(blueLogo);

	$("img").load(function() {
		var im = $(this)[0];
		console.log(im);
		if (im.naturalHeight < im.naturalWidth) {
			im.width = '53';
			im.height = (im.naturalHeight * 53 / im.naturalWidth).toString();
			var pad = ((55 - parseInt(im.height)) / 2) + 'px';
			im.style.padding = pad + ' 0px ' + pad + ' 0px';
		} else {
			im.height = '53';
			im.width = (im.naturalWidth * 53 / im.naturalHeight).toString();
			var pad = ((55 - parseInt(im.width)) / 2) + 'px';
			im.style.padding = '0px ' + pad + ' 0px ' + pad;
		}
	});

	// $(document).ready(function() {
	// 	console.log("red ready");
	// 	fitText($("#redScore")[0]);
	// 	fitText($("#blueScore")[0]);
	// 	fitText($("#time")[0]);
	// 	var vp = $("#viewPort");
	// 	vp.css("marginLeft", "0px");
	// 	vp.css("marginTop", "0px");
	// 	vp.css("border", "none");
	// });

	var public = {
		updateScore: function(score) {
			$("#redScore").html(score.red.toString());
			$("#blueScore").html(score.blue.toString());
		},

		updateTime: function(time) {
			//time is in seconds
			time = Math.ceil(time);
			var timeString = "";
			var minutes = Math.floor(time / 60);
			timeString += (minutes + ":");

			var seconds = time % 60;
			if (seconds >= 10) {
				timeString += seconds;
			} else {
				timeString += ("0" + seconds);
			}

			$("#time").html(timeString);
		},

		updateTeams: function(teams) {
			$("#redLogo").attr("src", chrome.extension.getURL(teams.red.logo));
			$("#blueLogo").attr("src", chrome.extension.getURL(teams.blue.logo));
			console.log(teams.red.logo);
			console.log(teams.blue.logo);
		}
	};

	return public;
}