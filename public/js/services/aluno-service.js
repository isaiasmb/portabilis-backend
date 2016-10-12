angular.module('services', ['ngResource'])
	.factory('alunoServices', function($resource) {
		
		return $resource('/api/aluno/:alunoId', null, {
			'update' : { 
				method: 'PUT'
			}
		});
	});