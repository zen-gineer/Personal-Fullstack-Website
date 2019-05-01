import React, { Component } from 'react';

class Resume extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<embed
				className=""
				// src="https://resume.creddle.io/resume/27m4xt3l91n"
				src="https://github.com/zen-gineer/Dr-Seuss-Machine-Learning-LSTM/blob/master/README.md"
				width="100%"
				height="1100px"
			/>
		);
	}

	Title() {
		return (
			<div className="section-title">
				<h2>Blog Posts</h2>
			</div>
		);
	}
}

export default Resume;
