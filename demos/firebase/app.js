var app = angular.module('app',['firebase']);
app.controller('chat', function($scope, $firebase){
	$scope.msgs = ['Input Message And Press ENTER'];
	$scope.msg = "";
	$scope.$fb = $firebase(new Firebase("https://brilliant-fire-4470.firebaseio.com/msgs"));

	$scope.$fb.$on("child_added", function(snapshot) {
		$scope.msgs.unshift(snapshot.snapshot.value);
		$scope.msgs.splice(100);	// max size of messages
	});

	$scope.send = function(){
		if($scope.msg){
			$scope.$fb.$add($scope.msg);
			$scope.msg = "";
		}
	}

	$scope.keypress = function($e){
		if($e.charCode == 13){
			$scope.send();
		}
	}
});
