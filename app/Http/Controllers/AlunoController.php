<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Aluno;

class AlunoController extends Controller {

	protected $aluno = null;

	public function __construct(Aluno $aluno) {
		$this->aluno = $aluno;
	}

	public function buscarAluno($id){

		$statuscode = 200;
		$response = null;

		$aluno = $this->aluno->getAluno($id);
		if(!$aluno) {
			$response = ['response', 'Aluno não encontrado!'];
			$statuscode = 400;
		} else {
			$response = $aluno;
		}

		return \Response::json($response, $statuscode);
	}

	public function listarAlunos() {
		return $this->aluno->allAlunos();	
	}

	public function salvarAluno() {
		return $this->aluno->saveAluno();
	}

	public function atualizarAluno($id) {

		$statuscode = 200;
		$response = null;		
		$aluno = $this->aluno->updateAluno($id);

		if(!$aluno) {
			$statuscode = 400;
			$response = ['response', 'Aluno não encontrado!'];
		} else {
			$response = $aluno;
		}
		return \Response::json($response, $statuscode);
	}

	public function apagarALuno($id) {
		$this->aluno->deleteAluno($id);
	}

}