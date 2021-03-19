import React from 'react';

import './index.css';

function CardReport(props) {
	return (
		<div className="data-report-card-col--card">
			<h4>Disciplina: {props.disciplina}</h4>
			<h4>Carga Horária: {props.cargaHoraria}</h4>
			<h4>Faltas: {props.faltas}</h4>
			<h4>Situação: <span id={ props.situacao === "Aprovado" ? "aprovado" : ( props.situacao === "Reprovado" ? "reprovado" : "cursando" ) }>{props.situacao}</span></h4>
		</div>
	);
}
  
export default CardReport;