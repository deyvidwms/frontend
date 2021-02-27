import React from 'react';

import Header from '../../components/Header';

import './index.css'

function Perfil() {
  return (
    <div>
      <Header />
      
      <div className="content--header">
      
        <h2 className="header--title">Meu perfil</h2>
      
        <hr className="header--divisor-title"/>

      </div>

      <div className="content--body">

        <div className="body--data-user-col">

          <div className="data-user-col--card">

            <h4>Nome: Deyvid William Silva de Medeiros</h4>
            <h4>Matrícula: 20171104010072</h4>
            <h4>E-mail: deyvidwms@gmail.com</h4>
            <h4>Vinculo: Aluno</h4>


          </div>

          <div className="data-user-col--card">

            <h4>Campus: Caicó</h4>
            <h4>Curso: Informática</h4>
            <h4>Situação: Matriculado</h4>

          </div>

        </div>

        <div className="body--data-report-card-col">

          <div className="data-report-card-col--card">

            <h4>Disciplina: TEC.0028 - Desenvolvimento de Sistemas Coorporativos</h4>
            <h4>Carga horária: 80h</h4>
            <h4>Faltas: 10</h4>
            <h4>Situação: Aprovado</h4>

          </div>
          
          <div className="data-report-card-col--card">

            <h4>Disciplina: TEC.0028 - Desenvolvimento de Sistemas Coorporativos</h4>
            <h4>Carga horária: 80h</h4>
            <h4>Faltas: 10</h4>
            <h4>Situação: Aprovado</h4>

          </div>

          <div className="data-report-card-col--card">

            <h4>Disciplina: TEC.0028 - Desenvolvimento de Sistemas Coorporativos</h4>
            <h4>Carga horária: 80h</h4>
            <h4>Faltas: 10</h4>
            <h4>Situação: Aprovado</h4>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Perfil;