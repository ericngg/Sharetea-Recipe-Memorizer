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

		this.state = {
			current: this.props.recipe,
			sequence: seq, // order
			index: 0
		}

        this.handleShuffle = this.handleShuffle.bind(this);
        this.shuffle = this.shuffle.bind(this);
    }
    
    handleShuffle(seq) {
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

        console.log("new: " + newSequence);
    }
    
    shuffle() {
        this.handleShuffle(this.state.sequence);
        console.log("seq2:" + this.state.sequence);
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
            <p className="question">What is the recipe for <strong>{this.state.current.name}</strong>?</p>
        </div>
        <div className="answerContent">
            <Container fluid={true} className="ingredientInput">
                <Row>
                    <Col>
                        <TeaInput val={this.props.recipe.recipe.tea} />
                    </Col>
                    <Col>
                        <SugarInput val={this.props.recipe.recipe.sugar} />
                    </Col>
                    <Col>
                        <IngredientInput val={this.props.recipe.recipe.ing1} />
                    </Col>
                    <Col>
                        <IngredientInput val={this.props.recipe.recipe.ing2} />
                    </Col>
                    <Col>
                        <IngredientInput val={this.props.recipe.recipe.ing3} />
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