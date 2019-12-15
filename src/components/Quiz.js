import React, { Component } from 'react';
import '../App.css';
import Questions from "./QuizCard/Questions"

class Quiz extends Component {

	render() {
		return (
			<div className="container">
				<Questions recipe={this.props.recipe[0]} />
			</div>
		);
	}
}

export default Quiz;
