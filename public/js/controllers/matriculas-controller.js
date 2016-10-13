angular.module('portabilis')
	.controller('MatriculasController', function($scope, matriculaServices) {
	
	$scope.matriculas = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	matriculaServices.query(function(matriculas) {
		$scope.matriculas = matriculas;
		console.log($scope.matriculas);
	}, function(erro) {
		console.log(erro);
	});

	$scope.remover = function(matricula) {

		matriculaServices.delete({fotoId: matricula.id}, function() {
			var indiceDaMatricula = $scope.matriculas.indexOf(matricula);
			$scope.matriculas.splice(indiceDaMatricula, 1);
			$scope.mensagem = 'Foto ' + matricula.titulo + ' removido com sucesso!';
		}, function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível apagar a matricula ' + matricula.titulo;
		});
	};

});
