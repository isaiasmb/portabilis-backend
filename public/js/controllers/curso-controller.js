angular.module('portabilis')
	.controller('CursoController', function($scope, cursoServices, $routeParams) {
	
		$scope.curso = {};
		$scope.mensagem = '';

		if($routeParams.cursoId) {
			cursoServices.get({cursoId: $routeParams.cursoId}, function(curso) {
				$scope.curso = curso; 
			}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter a curso'
			});
		}

		$scope.submeter = function() {

			if ($scope.formulario.$valid) {



				if($routeParams.cursoId) {

					cursoServices.update({cursoId: $scope.curso.id}, 
						$scope.curso, function() {
						$scope.mensagem = 'Curso alterado com sucesso';
					}, function() {
						console.log(erro);
						$scope.mensagem = 'Não foi possível alterar';
					});

				} else { 

					cursoServices.save($scope.curso,function() {
						$scope.curso = {};
						$scope.mensagem = 'Curso cadastrado com sucesso';
					}, function(erro) {
						console.log(erro);
						$scope.mensagem = 'Não foi possível cadastrar a curso';
					});
				}

				console.log($scope.curso);
				console.log($scope.mensagem);
			}
		};

});