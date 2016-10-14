angular.module('portabilis')
	.controller('CursosController', function($scope, cursoServices, $filter) {
	
	$scope.cursos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	cursoServices.query(function(cursos) {
		$scope.cursos = cursos;

	}, function(erro) {
		console.log(erro);
	});

	$scope.remover = function(curso) {

		cursoServices.delete({fotoId: curso.id}, function() {
			var indiceDoCurso = $scope.cursos.indexOf(curso);
			$scope.cursos.splice(indiceDoCurso, 1);
			$scope.mensagem = 'Curso ' + curso.titulo + ' removido com sucesso!';
		}, function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível apagar a curso ' + curso.titulo;
		});
	};


});
