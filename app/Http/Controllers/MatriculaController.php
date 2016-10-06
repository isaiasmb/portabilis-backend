<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Matricula;

class MatriculaController extends Controller {

	protected $matricula = null;

	public function __construct(Matricula $matricula) {
		$this->matricula = $matricula;
	}

	public function buscarMatricula($id){

		$statuscode = 200;
		$response = null;

		$matricula = $this->matricula->getMatricula($id);
		if(!$matricula) {
			$response = ['response', 'Matricula não encontrada!'];
			$statuscode = 400;
		} else {
			$response = $matricula;
		}

		return \Response::json($response, $statuscode);
	}

	public function listarMatriculas() {
		return $this->matricula->allMatriculas();
	}

	public function salvarMatricula() {
		return $this->matricula->saveMatricula();
	}

	public function atualizarMatricula($id) {

		$statuscode = 200;
		$response = null;
		$matricula = $this->matricula->updateMatricula($id);

		if(!$matricula) {
			$statuscode = 400;
			$response = ['response', 'Matrícula não encontrada!'];
		} else {
			$response = $matricula;
		}
		return \Response::json($response, $statuscode);
	}

}