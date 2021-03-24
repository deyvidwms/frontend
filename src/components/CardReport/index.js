import React from 'react';

import './index.css';

function CardReport(props) {
	return (
		<div className="data-report-card-col--card">
			<div className="card--foto-professor">
				<img className="foto-professor--imagem" alt="foto-professor" src={props.professor_foto} />
			</div>
			<div >
				<h4>Professor: {props.professor_nome}</h4>
				<h4>E-mail: {props.professor_email}</h4>
				<h4>Disciplina: {props.disciplina}</h4>
				<h4>Carga Horária: {props.cargaHoraria}</h4>
				<h4>Faltas: {props.faltas}</h4>
				<h4>Situação: <span id={ props.situacao === "Aprovado" ? "aprovado" : ( props.situacao === "Reprovado" ? "reprovado" : "cursando" ) }>{props.situacao}</span></h4>
			</div>
		</div>
	);
}
  
export default CardReport;