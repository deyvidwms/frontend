import React from 'react';

import './index.css';

function Task(props) {
  return (
    <div className="task" id={props.id} key={props.id}>
			<h6>{props.titulo}</h6>
    </div>
  );
}

export default Task;