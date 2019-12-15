import React, { Component } from 'react';
import './quiz.css';

class IngredientInput extends Component {
    label() {
        if (this.props.val === "N/A") {
            return (
                <label className="hidden">
                    {this.props.val}
                    <input className="ingredient" type="number" step="0.1" min="0" placeholder="0.0" />
                </label>
            );
        } else {
            return (
                <label>
                    {this.props.val}
                    <input className="ingredient" type="number" step="0.1" min="0" placeholder="0.0" />
                </label>
            );
        }
    }

    render() {
        return (
            <>
                {this.label()}
            </>

        );
    }
}

export default IngredientInput;
