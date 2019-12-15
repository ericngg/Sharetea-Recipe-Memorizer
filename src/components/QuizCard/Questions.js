import React from 'react';
import "./quiz.css";
import IngredientInput from "./IngredientInput";

const Questions = (props) => (
    <div className="quizContainer">
        <div className="questionContent">
            <h1>Hello</h1>
        </div>
        <div className="answerContent">
            <div className="ingredientInput">
                <IngredientInput val={props.recipe.recipe.ing1} />
                <IngredientInput val={props.recipe.recipe.ing2} />
                <IngredientInput val={props.recipe.recipe.ing3} />
            </div>
            <button id="submit">Submit</button>
        </div>
    </div>
)

export default Questions;