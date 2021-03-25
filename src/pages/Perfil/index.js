import React from 'react';

import Header from '../../components/Header';
import Card from '../../components/Card';
import CardReport from '../../components/CardReport';
import Loading from '../../components/Loading';

import './index.css'

function getData() {
  return JSON.parse( localStorage.getItem("dadosUsuario") ) || null;
}

function Perfil() {
  const dadosUsuario = getData();
  let codigosDisciplinas = Object.keys( dadosUsuario.disciplinas.codigo_diario );
  let dataCardReport = [];
  let dataCardReportTwo = [];

	setTimeout( () => {
		document.getElementsByClassName("background-loading")[0].style.display = 'none';
    document.getElementsByClassName("content--body")[0].style.display = 'flex';
	}, 5000 );
  
  let tamanho = dadosUsuario.numero_disciplinas % 2 === 0 ? dadosUsuario.numero_disciplinas / 2 : ( dadosUsuario.numero_disciplinas / 2 ) + 0.5;

  for ( let i = 0; i < tamanho; i++ ) {
    dataCardReport.push(
      <CardReport 
        professor_foto={ dadosUsuario.professores_fotos.codigo_diario[ codigosDisciplinas[i] ] }
        professor_nome={ dadosUsuario.professores_nomes.codigo_diario[ codigosDisciplinas[i] ] }
        professor_email={ dadosUsuario.professores_emails.codigo_diario[ codigosDisciplinas[i] ] }
        key={codigosDisciplinas[i]}
        disciplina={ dadosUsuario.disciplinas.codigo_diario[ codigosDisciplinas[i] ] }
        cargaHoraria={ dadosUsuario.disciplinas_cargas_horarias.codigo_diario[ codigosDisciplinas[i] ] }
        faltas={ dadosUsuario.disciplinas_faltas.codigo_diario[ codigosDisciplinas[i] ] }
        situacao={ dadosUsuario.disciplinas_situacoes.codigo_diario[ codigosDisciplinas[i] ] }
      />
    );
  }

  for ( let j = tamanho; j < dadosUsuario.numero_disciplinas; j++ ) {
    dataCardReportTwo.push(
      <CardReport 
        professor_foto={ dadosUsuario.professores_fotos.codigo_diario[ codigosDisciplinas[j] ] }
        professor_nome={ dadosUsuario.professores_nomes.codigo_diario[ codigosDisciplinas[j] ] }
        professor_email={ dadosUsuario.professores_emails.codigo_diario[ codigosDisciplinas[j] ] }
        key={codigosDisciplinas[j]} 
        disciplina={ dadosUsuario.disciplinas.codigo_diario[ codigosDisciplinas[j] ] }
        cargaHoraria={ dadosUsuario.disciplinas_cargas_horarias.codigo_diario[ codigosDisciplinas[j] ] }
        faltas={ dadosUsuario.disciplinas_faltas.codigo_diario[ codigosDisciplinas[j] ] }
        situacao={ dadosUsuario.disciplinas_situacoes.codigo_diario[ codigosDisciplinas[j] ] }
      />  
    );
  }

  return (
    <div>
      <Loading />
      <Header />
      
      <div className="content--header">
      
        <h2 className="header--title">Meu perfil</h2>
        
        <hr className="header--divisor-title"/>

      </div>

      <div className="content--body" style={{'display':'none'}}>

        <div className="body--data-user-col">

          <Card 
            type="1"
            nome={dadosUsuario.nome}
            matricula={dadosUsuario.matricula}
            email={dadosUsuario.email}
            vinculo={dadosUsuario.vinculo}  
          />

          <Card
            type="2"
            campus={dadosUsuario.campus}  
            curso={dadosUsuario.curso}  
            situacao={dadosUsuario.situacao}
          />

        </div>

        <div className="body--data-report-card-col">

          {dataCardReport}

        </div>

        <div className="body--data-report-card-col">

          {dataCardReportTwo}

        </div>

      </div>

    </div>
  );

}

export default Perfil;