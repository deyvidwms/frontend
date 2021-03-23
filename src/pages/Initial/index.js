import React, { useEffect, useState } from 'react';

import { MdClose } from "react-icons/md";

import Header from '../../components/Header';
import List from '../../components/List';

import './index.css';

function handleModalShow(e) {
	
	let type = e.target.getAttribute("data-type");
	
	let texto = e.target.innerText;

	if ( type === "1" ) {
		document.getElementById('formCadLista').style.display = 'block';
		document.getElementById('formEditLista').style.display = 'none';
		document.getElementsByClassName('modal')[0].style.display = 'block'
		document.getElementsByClassName('modal')[0].style.height = '180px'
		document.getElementsByClassName('modal-mask')[0].style.display = 'block';
	} else if ( type === "2" ) {
		document.getElementById('editNomeLista').value = texto;
		document.getElementById('formCadLista').style.display = 'none';
		document.getElementById('formEditLista').style.display = 'block';
		document.getElementsByClassName('modal')[0].style.display = 'block'
		document.getElementsByClassName('modal')[0].style.height = '180px'
		document.getElementsByClassName('modal-mask')[0].style.display = 'block';
	}
	
}

function handleModalClose() {
	document.getElementsByClassName('modal')[0].style.display = 'none'
	document.getElementsByClassName('modal-mask')[0].style.display = 'none';
}

function Initial() {
	const [dadosLista, setDadosLista] = useState([]);

	useEffect( () => {
		
		async function getListas () {

			const dadosUsuario = JSON.parse( localStorage.getItem("dadosUsuario") ) || null;
	
			if ( dadosUsuario !== null && typeof dadosUsuario.matricula !== "undefined" && dadosUsuario.matricula.length > 0 ) {
				
				const xhr = new XMLHttpRequest();
	
				// xhr.open("POST", `https://todobiguewapi.herokuapp.com/api/listas/${dadosUsuario.matricula}`);
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
				<List onClick={handleModalShow}
					id={info.id}
					key={info.id}
					nome={info.nome}
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

				<form id="formCadLista">

					<label htmlFor="">Nome da Lista</label>

					<input 
						type="text"
						name="nomeLista"
						id="nomeLista"
						minLength="3"
						placeholder="Digite o nome da lista..."
						required
					/>

					<input type="submit" value="Cadastrar"/>

				</form>

				<form action="" id="formEditLista">
					
					<label htmlFor="">Nome da Lista</label>

					<input type="hidden" name="lista" id="lista"/>

					<input 
						type="text"
						name="editNomeLista"
						id="editNomeLista"
						minLength="3"
						placeholder="Digite o nome da lista..."
						required
					/>

					<input type="submit" value="Editar"/>

				</form>

			</div>

			<div className="modal-mask" onClick={handleModalClose}></div>

    </div>
  );
}

export default Initial;