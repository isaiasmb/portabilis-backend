<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::group(['prefix' => 'api'], function () {
	Route::group(['prefix' => 'aluno'], function() {
    	Route::get('/', ['middleware' => 'cors', 'uses' => 'AlunoController@listarAlunos']);
    	Route::get('/{id}', ['middleware' => 'cors', 'uses' => 'AlunoController@buscarAluno']);
		Route::post('/', ['middleware' => 'cors', 'uses' => 'AlunoController@salvarAluno']);
		Route::put('/{id}', ['middleware' => 'cors', 'uses' => 'AlunoController@atualizarAluno']);
	});

	Route::group(['prefix' => 'curso'], function() {
		Route::get('listar', ['middleware' => 'cors', 'uses' => 'CursoController@listarCursos']);
		Route::get('{id}', ['middleware' => 'cors', 'uses' => 'CursoController@buscarCurso']);
		Route::post('new', ['middleware' => 'cors', 'uses' => 'CursoController@salvarCurso']);
		Route::put('/atualizar/{id}', ['middleware' => 'cors', 'uses' => 'CursoController@atualizarCurso']);
	});

	Route::group(['prefix' => 'matricula'], function() {
		Route::get('listar', ['middleware' => 'cors', 'uses' => 'MatriculaController@listarMatriculas']);
		Route::get('{id}', ['middleware' => 'cors', 'uses' => 'MatriculaController@buscarMatricula']);
		Route::post('new', ['middleware' => 'cors', 'uses' => 'MatriculaController@salvarMatricula']);
		Route::put('/atualizar/{id}', ['middleware' => 'cors', 'uses' => 'MatriculaController@atualizarMatricula']);


	});

});
