angular.module('portabilis')
	.controller('AlunoController', function($scope, alunoServices, $routeParams) {
	
		$scope.aluno = {};
		$scope.mensagem = '';
		$scope.mensagemAnoBissexto = '';

		if($routeParams.alunoId) {
			alunoServices.get({alunoId: $routeParams.alunoId}, function(aluno) {
				$scope.aluno = aluno; 
				$scope.aluno.data_nascimento = converteToDataUser($scope.aluno.data_nascimento);
			}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter a aluno'
			});
		}

		$scope.submeter = function() {

			isAnoBissexto($scope.aluno.data_nascimento);

			if ($scope.formAluno.$valid) {

				if($routeParams.alunoId) {
					$scope.aluno.data_nascimento = converteToData($scope.aluno.data_nascimento);

					alunoServices.update({alunoId: $scope.aluno.id}, 
						$scope.aluno, function() {											
						$scope.mensagem = 'Aluno alterado com sucesso';
					}, function() {
						console.log(erro);
						$scope.mensagem = 'Não foi possível alterar';
					});

				} else { 
					$scope.aluno.data_nascimento = converteToData($scope.aluno.data_nascimento);

					alunoServices.save($scope.aluno,function() {
						$scope.aluno = {};	
						$scope.mensagem = 'Aluno cadastrado com sucesso';
					}, function(erro) {
						console.log(erro);
						$scope.mensagem = 'Não foi possível cadastrar o aluno';
					});
				}			
			}
		};

		
		var converteToDataUser = function(data) {
			var dataFormatada = new Date(data);
			return (dataFormatada.getDate() + 1) + '/'
				 + ((dataFormatada.getMonth() < 9 ? '0' : '') + (dataFormatada.getMonth() + 1)) + '/' 
				 + dataFormatada.getFullYear();
		};

		var converteToData = function(data) {
			var newdate = data.split("/").reverse().join("-");
			return newdate;
		}

		var isAnoBissexto = function(data) {
			var myRe = new RegExp("[0-9]{4}$");
			var ano = myRe.exec(data);

			if((data == "29/02/" + ano) &&
				((ano % 4 == 0) && (ano % 100 != 0)) || (ano % 400 == 0)) {
				$scope.mensagemAnoBissexto = 'Ano bissexto';
				$scope.formAluno.$valid = false;
			} else {
				$scope.mensagemAnoBissexto = '';
				$scope.formAluno.$valid = true;
			}
		};

});