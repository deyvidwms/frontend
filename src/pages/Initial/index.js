import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import List from '../../components/List';

import './index.css';

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

	dadosLista.forEach( ( info, index ) => (
		listas.push(
			<List
				id={info.id}
				key={info.id}
				nome={info.nome}
			/>
		)
	) );

	return (
		<div>
			<Header />

			<div className="content">

				<div className="content--lists">

					{listas}

					<div>
						<div className="lists--addList">
							<p>Nova Lista +</p>
						</div>
					</div>

				</div>

			</div>

			<div className="modal">

			</div>

			<div className="modal-mask"></div>

    </div>
  );
}

export default Initial;