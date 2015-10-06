// Needed to store User Board information

var boardName = [];

var boardId = [];

var userOauthToken = "AUYMEosSS54QgVZguhR2_LpznL3zFAgEzg_bE-BCgyyTZ2AlZwAAAAA";

function pullBoardInfo() {

// Needed to pull JSON data from Pinterst
var boardRequestLink = "https://api.pinterest.com/v1/me/boards/?access_token=";

var convertedJSON;

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

//Fills a dropdown box with all of User's boards

function placeBoardNamesToDropdown(){

	var optionHolder = [];

	for (var i = 0; i < boardName.length; i++){
		optionHolder[i] = boardName[i];
	}

	for (var i = 0; i < optionHolder.length; i++) {
		document.getElementById("boardSelect").innerHTML += "<option value =" + "\"" + String(optionHolder[i]) + "\"" + ">" + String(optionHolder[i]) + "</option>";
	};

}


}


pullBoardInfo();


