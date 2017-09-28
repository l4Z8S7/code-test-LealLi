import React from 'react';

const Review = ({answers, prev, next}) => {
	return (
		<div>
			<img src={require("../prev.jpg")} alt="prev" onClick={() => prev()} />
			<h1>Your Answers:</h1>
			<ul>
			{
				answers.map((answer, index) => <li 
					key={index} 
					className="answer"
					>
						{`${index + 1}: ${answer.option}`}
					</li>)
			}
			</ul>
			<button onClick={() => next()}>Confirm</button>
		</div>
	);
}

export default Review;