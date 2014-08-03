function GameModel(_redScore, _blueScore, _timeDelta) {
	var gameView = new GameView();
	var redScore = _redScore || 0, blueScore = _blueScore || 0;
	var timeDelta = _timeDelta || 100;
	var gameTime;
	var timer;

	var public = {
		setScore: function(score, team) {
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
		},

		setTimer: function(time) {
			timer && clearInterval(timer);
			gameTime = time || 10 * 60;
			timer = setInterval(function() {
				gameTime -= timeDelta / 1000;
				if (gameTime < 0) {
					clearInterval(timer);
				} else {
					gameView.updateTime(gameTime);
				}
			}, timeDelta);
		}
	};

	public.setTimer();
	public.setScore();
	return public;
}