angular.module('portabilis', ['ngAnimate', 'ngRoute', 'ngResource', 'services', 'ngMask', 'ngCpfCnpj'])
    .config(function($routeProvider, $locationProvider) {

        //$locationProvider.html5Mode(true);


        //Aluno

        $routeProvider.when('/alunos', {
            templateUrl: 'partials/alunos.html',
            controller: 'AlunosController'
        });

        $routeProvider.when('/aluno/new', {
            templateUrl: 'partials/aluno.html',
            controller: 'AlunoController'
        });

        $routeProvider.when('/aluno/editar/:alunoId', {
            templateUrl: 'partials/aluno.html',
            controller: 'AlunoController'
        });


        //Curso
        $routeProvider.when('/cursos', {
            templateUrl: 'partials/cursos.html',
            controller: 'CursosController'
        });

        $routeProvider.when('/curso/new', {
            templateUrl: 'partials/curso.html',
            controller: 'CursosController'
        });

        $routeProvider.when('/curso/editar/:cursoId', {
            templateUrl: 'partials/curso.html',
            controller: 'CursosController'
        });

        //Matricula
        $routeProvider.when('/matriculas', {
            templateUrl: 'partials/matriculas.html',
            controller: 'MatriculasController'
        });

        $routeProvider.when('/matricula/new', {
            templateUrl: 'partials/matricula.html',
            controller: 'MatriculaController'
        });

        $routeProvider.when('/matricula/editar/:matriculaId', {
            templateUrl: 'partials/matricula.html',
            controller: 'MatriculaController'
        });

        $routeProvider.otherwise({redirectTo: '/alunos'});

    });