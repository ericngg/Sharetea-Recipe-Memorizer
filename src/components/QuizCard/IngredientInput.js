import React, { Component } from 'react';
import './quiz.css';

class IngredientInput extends Component {
    input() {
        if (this.props.val === "N/A") {
            return (
                <div className="hide">
                    <p className="ingrLabel">{this.props.val}</p>
                    <input className="ingredient disabled" disabled={true} />
                </div>
            );
        } else {
            return (
                <>
                    <div>
                        <p className="ingrLabel">{this.props.val}</p>
                        <input className="ingredient" type="number" step="0.1" min="0" placeholder="0.0" />
                    </div>
                </>
            );
        }
    }

    render() {
        return (
            <>
                {this.input()}
            </>

        );
    }
}

export default IngredientInput;
