<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Input;

class Aluno extends Model
{
	protected $fillable = ['cpf', 'rg', 'data_nascimento', 'nome', 'telefone'];

	public function getAluno($id) {
		$aluno = self::find($id);
		if(is_null($aluno)) {
			return false;
		} else {
			return $aluno;	
		}		
	}

	public function allAlunos() {
		return self::all();
	}

	public function saveAluno() {
		$input = Input::all();
		$aluno = new Aluno();
		$aluno->fill($input);
		$aluno->save();
		return $aluno;
	}

	public function updateAluno($id) {
		$aluno = self::find($id);
		if(is_null($aluno)) {
			return false;
		} else {
			$input = Input::all();			
			$aluno->fill($input);
			$aluno->save();
			
			return $aluno;	
		}
	}

	public function deleteAluno($id) {
		Aluno::destroy($id);
	}

	public function matricula() {
		return $this->hasMany('App\Matricula', 'aluno_id', 'id');
	}
}
