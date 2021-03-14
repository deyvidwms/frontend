import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import './index.css';

import Logo from '../../assets/images/logo-compacta.png';

function Login() {

	const [matricula, setMatricula] = useState('');
	const [senha, setSenha] = useState('');
	
	async function handleLogin (event) {
		event.preventDefault();
	
		console.log(event);

		try {

			if ( matricula.length === 7 || matricula.length === 14 ) {
				
				const response = await api.get('autentica.php');

				console.log(response);

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