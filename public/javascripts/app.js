var app = angular.module('todoApp',[
	'ui.router']);
app.controller('mainController', function($scope, $log, $http, $state, $q, todoService) {
    $scope.todos = [];
    $scope.formData = {};
    $scope.formData.newTodo = 'new';
    $scope.formData.status = 0;

    todoService.getTodos().then(function(resp){
    	$scope.todos = resp.data;
    })

	$scope.deleteTodo = function(idToDelete){
		$scope.formData.idToDelete = idToDelete;
		todoService.deleteTodo($scope.formData).then(function(resp){
			$scope.todos = resp.data[1];
		})
	}

    

    $scope.updateTodo = function(idToUpdate, status){
    	$scope.formData.idToUpdate = idToUpdate;
    	$scope.formData.status = status || 0;
    	todoService.updateTodo($scope.formData).then(function(resp){
    		$scope.todos = resp.data[1];
    	})
    	
    }

    $scope.addTodo = function(status){
    	$scope.formData.status = status;
    	todoService.addTodo($scope.formData).then(function(resp){
    		$scope.todos = resp.data[1];
    	})
    }
})




