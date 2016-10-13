angular.module('services', ['ngResource'])
	.factory('alunoServices', function($resource) {
		
		return $resource('/api/aluno/:alunoId', null, {
			'update' : { 
				method: 'PUT'
			}
		});
	})
	.factory('cursoServices', function($resource) {
		
		return $resource('/api/curso/:cursoId', null, {
			'update' : { 
				method: 'PUT'
			}
		});
	})
	.factory('matriculaServices', function($resource) {
		
		return $resource('/api/matricula/:matriculaId', null, {
			'update' : { 
				method: 'PUT'
			}
		});
	})
	;