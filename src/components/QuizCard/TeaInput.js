import React, { Component } from 'react';
import './quiz.css';

class TeaInput extends Component {
    input() {
        if (this.props.val === "N/A") {
            return (
                <>
                    <div>
                        <p className="ingrLabel">Tea</p>
                        <input className="ingredient" type="number" step="1" min="0" disabled={true} />
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div>
                        <p className="ingrLabel">Tea</p>
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

export default TeaInput;
