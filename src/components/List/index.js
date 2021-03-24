import React, { useState, useEffect } from 'react';

import Task from '../Task';

import './index.css';

function List(props) {
	const [tasks, setTasks] = useState([]);
	useEffect( () => {
		
		function getTasks () {

			const xhr = new XMLHttpRequest();

			// xhr.open("GET", `https://todobiguewapi.herokuapp.com/api/listas/?lista=${props.id}`);
			xhr.open("GET", `http://127.0.0.1:8000/api/tarefas/?lista=${props.id}`);
			xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			xhr.send();
			xhr.onreadystatechange = function() {

				if (xhr.readyState === 4) {

					if ( xhr.status === 200 ) {

						try {

							const response = JSON.parse( xhr.responseText );								

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

	}, [props]);

	let arrayTasks = [];
	
	if (tasks.length > 0) {
		tasks.map( info => (
			arrayTasks.push(
				<Task
					id={info.id}
					key={info.id}
					titulo={info.titulo}
					onClick={props.onClickEditModalTask}
				/>
			)
		) );
	}
	
  return (
		<div>
			<div className="lists--list" key={props.id}>

					<div className="list--title" onClick={props.onClickModalList} >
							<h5 data-type="2" data-lista={props.id} >{props.nome}</h5>
					</div>

					<div className="list--content">
							
							<div className="conent--task">

								{arrayTasks}

							</div>
							
							<button data-type="1" data-lista={props.id} onClick={props.onClickModalTask}>Adicionar +</button>
					</div>

			</div>
		</div>
  );
}

export default List;