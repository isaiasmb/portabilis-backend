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
    	Route::get('listar', ['uses' => 'AlunoController@listarAlunos']);
    	Route::get('{id}', ['uses' => 'AlunoController@buscarAluno']);
		Route::post('new', ['uses' => 'AlunoController@salvarAluno']);
		Route::put('/atualizar/{id}', ['uses' => 'AlunoController@atualizarAluno']);
	});

	Route::group(['prefix' => 'curso'], function() {
		Route::get('listar', ['uses' => 'CursoController@listarCursos']);
		Route::get('{id}', ['uses' => 'CursoController@buscarCurso']);
		Route::post('new', ['uses' => 'CursoController@salvarCurso']);
		Route::put('/atualizar/{id}', ['uses' => 'CursoController@atualizarCurso']);
	});

	Route::group(['prefix' => 'matricula'], function() {
		Route::get('listar', ['uses' => 'MatriculaController@listarMatriculas']);
		Route::get('{id}', ['uses' => 'MatriculaController@buscarMatricula']);
		Route::post('new', ['uses' => 'MatriculaController@salvarMatricula']);
		Route::put('/atualizar/{id}', ['uses' => 'MatriculaController@atualizarMatricula']);


	});

});
