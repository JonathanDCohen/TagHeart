function GameView() {
	var redScore = document.createElement("div");
	redScore.className = "score";
	redScore.id = "redScore";
	document.body.appendChild(redScore);

	var blueScore = document.createElement("div");
	blueScore.className = "score";
	blueScore.id = "blueScore";
	document.body.appendChild(blueScore);

	var time = document.createElement("div");
	time.id = "time";
	document.body.appendChild(time);

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
		}
	};

	return public;
}