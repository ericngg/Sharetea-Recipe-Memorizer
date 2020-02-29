import React, { Component } from 'react';
import "./quiz.css";
import IngredientInput from "./IngredientInput";
import TeaInput from "./TeaInput";
import SugarInput from "./SugarInput";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class Questions extends Component {
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
            index: 0
        }
        console.log(this.state.sequence);

        this.handleShuffle = this.handleShuffle.bind(this);
        this.shuffle = this.shuffle.bind(this);
        
        this.setState({
            current: this.state.recipe[this.state.sequence[this.state.index]]
        })
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
            <div className="quizContainer">
        <div className="topContainer">
            <Link to="/"><FontAwesomeIcon icon={faArrowLeft} className="back" size="2x" /></Link>
            <div className="help">
                <FontAwesomeIcon icon={faQuestionCircle} size="2x" className="hint" />
                <Link to="/settings"><button className="quizOption">Options</button></Link>
            </div>
        </div>
        <div className="questionContent">
            <p className="question">What is the recipe for <strong>{this.state.recipe[this.state.sequence[this.state.index]].name}</strong>?</p>
        </div>
        <div className="answerContent">
            <Container fluid={true} className="ingredientInput">
                <Row>
                    <Col>
                        <TeaInput val={this.state.recipe[this.state.index].recipe.tea} />
                    </Col>
                    <Col>
                        <SugarInput val={this.state.recipe[this.state.index].recipe.sugar} />
                    </Col>
                    <Col>
                        <IngredientInput val={this.state.recipe[this.state.index].recipe.ing1} />
                    </Col>
                    <Col>
                        <IngredientInput val={this.state.recipe[this.state.index].recipe.ing2} />
                    </Col>
                    <Col>
                        <IngredientInput val={this.state.recipe[this.state.index].recipe.ing3} />
                    </Col>
                </Row>
            </Container>
            <button className="questionBtn">Next</button>
            <button className="questionBtn">Skip</button>
        </div>
        <div>
            <button className="shuffle" onClick={() => {this.shuffle()}}>Shuffle</button>
        </div>
    </div>
		);
	}
}

export default Questions;

/*
const Questions = (props) => (
    <div className="quizContainer">
        <div className="topContainer">
            <Link to="/"><FontAwesomeIcon icon={faArrowLeft} className="back" size="2x" /></Link>
            <div className="help">
                <FontAwesomeIcon icon={faQuestionCircle} size="2x" className="hint" />
                <Link to="/settings"><button className="quizOption">Options</button></Link>
            </div>
        </div>
        <div className="questionContent">
            <p className="question">What is the recipe for <strong>{props.recipe.name}</strong>?</p>
        </div>
        <div className="answerContent">
            <Container fluid={true} className="ingredientInput">
                <Row>
                    <Col>
                        <TeaInput val={props.recipe.recipe.tea} />
                    </Col>
                    <Col>
                        <SugarInput val={props.recipe.recipe.sugar} />
                    </Col>
                    <Col>
                        <IngredientInput val={props.recipe.recipe.ing1} />
                    </Col>
                    <Col>
                        <IngredientInput val={props.recipe.recipe.ing2} />
                    </Col>
                    <Col>
                        <IngredientInput val={props.recipe.recipe.ing3} />
                    </Col>
                </Row>
            </Container>
            <button className="questionBtn">Next</button>
            <button className="questionBtn">Skip</button>
        </div>
        <div>
            <button className="shuffle" onclick={() => {console.log("hello")}}>Shuffle</button>
        </div>
    </div>
)

export default Questions;

*/