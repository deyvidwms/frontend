import React from 'react';

import './index.css';

import Logo from '../../assets/images/logo-compacta.png';

function Login() {
  return (
		
		<div className="container">
			
			<div className="container--bloco-login">

				<div className="bloco-login--card-form">

					<form className="card-form--form-login">

						{/* <h1 className="form-login--title">To do Biguew</h1> */}
						<div className="form-login--logo">

							<img src={Logo} alt=""/>

						</div>

						<label htmlFor="">Login</label>
						
						<input type="text" placeholder="Digite o Usuário ou Email" />
						
						<label htmlFor="">Senha</label>
						
						<input type="password" placeholder="Digite sua senha" />
						
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