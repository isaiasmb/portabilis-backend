angular.module('portabilis', ['ngAnimate', 'ngRoute', 'ngResource', 'services'])
    .config(function($routeProvider, $locationProvider) {

        //$locationProvider.html5Mode(true);


        $routeProvider.when('/alunos', {
            templateUrl: 'partials/alunos.html',
            controller: 'AlunosController'
        });

        $routeProvider.when('/aluno/new', {
            templateUrl: 'partials/aluno.html',
            controller: 'AlunoController'
        });

        $routeProvider.otherwise({redirectTo: '/alunos'});

    });