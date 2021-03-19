import React from 'react';

import './index.css';

function Card(props) {
  const type = props.type;
  return (
    <div className="data-user-col--card">
      { type === "1" &&
        <div>
          <h4>Nome: {props.nome}</h4>
          <h4>Matrícula: {props.matricula}</h4>
          <h4>E-mail: {props.email}</h4>
          <h4>Vinculo: {props.vinculo}</h4>
        </div>
      }
      { type === "2" &&
        <div>
          <h4>Campus: {props.campus}</h4>  
          <h4>Curso: {props.curso}</h4>  
          <h4>Situacao: {props.situacao}</h4>
        </div>
      }


    </div>
	);
}

export default Card;