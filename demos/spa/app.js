var SinCheck = angular.module('SinCheck',['ngRoute', 'ui.bootstrap', 'ngGrid']);
function AppList($scope){
	$scope.apps = [
		{
			name:'App1',
			datetime:'2014-06-11',
			id:0
		},
		{
			name:'App2',
			datetime:'2014-06-11',
			id:1
		},
		{
			name:'App3',
			datetime:'2014-06-11',
			id:2
		},
		{
			name:'App4',
			datetime:'2014-06-11',
			id:3
		}
	];

	$scope.gridOptions = {
		data: 'apps', 
		columnDefs: [
			{field:'name', displayName:'应用'},
			{field:'datetime', displayName:'时间'},
			{field:'name', cellTemplate:'<div class="ngCellText" ng-class="col.colIndex()"><a ng-hide="row.entity.changed" href="#/{{COL_FIELD}}">查看</a> <a ng-click="remove(row)">删除</a> <a ng-show="row.entity.changed" ng-click="save(row)">保存</a></div>', enableCellEdit:false, displayName:'操作', sortable: false}
		],
		multiSelect: false,
		enableHighlighting: true,
		enableCellEdit: true,
	};

	$scope.remove = function(row){
		$scope.apps.splice(row.rowIndex, 1);
	};
	$scope.save = function(row){
		var app = row.entity;
		// save
		delete app.changed;
		delete app.isnew;
	};
	$scope.add = function(){
		$scope.apps.push(		{
			name: 'App4',
			datetime: '2014-06-11',
			changed: true,
			isnew: true,
			id:3
		});
	}
}

function VerList($scope, $routeParams){
	$scope.app = $routeParams.app;
	$scope.vers = [
		{
			version:'1.0',
			datetime:'2014-06-11'
		},
		{
			version:'2.0',
			datetime:'2014-06-12'
		},
		{
			version:'3.0',
			datetime:'2014-06-13'
		},
		{
			version:'4.0',
			datetime:'2014-06-14'
		},
	];
	$scope.gridOptions = {
		data: 'vers', 
		columnDefs: [
			{field:'version', displayName:'版本'},
			{field:'datetime', displayName:'时间'},
			{field:'version', cellTemplate:'<div class="ngCellText" ng-class="col.colIndex()"><a ng-hide="row.entity.changed" href="#/{{app}}/{{COL_FIELD}}">查看</a> <a ng-click="remove(row)">删除</a> <a ng-show="row.entity.changed" ng-click="save(row)">保存</a></div>', enableCellEdit:false, displayName:'操作', sortable: false}
		],
		multiSelect: false,
		enableHighlighting: true,
		enableCellEdit: true,
	};
	$scope.remove = function(row){
		$scope.vers.splice(row.rowIndex, 1);
	};
	$scope.save = function(row){
		var app = row.entity;
		// save
		delete app.changed;
		delete app.isnew;
	};
	$scope.add = function(){
		$scope.vers.push(		{
			version:'4.0',
			datetime:'2014-06-14',
			changed: true,
			isnew: true,
		});
	}
}

function VerDetail($scope, $routeParams){
	$scope.app = $routeParams.app;
	$scope.ver = $routeParams.ver;
	$scope.cfgs = [];
	$scope.cfg = {
		'message':null,
		'last':'1.2.0'
	};


	for(var k in $scope.cfg){
		$scope.cfgs.push({
			key:k,
			val:$scope.cfg[k]
		});
	}


	$scope.gridOptions = {
		data: 'cfgs', 
		columnDefs: [
			{field:'key', displayName:'键'},
			{field:'val', displayName:'值'},
			{field:'key', cellTemplate:'<div class="ngCellText" ng-class="col.colIndex()"><a ng-click="remove(row)">删除</a></div>', enableCellEdit:false, displayName:'操作', sortable: false}
		],
		multiSelect: false,
		enableHighlighting: true,
		enableCellEdit: true,
	};

	$scope.remove = function(row){
		$scope.cfgs.splice(row.rowIndex, 1);
	};
	$scope.add = function(){
		$scope.cfgs.push({
			key:'name',
			val:'value'
		});
	}
}

function routeConfig($routeProvider){
	$routeProvider
		.when('/', {
			controller:AppList,
			templateUrl:'applist.html'
		})
		.when('/:app', {
			controller:VerList,
			templateUrl:'verlist.html'
		})
		.when('/:app/:ver', {
			controller:VerDetail,
			templateUrl:'verdetail.html'
		})
		.otherwise({
			redirectTo: '/'
		});
}




SinCheck.config(['$routeProvider', routeConfig]);











