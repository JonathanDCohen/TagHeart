
document.addEventListener("DOMContentLoaded", function() {
	// var port = chrome.runtime.connect({name:"options-page"});
	document.getElementById("saveOptions").onclick = function() {
		var redSelector = document.getElementById("redTeam");
		var redTeam = redSelector.options[redSelector.selectedIndex].text;
		var blueSelector = document.getElementById("blueTeam");
		var blueTeam = blueSelector.options[blueSelector.selectedIndex].text;

		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			var message = {
				msgType: "teamChange",
				red: redTeam,
				blue: blueTeam
			};
			chrome.tabs.sendMessage(tabs[0].id, message, function(response) {
			    console.log(response.farewell);
		    });
		});
		var p = document.getElementById('abc');
		p.innerText = 'abc';
	};
});