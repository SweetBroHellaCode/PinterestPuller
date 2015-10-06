var app = angular.module('app.Controllers', []);

app.controller('appCtrl', function($scope, $http) {

	function fetch() {

		$http({
		    method:'GET',
		    url: boardRequestLink + userOauthToken
		  }).then(function successCallback(response){
		    convertedJSON = response.data;

		    retrieveBoardId();
			retrieveBoardName();
			placeBoardNamesToDropdown();

		  });
	}
})