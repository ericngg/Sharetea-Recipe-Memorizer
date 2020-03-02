import React, { Component } from 'react';
import './quiz.css';
import Questions from "./Questions";

class Quiz extends Component {
	constructor(props) {
		super(props);

		let seq = [];

		for (var i = 0; i < 5; i++) {
			seq.push(i);
		}

		if (this.props.shuffle) {
            this.initialShuffle(seq);
		}
		
		this.state = {
            recipe: this.props.recipe,
			sequence: seq, // order
			index: 0,
			current: this.props.recipe[seq[0]]
        }
        console.log(this.state.sequence);
        
		console.log(this.state.current);

		this.handleShuffle = this.handleShuffle.bind(this);
        this.shuffle = this.shuffle.bind(this);
	}

	handleShuffle(seq) {
		console.log("current: " + seq);
		var current = seq.length;
		var temp;
		var random;

		while (0 !== current) {
			random = Math.floor(Math.random() * current);
			current -= 1;

			temp = seq[current];
			seq[current] = seq[random];
			seq[random] = temp;
		}

        console.log("new: " + seq);
    }
    
    shuffle() {
		this.handleShuffle(this.state.sequence);
		
		this.setState({
			current: this.props.recipe[this.state.sequence[0]]
		})
        console.log("seq2:" + this.state.sequence);
	}
	
	// Shuffles once if shuffle is true
    initialShuffle(seq) {
		let newSequence = seq;
		console.log("current: " + newSequence);
		var current = newSequence.length;
		var temp;
		var random;

		while (0 !== current) {
			random = Math.floor(Math.random() * current);
			current -= 1;

			temp = newSequence[current];
			newSequence[current] = newSequence[random];
			newSequence[random] = temp;
        }

        this.setState({
            sequence: newSequence
        })
    }

	render() {
		return (
			<div className="container">
				<Questions current={this.state.current} shuffle={this.shuffle} initial={this.props.initial} />
			</div>
		);
	}
}

export default Quiz;
