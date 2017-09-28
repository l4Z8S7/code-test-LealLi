import React from 'react';

const Start =  ({next}) => {
	return (
		<div>
			<h1>Are You Ready?</h1>
			<button onClick={() => next()}>Start!</button>
		</div>
	);
}

export default Start;