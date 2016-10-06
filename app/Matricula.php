<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Input;

class Matricula extends Model {

	protected $fillable = ['id', 'aluno_id', 'curso_id', 'data_matricula', 'ano', 'ativo', 'pago'];

	public function allMatriculas() {
		return $this->with('aluno')->with('curso')->get();
	}

    public function saveMatricula() {
    	$input = Input::all();
    	$matricula = new Matricula();
    	$matricula->fill($input);
    	$matricula->save();
    	return $matricula;
    }

    public function getMatricula($id) {
    	$matricula = self::find($id);
    	if(is_null($matricula)) {
    		return false;
    	} else {
    		return $matricula;
    	}
    }

    public function updateMatricula($id) {
    	$matricula = self::find($id);
    	if(is_null($matricula)) {
    		return false;
    	} else {
    		$input = Input::all();
    		$matricula->fill($input);
    		$matricula->save();

    		return $matricula;
    	}
    }

    public function aluno() {
    	return $this->belongsTo('App\Aluno', 'aluno_id', 'id');
    }

    public function curso() {
        return $this->belongsTo('App\Curso', 'curso_id', 'id');
    }

}
