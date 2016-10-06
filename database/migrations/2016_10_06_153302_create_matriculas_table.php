<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMatriculasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('matriculas', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('aluno_id')->unsigned();
            $table->foreign('aluno_id')->references('id')->on('alunos');
            $table->integer('curso_id')->unsigned();
            $table->foreign('curso_id')->references('id')->on('cursos');
            $table->date('data_matricula');
            $table->integer('ano');
            $table->unsignedInteger('ativo')->default(1);
            $table->unsignedInteger('pago');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    { 
        Schema::table('matriculas', function($table) {
            $table->dropForeign('matriculas_aluno_id_foreign');
            $table->dropForeign('matriculas_curso_id_foreign');        
        });
        Schema::drop('matriculas');
    }
}
