angular.module('portabilis')
	.controller('AlunosController', function($scope, alunoServices) {
	
	$scope.alunos = [];
	$scope.aluno = {};
	$scope.filtro = '';
	$scope.mensagem = '';

	alunoServices.query(function(alunos) {
		$scope.alunos = alunos;
		$scope.alunos.data_nascimento = converteDataUser($scope.alunos.data_nascimento);
		for(var i=0; i<$scope.alunos.length; i++) {
    		$scope.alunos[i].data_nascimento = converteDataUser($scope.alunos[i].data_nascimento);
		}
		
	}, function(erro) {
		console.log(erro);
	});

	$scope.remover = function(aluno) {

		alunoServices.delete({fotoId: aluno.id}, function() {
			var indiceDoAluno = $scope.alunos.indexOf(aluno);
			$scope.alunos.splice(indiceDoAluno, 1);
			$scope.mensagem = 'Aluno ' + aluno.titulo + ' removido com sucesso!';
		}, function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível apagar a aluno ' + aluno.titulo;
		});
	};

	var converteDataUser = function(data) {
		var dataFormatada = new Date(data);
		return (dataFormatada.getDate() + 1) + '/'
			 + ((dataFormatada.getMonth() < 9 ? '0' : '') + (dataFormatada.getMonth() + 1)) + '/' 
			 + dataFormatada.getFullYear();
	};

});
