function pullBoardInfo() {

// Needed to pull JSON data from Pinterst
var boardRequestLink = "https://api.pinterest.com/v1/me/boards/?access_token=";

var userOauthToken = "AUYMEosSS54QgVZguhR2_LpznL3zFAgEzg_bE-BCgyyTZ2AlZwAAAAA";

var convertedJSON;

// Needed to store User Board information

var boardName = [];

var boardId = [];

// Needed to store User's Pins from selected Board

var selectedBoard;


// Request for Pinterest User's JSON data

requestData = function (url) { 
		var request = new XMLHttpRequest();
		request.open('GET', url);
		request.onreadystatechange = function() {
			if((request.status == 200) && (request.readyState == 4)) {
				convertedJSON = JSON.parse(request.responseText);

			retrieveBoardId();
			retrieveBoardName();
			placeBoardNamesToDropdown();

				}
				
			}
			request.send();
		}

requestData(boardRequestLink + userOauthToken);

// Pulls all of user's Board IDs from JSON

function retrieveBoardId(){

	for (var i = 0; i < convertedJSON.data.length; i++) {
		boardId.push(convertedJSON.data[i].id);
	}
}

// Pulls all of user's Board Names from JSON

function retrieveBoardName(){
	for (var i = 0; i < convertedJSON.data.length; i++) {
		boardName.push(convertedJSON.data[i].name);
	}
}

function placeBoardNamesToDropdown(){
	document.getElementById("boardSelect").innerHTML = "<select>";
	var optionHolder = [];

	for (var i = 0; i < boardName.length; i++){
		optionHolder[i] = boardName[i];
	}

	for (var i = 0; i < optionHolder.length; i++) {
		console.log("Hello");
		document.getElementById("boardSelect").innerHTML = "<optgroup label="+'\'Board Names\'>'
		document.getElementById("boardSelect").innerHTML = "<option value =" + "\"" + String(optionHolder[i]) "\"" + ">" + String(optionHolder[i]);
	};


	 	//document.getElementById("boardSelect").innerHTML = "<option value =" + "\"" + String(optionHolder[i]) "\"" + ">" + String(optionHolder[i]);
	};

	document.getElementById("boardSelect").innerHTML = "</option>";
	document.getElementById("boardSelect").innerHTML = "</optgroup>";
	document.getElementById("boardSelect").innerHTML = "</select>";

	//document.getElementById("demo").innerHTML =

}

// Searches user's board names to see if there is a match to their selection

function compareToUserSelection() {
	for (var i = 0; i < boardId.length; i++) {
	if(userSelection.toLowerCase() == boardName.get(i).toLowerCase()) {
		selectedBoard = boardId[i];

		}
	}

}

pullBoardInfo();