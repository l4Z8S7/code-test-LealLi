import React from 'react';

const Question = ({index, totalIndex, question, answer = {}, prev, next}) => {
 	return (
		<div>
			<div className="header">
			{
				index === 0 ? void(0): <img src={require("../prev.jpg")} alt="prev" onClick={() => prev()} />
			}
			<p>step {index + 1} of {totalIndex}</p>
			</div>
			<h1>{question.title}</h1>
			<p>{question.body}</p>
			<ul>
				{
					question.options.map((opt, i) => <li key={i}>
							<button 
							style={answer.option === opt.option ? {backgroundColor: "#00ff00"} : void(0)} 
							onClick={() => next(index, opt)} 
							>
								{opt.option}
							</button>
						</li>
					)
				}
			</ul>
		</div>
	);
}

export default Question;