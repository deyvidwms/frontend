import React, { useEffect, useState } from 'react';

import { MdClose, MdCheckCircle, MdError } from "react-icons/md";

import Header from '../../components/Header';
import List from '../../components/List';

import './index.css';

function handleModalShow(e) {
	
	let type = e.target.getAttribute("data-type");
	
	let texto = e.target.innerText;

	if ( type === "1" ) {
		document.getElementById('formCadLista').style.display = 'block';
		document.getElementById('formEditLista').style.display = 'none';
		document.getElementsByClassName('modal')[0].style.display = 'block';
		document.getElementsByClassName('modal')[0].style.height = '180px';
		document.getElementsByClassName('modal-mask')[0].style.display = 'block';
	} else if ( type === "2" ) {

		let lista = e.target.getAttribute("data-lista");

		document.getElementById('lista').value = lista;
		document.getElementById('editNomeLista').value = texto;
		document.getElementById('formCadLista').style.display = 'none';
		document.getElementById('formEditLista').style.display = 'block';
		document.getElementsByClassName('modal')[0].style.display = 'block';
		document.getElementsByClassName('modal')[0].style.height = '230px';
		document.getElementsByClassName('modal-mask')[0].style.display = 'block';
	}
	
}

function handleModalClose() {
	document.getElementsByClassName('modal')[0].style.display = 'none';
	document.getElementsByClassName('modal-mask')[0].style.display = 'none';
}

function handleTaskModalShow(e) {
	
	let type = e.target.getAttribute("data-type");
	
	let texto = e.target.innerText;

	if ( type === "1" ) {

		let lista = e.target.getAttribute("data-lista");

		document.getElementById("listaTask").value = lista;

		document.getElementById('formCadTask').style.display = 'block';
		document.getElementById('formEditTask').style.display = 'none';
		document.getElementsByClassName('modal-task')[0].style.display = 'block';
		document.getElementsByClassName('modal-task')[0].style.height = '340px';
		document.getElementsByClassName('modal-task-mask')[0].style.display = 'block';

	} else if ( type === "2" ) {

		let task = e.target.getAttribute("data-task");

		let description = e.target.getAttribute("data-description");

		document.getElementById('task').value = task;

		document.getElementById('descricaoEditTask').innerText = description;

		document.getElementById('editNomeTask').value = texto;
		document.getElementById('formCadTask').style.display = 'none';
		document.getElementById('formEditTask').style.display = 'block';
		document.getElementsByClassName('modal-task')[0].style.display = 'block';
		document.getElementsByClassName('modal-task')[0].style.height = '390px';
		document.getElementsByClassName('modal-task-mask')[0].style.display = 'block';
	}
	
}

function handleTaskModalClose() {
	document.getElementsByClassName('modal-task')[0].style.display = 'none'
	document.getElementsByClassName('modal-task-mask')[0].style.display = 'none';
}

function getData() {
  return JSON.parse( localStorage.getItem("dadosUsuario") ) || null;
}

function Initial() {
	const [dadosLista, setDadosLista] = useState([]);
	const [tituloLista, setTituloLista] = useState('');
	const [tituloTask, setTituloTask] = useState('');
	const [descricaoTask, setDescricaoTask] = useState('');

  const dadosUsuario = getData();

	async function handleCreateList (event) {
		event.preventDefault();
	
		if ( document.getElementById("nomeLista").reportValidity() ) {

			try {
					
				let xhr = new XMLHttpRequest();
	
				// xhr.open("POST", "https://todobiguewapi.herokuapp.com/api/listas/");
				xhr.open("POST", "http://127.0.0.1:8000/api/listas/");
				xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
				xhr.send(`matricula=${dadosUsuario.matricula}&nome=${tituloLista}`);
				xhr.onreadystatechange = function() {
	
					if (xhr.readyState === 4) {
	
						if ( xhr.status === 200 ) {
	
							try {
	
								let response = JSON.parse(xhr.responseText);
	
								if ( typeof response.success !== "undefined" ) {
	
									
									document.getElementsByClassName('modal')[0].style.display = 'none';
	
									document.getElementsByClassName('modal-mask')[0].style.display = 'none';
	
									document.getElementsByClassName("modal-mensagem--icone")[0].setAttribute("class", "modal-mensagem--icone show");
	
									document.getElementsByClassName("mensagem")[0].innerText = "Lista cadastrada com sucesso.";
	
									document.getElementsByClassName('modal-mensagem')[0].style.display = 'block';
	
									document.getElementsByClassName('modal-mensagem-mask')[0].style.display = 'block';
							
									setTimeout( () => {
										window.location.reload();
									}, 3000 );
	
								} else if ( typeof response.error !== "undefined" ) {
	
									document.getElementsByClassName('modal')[0].style.display = 'none';
	
									document.getElementsByClassName('modal-mask')[0].style.display = 'none';
	
									document.getElementsByClassName("modal-mensagem--icone")[1].setAttribute("class", "modal-mensagem--icone show");
	
									document.getElementsByClassName("mensagem")[0].innerText = response.error;
	
									document.getElementsByClassName('modal-mensagem')[0].style.display = 'block';
	
									document.getElementsByClassName('modal-mensagem-mask')[0].style.display = 'block';
	
									setTimeout( () => {
										window.location.reload();
									}, 3000 );
	
								}
	
							} catch (e) {
								console.log(e);
							}
														
						} else {
	
							console.warn("Erro no servidor");
	
						}
	
					}
	
				};
	
			} catch (error) {
				alert(error);
			}

		}

	};

	async function handleDeleteList (event) {
		event.preventDefault();
	
		let lista = document.getElementById("lista").value;

		try {
				
			let xhr = new XMLHttpRequest();

			// xhr.open("DELETE", `https://todobiguewapi.herokuapp.com/api/listas/${lista}?concluida=1`);
			xhr.open("DELETE", `http://127.0.0.1:8000/api/listas/${lista}?concluida=1`);
			xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			xhr.send();
			xhr.onreadystatechange = function() {

				if (xhr.readyState === 4) {

					if ( xhr.status === 200 ) {

						try {

							let response = JSON.parse(xhr.responseText);

							if ( typeof response.id !== "undefined" ) {
								
								document.getElementsByClassName('modal')[0].style.display = 'none';

								document.getElementsByClassName('modal-mask')[0].style.display = 'none';

								document.getElementsByClassName("modal-mensagem--icone")[0].setAttribute("class", "modal-mensagem--icone show");

								document.getElementsByClassName("mensagem")[0].innerText = "Lista deletada com sucesso.";

								document.getElementsByClassName('modal-mensagem')[0].style.display = 'block';

								document.getElementsByClassName('modal-mensagem-mask')[0].style.display = 'block';
						
								setTimeout( () => {
									window.location.reload();
								}, 3000 );

							} else if ( typeof response.error !== "undefined" ) {

								document.getElementsByClassName('modal')[0].style.display = 'none';

								document.getElementsByClassName('modal-mask')[0].style.display = 'none';

								document.getElementsByClassName("modal-mensagem--icone")[1].setAttribute("class", "modal-mensagem--icone show");

								document.getElementsByClassName("mensagem")[0].innerText = response.error;

								document.getElementsByClassName('modal-mensagem')[0].style.display = 'block';

								document.getElementsByClassName('modal-mensagem-mask')[0].style.display = 'block';

								setTimeout( () => {
									window.location.reload();
								}, 3000 );

							}

						} catch (e) {
							console.log(e);
						}
													
					} else {

						console.warn("Erro no servidor");

					}

				}

			};

		} catch (error) {
			alert(error);
		}

	};

	async function handleUpdateList (event) {
		event.preventDefault();
	
		let lista = document.getElementById("lista").value;

		if ( document.getElementById("editNomeLista").reportValidity() ) {

			try {
					
				let xhr = new XMLHttpRequest();

				// xhr.open("PUT", `https://todobiguewapi.herokuapp.com/api/listas/${lista}?nome=${tituloLista}`);
				xhr.open("PUT", `http://127.0.0.1:8000/api/listas/${lista}?nome=${tituloLista}`);
				xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
				xhr.send();
				xhr.onreadystatechange = function() {

					if (xhr.readyState === 4) {

						if ( xhr.status === 200 ) {

							try {

								let response = JSON.parse(xhr.responseText);

								if ( typeof response.id !== "undefined" ) {
									
									document.getElementsByClassName('modal')[0].style.display = 'none';

									document.getElementsByClassName('modal-mask')[0].style.display = 'none';

									document.getElementsByClassName("modal-mensagem--icone")[0].setAttribute("class", "modal-mensagem--icone show");

									document.getElementsByClassName("mensagem")[0].innerText = "Lista editada com sucesso."
									document.getElementsByClassName('modal-mensagem')[0].style.display = 'block';

									document.getElementsByClassName('modal-mensagem-mask')[0].style.display = 'block';
							
									setTimeout( () => {
										window.location.reload();
									}, 3000 );

								} else if ( typeof response.error !== "undefined" ) {

									document.getElementsByClassName('modal')[0].style.display = 'none';

									document.getElementsByClassName('modal-mask')[0].style.display = 'none';

									document.getElementsByClassName("modal-mensagem--icone")[1].setAttribute("class", "modal-mensagem--icone show");

									document.getElementsByClassName("mensagem")[0].innerText = response.error;

									document.getElementsByClassName('modal-mensagem')[0].style.display = 'block';

									document.getElementsByClassName('modal-mensagem-mask')[0].style.display = 'block';

									setTimeout( () => {
										window.location.reload();
									}, 3000 );

								}

							} catch (e) {
								console.log(e);
							}
														
						} else {

							console.warn("Erro no servidor");

						}

					}

				};

			} catch (error) {
				alert(error);
			}
		
		}

	};

	async function handleCreateTask (event) {
		event.preventDefault();
	
		let listaTask = document.getElementById("listaTask").value;

		if ( document.getElementById("nomeTask").reportValidity() ) {

			if ( document.getElementById("descricaoTask").reportValidity() ) {

				try {
						
					let xhr = new XMLHttpRequest();

					// xhr.open("POST", "https://todobiguewapi.herokuapp.com/api/tarefas/");
					xhr.open("POST", `http://127.0.0.1:8000/api/tarefas/`);
					xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
					xhr.send(`titulo=${tituloTask}&descricao=${descricaoTask}&lista_id=${listaTask}`);
					xhr.onreadystatechange = function() {

						if (xhr.readyState === 4) {

							if ( xhr.status === 200 ) {

								try {

									let response = JSON.parse(xhr.responseText);

									if ( typeof response.success !== "undefined" ) {
										
										document.getElementsByClassName('modal-task')[0].style.display = 'none';

										document.getElementsByClassName('modal-task-mask')[0].style.display = 'none';

										document.getElementsByClassName("modal-mensagem--icone")[0].setAttribute("class", "modal-mensagem--icone show");

										document.getElementsByClassName("mensagem")[0].innerText = response.success;
										document.getElementsByClassName('modal-mensagem')[0].style.display = 'block';

										document.getElementsByClassName('modal-mensagem-mask')[0].style.display = 'block';
								
										setTimeout( () => {
											window.location.reload();
										}, 3000 );

									} else if ( typeof response.error !== "undefined" ) {

										document.getElementsByClassName('modal-task')[0].style.display = 'none';

										document.getElementsByClassName('modal-task-mask')[0].style.display = 'none';

										document.getElementsByClassName("modal-mensagem--icone")[1].setAttribute("class", "modal-mensagem--icone show");

										document.getElementsByClassName("mensagem")[0].innerText = response.error;

										document.getElementsByClassName('modal-mensagem')[0].style.display = 'block';

										document.getElementsByClassName('modal-mensagem-mask')[0].style.display = 'block';

										setTimeout( () => {
											window.location.reload();
										}, 3000 );

									}

								} catch (e) {
									console.log(e);
								}
															
							} else {

								console.warn("Erro no servidor");

							}

						}

					};

				} catch (error) {
					alert(error);
				}

			}

		}

	}; 

	async function handleDeleteTask (event) {
		event.preventDefault();
	
		let task = document.getElementById("task").value;

		try {
				
			let xhr = new XMLHttpRequest();

			// xhr.open("DELETE", `https://todobiguewapi.herokuapp.com/api/tarefas/${task}?concluida=1`);
			xhr.open("DELETE", `http://127.0.0.1:8000/api/tarefas/${task}?concluida=1`);
			xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			xhr.send();
			xhr.onreadystatechange = function() {

				if (xhr.readyState === 4) {

					if ( xhr.status === 200 ) {

						try {

							let response = JSON.parse(xhr.responseText);

							if ( typeof response.id !== "undefined" ) {
								
								document.getElementsByClassName('modal-task')[0].style.display = 'none';

								document.getElementsByClassName('modal-task-mask')[0].style.display = 'none';

								document.getElementsByClassName("modal-mensagem--icone")[0].setAttribute("class", "modal-mensagem--icone show");

								document.getElementsByClassName("mensagem")[0].innerText = "Tarefa deletada com sucesso.";

								document.getElementsByClassName('modal-mensagem')[0].style.display = 'block';

								document.getElementsByClassName('modal-mensagem-mask')[0].style.display = 'block';
						
								setTimeout( () => {
									window.location.reload();
								}, 3000 );

							} else if ( typeof response.error !== "undefined" ) {

								document.getElementsByClassName('modal-task')[0].style.display = 'none';

								document.getElementsByClassName('modal-task-mask')[0].style.display = 'none';

								document.getElementsByClassName("modal-mensagem--icone")[1].setAttribute("class", "modal-mensagem--icone show");

								document.getElementsByClassName("mensagem")[0].innerText = response.error;

								document.getElementsByClassName('modal-mensagem')[0].style.display = 'block';

								document.getElementsByClassName('modal-mensagem-mask')[0].style.display = 'block';

								setTimeout( () => {
									window.location.reload();
								}, 3000 );

							}

						} catch (e) {
							console.log(e);
						}
													
					} else {

						console.warn("Erro no servidor");

					}

				}

			};

		} catch (error) {
			alert(error);
		}

	};

	async function handleUpdateTask (event) {
		event.preventDefault();
	
		let task = document.getElementById("task").value;

		if ( document.getElementById("editNomeTask").reportValidity() ) {

			if ( document.getElementById("descricaoEditTask").reportValidity() ) {

				try {
						
					let xhr = new XMLHttpRequest();

					// xhr.open("PUT", `https://todobiguewapi.herokuapp.com/api/tarefas/${task}?titulo=${titulo}&descricao=${descricao}`);
					xhr.open("PUT", `http://127.0.0.1:8000/api/tarefas/${task}?titulo=${tituloTask}&descricao=${descricaoTask}`);
					xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
					xhr.send();
					xhr.onreadystatechange = function() {

						if (xhr.readyState === 4) {

							if ( xhr.status === 200 ) {

								try {

									let response = JSON.parse(xhr.responseText);

									if ( typeof response.id !== "undefined" ) {
										
										document.getElementsByClassName('modal-task')[0].style.display = 'none';

										document.getElementsByClassName('modal-task-mask')[0].style.display = 'none';

										document.getElementsByClassName("modal-mensagem--icone")[0].setAttribute("class", "modal-mensagem--icone show");

										document.getElementsByClassName("mensagem")[0].innerText = "Tarefa editada com sucesso."
										document.getElementsByClassName('modal-mensagem')[0].style.display = 'block';

										document.getElementsByClassName('modal-mensagem-mask')[0].style.display = 'block';
								
										setTimeout( () => {
											window.location.reload();
										}, 3000 );

									} else if ( typeof response.error !== "undefined" ) {

										document.getElementsByClassName('modal-task')[0].style.display = 'none';

										document.getElementsByClassName('modal-task-mask')[0].style.display = 'none';

										document.getElementsByClassName("modal-mensagem--icone")[1].setAttribute("class", "modal-mensagem--icone show");

										document.getElementsByClassName("mensagem")[0].innerText = response.error;

										document.getElementsByClassName('modal-mensagem')[0].style.display = 'block';

										document.getElementsByClassName('modal-mensagem-mask')[0].style.display = 'block';

										setTimeout( () => {
											window.location.reload();
										}, 3000 );

									}

								} catch (e) {
									console.log(e);
								}
															
							} else {

								console.warn("Erro no servidor");

							}

						}

					};

				} catch (error) {
					alert(error);
				}

			}

		}

	};

	useEffect( () => {
		
		async function getListas () {

			const dadosUsuario = JSON.parse( localStorage.getItem("dadosUsuario") ) || null;
	
			if ( dadosUsuario !== null && typeof dadosUsuario.matricula !== "undefined" && dadosUsuario.matricula.length > 0 ) {
				
				const xhr = new XMLHttpRequest();
	
				// xhr.open("GET", `https://todobiguewapi.herokuapp.com/api/listas/?matricula=${dadosUsuario.matricula}`);
				xhr.open("GET", `http://127.0.0.1:8000/api/listas/?matricula=${dadosUsuario.matricula}`);
				xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
				xhr.send();
				xhr.onreadystatechange = function() {
	
					if (xhr.readyState === 4) {
	
						if ( xhr.status === 200 ) {
	
							try {
	
								const response = JSON.parse( xhr.responseText );								
	
								if ( typeof response.error !== "undefined" ) {
									setDadosLista([]);
								} else if ( typeof response.error === "undefined" ) {
									setDadosLista(response);								
								}

							} catch (e) {
								setDadosLista([]);
							}
														
						} else {
	
							console.warn("Erro no servidor");
	
						}
	
					}
	
				};
	
			} else {
				alert('matrícula não informada.');
			}
			
		};

		getListas();
		
	}, []);
	
	let listas = [];

	if (dadosLista.length > 0) {
		dadosLista.forEach( ( info, index ) => (
			listas.push(
				<List 
					onClickModalList={handleModalShow}
					id={info.id}
					key={info.id}
					nome={info.nome}
					onClickEditModalTask={handleTaskModalShow}
					onClickModalTask={handleTaskModalShow}
				/>
			)
		) );
	}

	return (
		<div>
			<Header />

			<div className="content">

				<div className="content--lists">

					{listas}

					<div>
						<div className="lists--addList" data-type="1" onClick={handleModalShow}>
							<p>Nova Lista +</p>
						</div>
					</div>

				</div>

			</div>

			<div className="modal">
				<div className="close" onClick={handleModalClose}>
					<MdClose />
				</div>

				<form onSubmit={handleCreateList} id="formCadLista">

					<label htmlFor="">Nome da Lista</label>

					<input 
						type="text"
						name="nomeLista"
						id="nomeLista"
						minLength="3"
						placeholder="Digite o nome da lista..."
						onBlur={ e => setTituloLista( e.target.value ) }	
						required
					/>

					<input type="submit" value="Cadastrar"/>

				</form>

				<form onSubmit={handleUpdateList} id="formEditLista">
					
					<label htmlFor="">Nome da Lista</label>

					<input type="hidden" name="lista" id="lista"/>

					<input 
						type="text"
						name="editNomeLista"
						id="editNomeLista"
						minLength="3"
						placeholder="Digite o nome da lista..."
						onBlur={ e => setTituloLista( e.target.value ) }
						required
					/>

					<button type="button" className="removeItem" onClick={handleDeleteList}>Remover</button>

					<input type="submit" value="Editar"/>

				</form>

			</div>

			<div className="modal-mask" onClick={handleModalClose}></div>

			<div className="modal-task">
				<div className="close" onClick={handleTaskModalClose}>
					<MdClose />
				</div>

				<form onSubmit={handleCreateTask} id="formCadTask">

					<label htmlFor="">Nome da Tarefa</label>

					<input type="hidden" name="listaTask" id="listaTask" />

					<input 
						type="text"
						name="nomeTask"
						id="nomeTask"
						minLength="3"
						placeholder="Digite o nome da tarefa..."
						onBlur={ e => setTituloTask( e.target.value ) }
						required
					/>

					<label htmlFor="">Descrição da Tarefa</label>
					<textarea 
						name="descricaoTask" 
						id="descricaoTask"
						onBlur={ e => setDescricaoTask( e.target.value ) }
						required	
					></textarea>

					<input type="submit" value="Cadastrar"/>

				</form>

				<form onSubmit={handleUpdateTask} id="formEditTask">
					
					<label htmlFor="">Nome da Tarefa</label>

					<input type="hidden" name="task" id="task"/>

					<input 
						type="text"
						name="editNomeTask"
						id="editNomeTask"
						minLength="3"
						placeholder="Digite o nome da tarefa..."
						onBlur={ e => setTituloTask( e.target.value ) }
						required
					/>

					<label htmlFor="">Descrição da Tarefa</label>
					<textarea 
						name="descricaoEditTask" 
						id="descricaoEditTask"
						onBlur={ e => setDescricaoTask( e.target.value ) }
						required
					></textarea>

					<button type="button" className="removeItem" onClick={handleDeleteTask}>Remover</button>

					<input type="submit" value="Editar"/>

				</form>

			</div>

			<div className="modal-task-mask" onClick={handleTaskModalClose}></div>

			<div className="modal-mensagem">

				<div className="modal-mensagem--icone">
					<MdCheckCircle fill="#0cc15d" />
				</div>
				
				<div className="modal-mensagem--icone">
					<MdError fill="#e0b20a" />
				</div>

				<div className="modal-mensagem--mensagem">
					<p className="mensagem">Lista cadastrada com sucesso!</p>
				</div>

			</div>

			<div className="modal-mensagem-mask"></div>

    </div>
  );
}

export default Initial;