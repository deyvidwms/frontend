import React, { useState, useEffect } from 'react';

import './index.css';

function Task(props) {
  const [dataTask, setDataTask] = useState([]);
	useEffect( () => {
		
		function getTasks () {

			const xhr = new XMLHttpRequest();

			// xhr.open("POST", `https://todobiguewapi.herokuapp.com/api/listas/${dadosUsuario.matricula}`);
			xhr.open("GET", `http://127.0.0.1:8000/api/tarefas/${props.id}`);
			xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			xhr.send();
			xhr.onreadystatechange = function() {

				if (xhr.readyState === 4) {

					if ( xhr.status === 200 ) {

						try {

							const response = JSON.parse( xhr.responseText );								

							if ( typeof response.error !== "undefined" ) {
								setDataTask([]);
							} else if ( typeof response.error === "undefined" ) {
								setDataTask(response);								
							}								

						} catch (e) {
							setDataTask([]);
						}
													
					} else {

						console.warn("Erro no servidor");

					}

				}

			};
	
		};

		getTasks();

	}, [props]);

  let descricao = dataTask.descricao;

  return (
    <div className="task" id={props.id} key={props.id} onClick={props.onClick} >
			<h6 data-type="2" data-description={descricao} data-task={props.id} >{props.titulo}</h6>
    </div>
  );
}

export default Task;