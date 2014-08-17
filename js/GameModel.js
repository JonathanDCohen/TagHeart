function GameModel(_redScore, _blueScore, _redTeam, _blueTeam, _timeDelta) {
	var gameView = new GameView();
	var redTeam = _redTeam || "none", blueTeam = _blueTeam || "none";
	var redScore = _redScore || 0, blueScore = _blueScore || 0;
	var timeDelta = _timeDelta || 100;
	var gameTime;
	var timer;

	function setTeams(teams) {
		redTeam = teams.red;
		blueTeam = teams.blue;
		gameView.updateTeams(teams);
	}

	function setScore(score, team) {
		switch(team) {
			case "red":
				redScore = score;
				break;
			case "blue":
				blueScore = score;
				break;
			default:
				redScore = (score && score.red) || redScore;
				blueScore = (score && score.blue) || blueScore;
				break;
		}
		gameView.updateScore({
			red: redScore, 
			blue: blueScore
		});
	}

	// function setTimer(time) {
	// 	timer && clearInterval(timer);
	// 	gameTime = time || 10 * 60;
	// 	timer = setInterval(function() {
	// 		gameTime -= timeDelta / 1000;
	// 		if (gameTime < 0) {
	// 			clearInterval(timer);
	// 		} else {
	// 			gameView.updateTime(gameTime);
	// 		}
	// 	}, timeDelta);
	// }

	// setTimer();
	setScore();

	chrome.runtime.onMessage.addListener(
		function(request, sender, sendResponse) {
		    console.log(sender.tab ?
	                "from a content script:" + sender.tab.url :
	                "from the extension");
		    if (request.msgType == "teamChange") {
			    sendResponse({farewell: "goodbye"});
			    console.log(request);
			    chrome.storage.local.get(request.red, function(items) {
			    	console.log(items[request.red]);
			    });
			    chrome.storage.local.get(request.blue, function(items) {
			    	console.log(items[request.blue]);
			    });
			    chrome.storage.local.get([request.blue, request.red], function(items) {
			    	setTeams({red: items[request.red], blue: items[request.blue]});
			    });
			}
	    }
	);
}