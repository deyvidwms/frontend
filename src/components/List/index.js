import React, { useState, useEffect } from 'react';

import Task from '../Task';

import './index.css';

function List(props) {
  const [tasks, setTasks] = useState([]);
	useEffect( () => {
		
		function getTasks () {

			const xhr = new XMLHttpRequest();

			// xhr.open("POST", `https://todobiguewapi.herokuapp.com/api/listas/${dadosUsuario.matricula}`);
			xhr.open("GET", `http://127.0.0.1:8000/api/tarefas/?lista=${props.id}`);
			xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			xhr.send();
			xhr.onreadystatechange = function() {

				if (xhr.readyState === 4) {

					if ( xhr.status === 200 ) {

						try {

							const response = JSON.parse( xhr.responseText );								

							console.log('tarefas', response);	

							if ( typeof response.error !== "undefined" ) {
								setTasks([]);
							} else if ( typeof response.error === "undefined" ) {
								setTasks(response);								
							}								

						} catch (e) {
							setTasks([]);
						}
													
					} else {

						console.warn("Erro no servidor");

					}

				}

			};
	
		};

		getTasks();

	}, []);

	let arrayTasks = [];
	
	tasks.map( info => {
		arrayTasks.push(
			<Task
				id={info.id}
				key={info.id}
				titulo={info.titulo}
			/>
		)
	} );
	    
  return (
		<div>
			<div className="lists--list" key={props.id}>

					<div className="list--title">
							<h5>{props.nome}</h5>
					</div>

					<div className="list--content">
							
							<div className="conent--task">

								{arrayTasks}

							</div>
							
							<button>Adicionar +</button>
					</div>

			</div>
		</div>
  );
}

export default List;