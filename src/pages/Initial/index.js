import React from 'react';

import Header from '../../components/Header';

import './index.css';

function Initial() {
  return (
    <div>
			<Header />

			<div className="content">

				<div className="content--lists">

					<div className="lists--list">

						<div className="list--title">
							<h5>Trabalho</h5>
						</div>

						<div className="list--content">
							
							<div className="conent--task">

								<div className="task">
									<h6>Criar banner</h6>
								</div>

							</div>
							
							<button>Adicionar +</button>
						</div>

					</div>
					<div className="lists--list">

						<div className="list--title">
							<h5>Escola</h5>
						</div>

						<div className="list--content">
							<button>Adicionar +</button>
						</div>

					</div>
					<div className="lists--list">

						<div className="list--title">
							<h5>Casa</h5>
						</div>

						<div className="list--content">
							<button>Adicionar +</button>
						</div>

					</div>
					<div className="lists--list">

						<div className="list--title">
							<h5>Natação</h5>
						</div>

						<div className="list--content">
							<button>Adicionar +</button>
						</div>

					</div>
					<div className="lists--list">

						<div className="list--title">
							<h5>Academia</h5>
						</div>

						<div className="list--content">
							<button>Adicionar +</button>
						</div>

					</div>
					<div className="lists--list">

						<div className="list--title">
							<h5>Tarefas</h5>
						</div>

						<div className="list--content">
							<button>Adicionar +</button>
						</div>

					</div>

					<div className="lists--addList">
						<p>Nova Lista +</p>
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