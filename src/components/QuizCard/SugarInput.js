import React, { Component } from 'react';
import './quiz.css';

class SugarInput extends Component {
    input() {
        if (this.props.val === "N/A") {
            return (
                <>
                    <div>
                        <p className="ingrLabel">{this.props.val}</p>
                        <input className="ingredient" type="number" step="1" min="0" disabled={true} />
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div>
                        <p className="ingrLabel">{this.props.val}</p>
                        <input className="ingredient" type="number" step="1" min="0" placeholder="0" />
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

export default SugarInput;
