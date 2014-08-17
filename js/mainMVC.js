var gm = new GameModel(0, 0, 1000);

function script() {
	function updateTime(time) {
		//time is in seconds

		if (time < 0) {return;}

		time = Math.floor(time);
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

	function updateScore(score) {
		$("#redScore").html(score.r.toString());
		$("#blueScore").html(score.b.toString());
	}

	var timer = setInterval(function(){
			updateTime((tagpro.gameEndsAt-(new Date).getTime()) / 1000);
	}, 1000);

	tagpro.socket.on('score', function(e) {
		updateScore(tagpro.score)
	;});

	//this is the general player update event
	//fill roster slots
	function joinPlayer(player, redRows, blueRows) {
		if (redRows.length > 0) {
			var redCount = redRows[redRows.length - 1].childNodes.length;
		} else {
			var redCount = 0;
		}
		if (blueRows.length > 0) {
			var blueCount = blueRows[blueRows.length - 1].childNodes.length;
		} else {
			var blueCount = 0;
		}

		var cell = document.createElement('td');
		cell.innerText = player.name;
		cell.id = i.toString();
		if (player.team === 1) {
			if ((redCount % 2) === 0) {
				var row = document.createElement('tr');
				redRows.push(row);
				// row.id = "redRow" + redCount.toString();
				document.getElementById("redRoster").appendChild(row);
			}
			redRows[redRows.length - 1].appendChild(cell);
		} else if (player.team === 2) {
			if ((blueCount % 2) === 0) {
				var row = document.createElement('tr');
				blueRows.push(row);
				document.getElementById("blueRoster").appendChild(row);

			}
			// document.getElementById("blueRow").appendChild(cell);
			blueRows[blueRows.length - 1].appendChild(cell);
		}
		console.log(redRows);
		console.log(redCount);
		console.log(blueRows);
		console.log(blueCount);
		return {"redRows": redRows, "blueRows": blueRows};
	}

	function refreshRosters() {
		// var redRows = new Array(), blueRows = new Array();
		document.getElementById("redRoster").innerHTML = "";
		document.getElementById("blueRoster").innerHTML = "";
		var rows = {"redRows": new Array(), "blueRows": new Array()};
		for (var i in tagpro.players) {
			rows = joinPlayer(tagpro.players[i], rows.redRows, rows.blueRows);
		}
	}

	refreshRosters();
	tagpro.socket.on("p", function(e) {
		for (var i in e.u) { //e.u is the list of players with changes
			var player = e.u[i];
			if (!document.getElementById(player.id.toString())) {
				refreshRosters(); 
				break; //only need to refresh once, everything is already in tagpro.players
			}
		} 
	});
}

$(document).ready(function() {
	var source = "(" + script + ")()";
	var thescript = document.createElement('script');
	thescript.setAttribute("type", "application/javascript");
	thescript.textContent = source;
    document.body.appendChild(thescript);
});