import React from 'react';
import "./quiz.css";
import IngredientInput from "./IngredientInput";
import TeaInput from "./TeaInput";
import SugarInput from "./SugarInput";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


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
            <button className="questionBtn">Submit</button>
            <button className="questionBtn">Skip</button>
        </div>
    </div>
)

export default Questions;