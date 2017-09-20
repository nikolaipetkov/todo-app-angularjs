angular.module('todoApp')
.factory('todoService', function($http, $q){
	return {
		getTodos: function(){
			return $http.get('/api/todos');
		},
		deleteTodo: function(formData){
			return $http.post('/api/deleteTodo/', formData);
		},
		updateTodo: function(formData){
			return $http.post('/api/updateTodo', formData);
		},
		addTodo: function(formData){
			return $http.post('/api/createTodo', formData);
		}
	}
})