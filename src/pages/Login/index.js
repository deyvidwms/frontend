import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// import api from '../../services/api';

import './index.css';

import Logo from '../../assets/images/logo-compacta.png';

function Login() {

	const [matricula, setMatricula] = useState('');
	const [senha, setSenha] = useState('');
	
	async function handleLogin (event) {
		event.preventDefault();
	
		try {

			if ( matricula.length === 7 || matricula.length === 14 ) {
				
				var xhr = new XMLHttpRequest();

				xhr.open("POST", "https://todobiguewapi.herokuapp.com/api/autentica");
				xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
				xhr.send("matricula=20171104010072&senha=123456789");
				xhr.onreadystatechange = function() {

					if (xhr.readyState === 4) {

						if ( xhr.status === 200 ) {

							//var respo//nse = JSON.parse(xhr.responseText);
							
							let response = xhr.responseText;

							console.log(response);
							
						} else {

							console.warn("Erro no servidor");

						}

					}

				};


				// const response = await api.post('api/listas/', {
				// const response = await api.post('api/autentica/', {
				// 	matricula,
				// 	senha,
				// });

				// const response = await api.get('api/autentica/');

				// console.log(response);

				console.log('senha', senha);

			} else {
				alert('verifique novamente a matrícula informada.');
			}

		} catch (error) {
			alert(error);
			// console.warn(error);
		}

	};


	return (
		
		<div className="container">
			
			<div className="container--bloco-login">

				<div className="bloco-login--card-form">

					<form onSubmit={handleLogin} className="card-form--form-login">

						<div className="form-login--logo">

							<img src={Logo} alt=""/>

						</div>

						<label htmlFor="">Login</label>
						
						<input 
							type="text" 
							pattern="[0-9]*" 
							minLength="7" 
							maxLength="14" 
							placeholder="Digite sua matrícula"
							onBlur={ e => setMatricula( e.target.value) }	
							required
						/>
						
						<label htmlFor="">Senha</label>
						
						<input 
							type="password" 
							placeholder="Digite sua senha"
							onBlur={ e => setSenha( e.target.value) }
							required 
						/>
						
						<input type="submit" value="Entrar"/>

						<div className="form-login--esqueceu-senha">

							<a href="https://suap.ifrn.edu.br/comum/solicitar_trocar_senha/">Esqueci a senha</a>

						</div>

					</form>

				</div>

			</div>

			<div className="container--bloco-imagem">

			</div>

    </div>

	);
}

export default Login;