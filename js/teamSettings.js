var teams = {
	"Rektiles": {
		"logo": "images/Rektiles.png",
		"uniform": true,
		"red": "rgb(52, 95, 41)"
	},
	"Capquistadors": {
		"logo": "images/Capquistadors.png",
		"uniform": true,
		"blue": "rgb(219, 168, 39)"
	},
	"none": {
	}
}

chrome.storage.local.set(teams, function() {
	console.log('Team Settings saved');
})