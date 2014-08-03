// // var jQuery = document.createElement('script');
// // jQuery.src = '//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js';

// var jUIlink = document.createElement('link');
// jUIlink.rel = "stylesheet";
// jUIlink.href = "//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/themes/smoothness/jquery-ui.css";

// var jUIscript = document.createElement('script');
// jUIscript.src = "//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js";

// document.head.appendChild(jUIlink);
// document.head.appendChild(jUIscript);
// // document.head.appendChild(jQuery);

// var leftBanner = document.createElement('img');
// leftBanner.src = chrome.extension.getURL('./images/TPTVLeftBanner.png');
// leftBanner.style.position = 'absolute';
// leftBanner.style.left = '0px';
// leftBanner.style.top = '0px';
// document.body.appendChild(leftBanner);

// var rightBanner = document.createElement('img');
// rightBanner.src = chrome.extension.getURL('./images/TPTVRightBanner.png');
// rightBanner.style.position = 'absolute';
// rightBanner.style.right = '0px';
// rightBanner.style.top = '0px';
// document.body.appendChild(rightBanner);

// var scoreLine = document.createElement('div');
// scoreLine.id = 'scoreLine'
// scoreLine.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
// scoreLine.style.width = '1152px';
// scoreLine.style.height = '55px';
// scoreLine.style.position = 'absolute';
// scoreLine.style.left = '64px';
// scoreLine.style.top = '0px';

// var redLogo = document.createElement('img');
// redLogo.style.position = 'absolute';
// // redLogo.style.top = 'auto';
// redLogo.id = 'redLogo';
// redLogo.src = chrome.extension.getURL('./images/RKT.png');

// var blueLogo = document.createElement('img');
// blueLogo.style.position = 'absolute';
// blueLogo.style.right = '0px';
// blueLogo.id = 'blueLogo';
// blueLogo.src = chrome.extension.getURL('./images/CQD.png');

// // ---------- team rosters ---------- \\
// var redRoster = document.createElement('table');
// redRoster.style.height = '53px';
// redRoster.style.padding = '1px';
// redRoster.style.borderSpacing = '2px';
// redRoster.style.position = 'absolute';
// redRoster.style.top = '0px';
// redRoster.style.left = '55px';
// for (var rowNum = 0; rowNum < 2; rowNum++) {
// 	var row = document.createElement('tr');
// 	for (var cellNum = 0; cellNum < 2; cellNum++) {
// 		var cell = document.createElement('td');
// 		cell.style.background = '-webkit-linear-gradient(left, rgba(160, 0, 0, 1), rgba(0, 0, 0, 0) 35%)';
// 		cell.innerHTML = 'Player ' + (cellNum + 1 + 2 * rowNum).toString();
// 		cell.style.border = 'thin solid rgb(150, 0, 0)';
// 		cell.style.borderRadius = '1px';
// 		cell.style.color = 'White';
// 		cell.style.fontFamily = 'Arial';
// 		cell.style.width = '208px';
// 		row.appendChild(cell);
// 	}
// 	redRoster.appendChild(row);
// }

// var blueRoster = document.createElement('table');
// blueRoster.style.height = '53px';
// blueRoster.style.padding = '1px';
// blueRoster.style.borderSpacing = '2px';
// blueRoster.style.position = 'absolute';
// blueRoster.style.top = '0px';
// blueRoster.style.right = '55px';
// for (var rowNum = 0; rowNum < 2; rowNum++) {
// 	var row = document.createElement('tr');
// 	for (var cellNum = 0; cellNum < 2; cellNum++) {
// 		var cell = document.createElement('td');
// 		cell.style.background = '-webkit-linear-gradient(right, rgba(0, 0, 160, 1), rgba(0, 0, 0, 0) 35%)';
// 		cell.innerHTML = 'Player ' + (cellNum + 1 + 2 * rowNum).toString();
// 		cell.style.border = 'thin solid rgb(0, 0, 150)';
// 		cell.style.textAlign = 'right';
// 		cell.style.borderRadius = '1px';
// 		cell.style.color = 'White';
// 		cell.style.fontFamily = 'Arial';
// 		cell.style.width = '208px';
// 		row.appendChild(cell);
// 	}
// 	blueRoster.appendChild(row);
// }

// scoreLine.appendChild(redLogo);
// scoreLine.appendChild(blueLogo);
// scoreLine.appendChild(redRoster);
// scoreLine.appendChild(blueRoster);
// document.body.appendChild(scoreLine);

// function TPTVScript() {

// 	function isWideImage(im) {
// 		return im.naturalHeight < im.naturalWidth;
// 	}
// 	window.onload = function() {
// 		console.log(isWideImage(blueLogo));
// 		console.log(blueLogo.naturalHeight);
// 		console.log(blueLogo.naturalWidth);

// 		if (isWideImage(redLogo)) {
// 			redLogo.width = '53';
// 			redLogo.height = (redLogo.naturalHeight * 53 / redLogo.naturalWidth).toString();
// 			var pad = ((55 - parseInt(redLogo.height)) / 2) + 'px';
// 			redLogo.style.padding = pad + ' 0px ' + pad + ' 0px';

// 		} else {
// 			redLogo.height = '53';
// 			redLogo.width = (redLogo.naturalWidth * 53 / redLogo.naturalHeight).toString();
// 			var pad = ((55 - parseInt(redLogo.width)) / 2) + 'px';
// 			redLogo.style.padding = '0px ' + pad + ' 0px ' + pad;
// 		}

// 		if (isWideImage(blueLogo)) {
// 			blueLogo.width = '53';
// 			blueLogo.height = (blueLogo.naturalHeight * 53 / blueLogo.naturalWidth).toString();
// 			var pad = ((55 - parseInt(blueLogo.height)) / 2) + 'px';
// 			blueLogo.style.padding = pad + ' 0px ' + pad + ' 0px';
// 		} else {
// 			blueLogo.height = '53';
// 			blueLogo.width = (blueLogo.naturalWidth * 53 / blueLogo.naturalHeight).toString();
// 			var pad = ((55 - parseInt(blueLogo.width)) / 2) + 'px';
// 			blueLogo.style.padding = '0px ' + pad + ' 0px ' + pad;
// 		}
// 	}



// };

// var source = "(" + TPTVScript + ")()";
// var thescript = document.createElement('script');
// thescript.setAttribute("type", "application/javascript");
// thescript.textContent = source;
// document.body.appendChild(thescript);