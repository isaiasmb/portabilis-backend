<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Curso;

class CursoController extends Controller {

	protected $curso = null;

	public function __construct(Curso $curso) {
		$this->curso = $curso;
	}

	public function buscarCurso($id) {

		$statuscode = 200;
		$response = null;

		$curso = $this->curso->getCurso($id);
		if(!$curso) {
			$response = ['response', 'Curso não encontrado!'];
			$statuscode = 400;
		} else {
			$response = $curso;
		}

		return \Response::json($response, $statuscode);
	}

	public function listarCursos(){
		return $this->curso->allCursos();
	}

	public function salvarCurso() {
		return $this->curso->saveCurso();
	}

	public function atualizarCurso($id) {

		$statuscode = 200;
		$response = null;
		$curso = $this->curso->updateCurso($id);

		if(!$curso) {
			$statuscode = 400;
			$response = ['response', 'Curso não encontrado!'];
		} else {
			$response = $curso;
		}

		return \Response::json($response, $statuscode);
	}
}
