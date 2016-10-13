angular.module('portabilis')
	.controller('MatriculaController', function($scope, matriculaServices, $routeParams) {
	
		$scope.matricula = {};
		$scope.mensagem = '';

		if($routeParams.matriculaId) {
			matriculaServices.get({matriculaId: $routeParams.matriculaId}, function(matricula) {
				$scope.matricula = matricula; 
				$scope.matricula.data_matricula = converteData($scope.matricula.data_matricula);
				
			}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter a matricula'
			});
		}

		$scope.submeter = function() {

			//if ($scope.formulario.$valid) {
				console.log($scope.matricula.data_matricula);
				$scope.matricula.ano = pegaAno($scope.matricula.data_matricula);


				if($routeParams.matriculaId) {
					
					matriculaServices.update({matriculaId: $scope.matricula.id}, 
						$scope.matricula, function() {
						$scope.mensagem = 'Matricula alterada com sucesso';
					}, function() {
						console.log(erro);
						$scope.mensagem = 'Não foi possível alterar';
					});

				} else { 

					matriculaServices.save($scope.matricula,function() {
						$scope.matricula = {};			
						$scope.mensagem = 'Matricula cadastrada com sucesso';
					}, function(erro) {
						console.log(erro);
						$scope.mensagem = 'Não foi possível cadastrar a matricula';
					});
				}
			}
		//};

		var converteData = function(data) {
			var dataFormatada = new Date(data);
			return (dataFormatada.getDate() + 1) + '/'
				 + ((dataFormatada.getMonth() < 9 ? '0' : '') + (dataFormatada.getMonth() + 1)) + '/' 
				 + dataFormatada.getFullYear();
		}

		var pegaAno = function(data) {
			var dataAno = new Date(data);
			console.log(dataAno.getFullYear());
			return dataAno.getFullYear();
		}

});