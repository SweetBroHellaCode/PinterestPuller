
//var boardPinRequestLink = "https://api.pinterest.com/v1/boards/";

var selectedBoard;

// Searches user's board names to see if there is a match to their selection


function compareToUserSelection() {
	userSelection = document.getElementById("boardSelect").value;
	for (var i = 0; i < boardId.length; i++) {
		if(userSelection.toLowerCase() == boardName[i].toLowerCase()) {
		selectedBoard = boardId[i];
			retrieveBoardPins("https://api.pinterest.com/v1/boards/" + selectedBoard + "/pins/" + "?access_token=" + userOauthToken);

			}
		}


	}

//Searches selected board and pulls information about each pin contained inside

	function retrieveBoardPins(url) {
		var request = new XMLHttpRequest();
		request.open('GET', url);
		request.onreadystatechange = function() {
			if((request.status == 200) && (request.readyState == 4)) {
				convertedJSON = JSON.parse(request.responseText);

				}
				getPinUrl();
				
			}
			request.send();

		}

		
// Pulls the URL of the source image for a pin and displays it on screen

function getPinUrl() {
	pinUrl = "";
	for (var i = 0; i < convertedJSON.data.length; i++) {
		pinUrl += convertedJSON.data[i].link + " ";
	};
	document.getElementById("printIdUrl").innerHTML = pinUrl;
}

	