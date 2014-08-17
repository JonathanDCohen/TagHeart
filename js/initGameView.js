function initGameView() {	
	var scoreLine = document.createElement('div');
	scoreLine.id = 'scoreLine'

	var redLogo = document.createElement('img');
	redLogo.id = 'redLogo';
	redLogo.className = 'logo';

	var blueLogo = document.createElement('img');
	blueLogo.id = 'blueLogo';
	blueLogo.className = 'logo';

	// ---------- team rosters ---------- \\
	var redRoster = document.createElement('table');
	redRoster.id = "redRoster";
	redRoster.className = "roster";
	// for (var rowNum = 0; rowNum < 2; rowNum++) {
	// 	var row = document.createElement('tr');
	// 	for (var cellNum = 0; cellNum < 2; cellNum++) {
	// 		var cell = document.createElement('td');
	// 		var playerStr = 'Player ' + (cellNum + 1 + 2 * rowNum);
	// 		cell.innerHTML = playerSt;
	// 		cell.id = playerSt;
	// 		cell.className = "player";
	// 		row.appendChild(cell);
	// 	}
	// 	redRoster.appendChild(row);
	// }

	var blueRoster = document.createElement('table');
	blueRoster.id = "blueRoster";
	blueRoster.className = "roster";
	// for (var rowNum = 0; rowNum < 2; rowNum++) {
	// 	var row = document.createElement('tr');
	// 	for (var cellNum = 0; cellNum < 2; cellNum++) {
	// 		var cell = document.createElement('td');
	// 		cell.innerHTML = 'Player ' + (cellNum + 1 + 2 * rowNum).toString();
	// 		cell.className = "player";
	// 		row.appendChild(cell);
	// 	}
	// 	blueRoster.appendChild(row);
	// }

	var time = document.createElement("div");
	time.id = "time";

	var redScore = document.createElement("div");
	redScore.innerText = 0;
	redScore.id = "redScore";

	var blueScore = document.createElement("div");
	blueScore.innerText = 0;
	blueScore.id = "blueScore";

	scoreLine.appendChild(redLogo);
	scoreLine.appendChild(blueLogo);
	scoreLine.appendChild(redRoster);
	scoreLine.appendChild(time);
	scoreLine.appendChild(blueRoster);
	scoreLine.appendChild(redScore);
	scoreLine.appendChild(blueScore);
	document.body.appendChild(scoreLine);

	// //fill roster slots
	// var redTeam = {}, blueTeam = {};
	// var redCount = 0, blueCount = 0;
	// for(var i in tagpro.players) {
	// 	var player = tagpro.players[i];
	// 	if (player.team === 1) {
	// 		var cell = document.createElement('td');
	// 		cell.innerText = player.name;
	// 		cell.id = i + "";
	// 		if (redCount % 2 === 0) {
	// 			var row = document.createElement('tr');
	// 			row.id = "redRow";
	// 			document.getElementById("redRoster").appendChild(row);
	// 		}
	// 		document.getElementById("redRow").appendChild(cell);
	// 		redCount++;
	// 	} else if (player.team === 2) {
	// 		var cell = document.createElement('td');
	// 		cell.innerText = player.name;
	// 		cell.id = i + "";
	// 		if (blueCount % 2 === 0) {
	// 			var row = document.createElement('tr');
	// 			row.id = "blueRow";
	// 			document.getElementById("blueRoster").appendChild(row);
	// 		}
	// 		document.getElementById("blueRow").appendChild(cell);
	// 		blueCount++;
	// 	}
	// }
}