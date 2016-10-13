angular.module('portabilis')
	.controller('CursosController', function($scope, cursoServices) {
	
	$scope.cursos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	cursoServices.query(function(cursos) {
		$scope.cursos = cursos;

/*		console.log($scope.cursos.periodo);

		switch($scope.cursos.periodo) {
    		case "1":
        		$scope.cursos.periodo = "Matutino";
        		break;
    		case "2":
        		$scope.cursos.periodo = "Vespertino";
        		break;
        	case "3":
        		$scope.cursos.periodo = "Integral";
        		break;
		}*/
	}, function(erro) {
		console.log(erro);
	});

	$scope.remover = function(curso) {

		cursoServices.delete({fotoId: curso.id}, function() {
			var indiceDoCurso = $scope.cursos.indexOf(curso);
			$scope.cursos.splice(indiceDoCurso, 1);
			$scope.mensagem = 'Foto ' + curso.titulo + ' removido com sucesso!';
		}, function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível apagar a curso ' + curso.titulo;
		});
	};

});
