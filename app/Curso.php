<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Input;

class Curso extends Model {

	protected $fillable = ['nome', 'valor_inscricao', 'periodo'];

	public function getCurso($id) {
		$curso = self::find($id);
		if(is_null($curso)) {
			return false;
		} else {
			return $curso;
		}
	}

	public function allCursos() {
		return self::all();
	}

	public function saveCurso() {
		$input = Input::all();
		$curso = new Curso();
		$curso->fill($input);
		$curso->save();
		return $curso;

	}

	public function updateCurso($id) {
		$curso = self::find($id);
		if(is_null($curso)) {
			return false;
		} else {
			$input = Input::all();
			$curso->fill($input);
			$curso->save();

			return $curso;
		}
	}

   	public function matricula() {
		return $this->hasOne('App\Matricula', 'curso_id', 'id');
	}

}
