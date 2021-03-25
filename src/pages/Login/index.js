import React, { useState } from 'react';

// import { isAuthenticated } from '../../Auth.js';

import { useHistory } from 'react-router-dom';

import { MdRefresh } from "react-icons/md";

import './index.css';

import Logo from '../../assets/images/logo-compacta.png';
import ImagemLogin from '../../assets/images/peloamor.gif';




function Login() {

	const [matricula, setMatricula] = useState('');
	const [senha, setSenha] = useState('');
	
	const history = useHistory();

	async function handleLogin (event) {
		event.preventDefault();
	
		document.getElementById("buttonLogin").setAttribute("disabled", "disabled");
		document.getElementsByClassName("rotate")[0].style.display = "inline";

		try {

			if ( matricula.length === 7 || matricula.length === 14 ) {
				
				let xhr = new XMLHttpRequest();

				xhr.open("POST", "https://todobiguewapi.herokuapp.com/api/autentica");
				xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
				xhr.send(`matricula=${matricula}&senha=${senha}`);
				xhr.onreadystatechange = function() {

					if (xhr.readyState === 4) {

						if ( xhr.status === 200 ) {

							try {

								let response = JSON.parse(xhr.responseText);

								if ( ( typeof response.matricula != "undefined" && response.matricula.length > 0 ) && 
									( typeof response.vinculo != "undefined" && response.vinculo.length > 0 ) ) {

									localStorage.setItem( "dadosUsuario", JSON.stringify(response) );
									
									history.push('/');

								} else {
									
									document.getElementById("buttonLogin").removeAttribute("disabled");
									document.getElementsByClassName("rotate")[0].style.display = "none";

									alert('falha ao tentar logar');

								}

							} catch (e) {

								document.getElementById("buttonLogin").removeAttribute("disabled");
								document.getElementsByClassName("rotate")[0].style.display = "none";

								console.log(e);
							}
														
						} else {

							document.getElementById("buttonLogin").removeAttribute("disabled");
							document.getElementsByClassName("rotate")[0].style.display = "none";

							console.warn("Erro no servidor");

						}

					}

				};

			} else {

				document.getElementById("buttonLogin").removeAttribute("disabled");
				document.getElementsByClassName("rotate")[0].style.display = "none";

				alert('verifique novamente a matrícula informada.');
			}

		} catch (error) {

			document.getElementById("buttonLogin").removeAttribute("disabled");
			document.getElementsByClassName("rotate")[0].style.display = "none";

			alert(error);
		}

	};
// 
	// let histAux = useHistory();

	// isAuthenticated ? (
	// 	// <Redirect to="/" />
	// 	histAux.push('/')
	// ) : (
	// 	console.log('')
	// );

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
						
						<button id="buttonLogin" type="submit">Entrar <MdRefresh fill="#FFF" className="rotate" /> </button>
						{/* <input type="submit" value="Entrar"/> */}

						<div className="form-login--esqueceu-senha">

							<a href="https://suap.ifrn.edu.br/comum/solicitar_trocar_senha/">Esqueci a senha</a>

						</div>

					</form>

				</div>

			</div>

			<div className="container--bloco-imagem" style={{"display":"flex","justifyContent":"center", "alignItems":"center"}}>

				<img className="bloco-imagem--imagem" src={ImagemLogin} alt=""/>

			</div>

    </div>

	);
}

export default Login;