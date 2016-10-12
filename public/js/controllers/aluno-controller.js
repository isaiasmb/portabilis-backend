angular.module('portabilis')
	.controller('AlunoController', function($scope, alunoServices) {
	
		$scope.aluno = {};
		$scope.mensagem = '';

		if($routeParams.alunoId) {
			alunoServices.get({alunoId: $routeParams.alunoId}, function(aluno) {
				$scope.aluno = aluno; 
			}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter a aluno'
			});
		}

		$scope.submeter = function() {

			//if ($scope.formulario.$valid) {

				if($routeParams.alunoId) {

					alunoServices.update({alunoId: $scope.aluno._id}, 
						$scope.aluno, function() {
						$scope.mensagem = 'Aluno alterado com sucesso';
					}, function() {
						console.log(erro);
						$scope.mensagem = 'Não foi possível alterar';
					});

				} else { 

					alunoServices.save($scope.aluno,function() {
						$scope.aluno = {};
						$scope.mensagem = 'Aluno cadastrado com sucesso';
					}, function(erro) {
						console.log(erro);
						$scope.mensagem = 'Não foi possível cadastrar a aluno';
					});
				}
			//}
		};

});