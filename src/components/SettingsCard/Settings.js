import React, { Component } from 'react';
import "./settings.css";
import Switch from "react-switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class Settings extends Component {

    render() {
        return (
            <div className="container">
                <div className="optionsContainer">
                    <div className="topContainer">
                        <Link to={this.props.current}><FontAwesomeIcon icon={faArrowLeft} className="back" size="2x" /></Link>
                    </div>
                    <p className="optionsTitle">Settings</p>
                    <div>
                        <Switch className="settingInput" onChange={this.props.change} checked={this.props.checked} />
                        <p className="settingInput settingLabel">Random Sugar Levels</p>
                    </div>
                </div>
            </ div>
        );
    }
}

export default Settings;
