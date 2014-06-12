
function Calculator($scope){
	$scope.scr="0";
	$scope.ope = '';
	$scope.cls = false;
	$scope.onKey = function(ch){
		switch(ch){
			case '0':
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
				if($scope.scr == '0' || $scope.cls){
					$scope.scr = ch;
					$scope.cls = false;
				}
				else
					$scope.scr = $scope.scr +ch;
				break;
			case 'C':
				$scope.scr="0";
				$scope.ope = '';
				break;
			case '+':
			case '-':
			case '*':
			case '/':
				$scope.num1 = $scope.scr;
				$scope.ope = ch;
				$scope.cls = true;
				break;
			case '=':
				if($scope.num1 && $scope.ope){
					var exp = $scope.num1 + $scope.ope + $scope.scr;
					$scope.scr = $scope.$eval(exp);
					$scope.cls = true;
					console.log(exp);
					$scope.num1 ='';
					$scope.ope = '';
				}
				break;
		}
	}
}
