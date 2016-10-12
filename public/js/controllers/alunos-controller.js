angular.module('portabilis')
	.controller('AlunosController', function($scope, alunoServices) {
	
	$scope.alunos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	alunoServices.query(function(alunos) {
		$scope.alunos = alunos;
	}, function(erro) {
		console.log(erro);
	});

	$scope.remover = function(aluno) {

		alunoServices.delete({fotoId: aluno._id}, function() {
			var indiceDaFoto = $scope.alunos.indexOf(aluno);
			$scope.alunos.splice(indiceDaFoto, 1);
			$scope.mensagem = 'Foto ' + aluno.titulo + ' removido com sucesso!';
		}, function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível apagar a aluno ' + aluno.titulo;
		});
	};

});
