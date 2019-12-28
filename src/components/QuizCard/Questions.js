import React from 'react';
import "./quiz.css";
import IngredientInput from "./IngredientInput";
import TeaInput from "./TeaInput";
import SugarInput from "./SugarInput";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";


const Questions = (props) => (
    <div className="quizContainer">
        <FontAwesomeIcon icon={faQuestionCircle} size="3x" className="hint" />
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
            <button id="submit">Submit</button>
        </div>
    </div>
)

export default Questions;